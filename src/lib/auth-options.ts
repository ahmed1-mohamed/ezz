import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies, headers } from "next/headers";
import GoogleProvider from "next-auth/providers/google";
import { loginRateLimit, blacklistToken } from "@/lib/rate-limiter";
import { API_BASE_URL } from "@/data/config";

const apiUrlWithoutDashboard = API_BASE_URL;

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        "fcm-token": { label: "FCM Token", type: "text" },
      },
      async authorize(credentials, req) {
        try {
          const headerStore = await headers();
          const ip =
            headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            headerStore.get("x-real-ip") ||
            "unknown";

          const rateLimitResult = await loginRateLimit(ip);
          if (!rateLimitResult.allowed) {
            throw new Error(
              `Too many login attempts. Please try again in ${rateLimitResult.retryAfter} seconds.`
            );
          }

          const fcmToken = credentials?.["fcm-token"] || "";
          const res = await fetch(
            `${apiUrlWithoutDashboard}/auth/login`,
            {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Context": "dashboard",
                "fcm-token": fcmToken,
                "country-id": "1",
                "country_id": "1",
                "ngrok-skip-browser-warning": "69420",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
                "fcm-token": fcmToken,
              }),
            },
          );

          const rawText = await res.text();
          let response: any = null;
          try {
            response = rawText ? JSON.parse(rawText) : null;
          } catch {
            console.error("Non-JSON auth response from server:", rawText.slice(0, 500));
            if (!res.ok) {
              throw new Error(
                `Backend server error (${res.status}). The API server returned an invalid response. Please check server logs.`
              );
            }
            throw new Error("Invalid response received from authentication server.");
          }

          if (!res.ok) {
            const errorMessage =
              response?.message ||
              response?.error ||
              (response?.errors && typeof response.errors === "object"
                ? Object.values(response.errors).flat().join(", ")
                : null) ||
              `Login failed (${res.status})`;
            throw new Error(errorMessage);
          }

          const userData = response.data;

          return {
            id: String(userData?.user_id),
            email: userData?.email,
            name: `${userData?.first_name} ${userData?.last_name}`,
            accessToken: userData?.access_token,
            refreshToken: userData?.refresh_token,
            expires_in: Number(userData?.expires_in),
            refresh_expires_in: Number(userData?.refresh_expires_in),

            role_id: userData?.role?.role_id,
            role_name: userData?.role?.role_name,
            user_type: userData?.user_type || userData?.role?.role_name?.toLowerCase(),
            expert_id: userData?.user_expert_relationship?.expert_id,

            profile_picture: userData?.profile_picture,
            phone_number: userData?.phone_number,

            user_developer_relationship: userData?.user_developer_relationship,
          };
        } catch (error) {
          throw new Error(
            error instanceof Error ? error.message : "Login failed",
          );
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { access_type: "offline", prompt: "consent" } },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/") && !url.startsWith("//")) return `${baseUrl}${url}`;
      try {
        if (new URL(url).origin === new URL(baseUrl).origin) return url;
      } catch {
      }
      return baseUrl;
    },

    async signIn({ user, account }) {
      if (account && account.provider && account.provider !== "credentials") {
        try {
          const payload = {
            provider_name: account.provider,
            access_token: account.access_token,
          };

          const response = await fetch(
            `${apiUrlWithoutDashboard}/auth/social-login`,
            {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                original: "dashboard",
                'x-context': "dashboard",
                "country-id": "1",
                "country_id": "1",
                "ngrok-skip-browser-warning": "69420",
              },
              body: JSON.stringify(payload),
            }
          );

          const rawText = await response.text();
          let data: any = null;
          try {
            data = rawText ? JSON.parse(rawText) : null;
          } catch {
            console.error("Non-JSON social login response:", rawText.slice(0, 500));
            return false;
          }

          if (!response.ok) {
            console.error("Social login server error:", data);
            return false;
          }

          if (data?.data) {
            user.id = data.data.user_id.toString();
            user.email = data.data.email;
            user.name = `${data.data.first_name} ${data.data.last_name}`;
            user.accessToken = data.data.access_token;
            user.refreshToken = data.data.refresh_token;
            user.expires_in = data.data.expires_in;
            user.refresh_expires_in = data.data.refresh_expires_in;

            user.role_id = data.data.role.role_id;
            user.role_name = data.data.role.role_name;
            user.user_type = data.data.user_type || data.data.role.role_name?.toLowerCase();
            user.expert_id = data?.data.user_expert_relationship?.expert_id;

            user.phone_number = data.data.phone_number;
            user.profile_picture = data.data.profile_picture;

            user.user_developer_relationship = data.data?.user_developer_relationship;
          }

          return true;
        } catch (error) {
          console.error("=== SOCIAL LOGIN ERROR ===");
          console.error(error);
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user, account, trigger, session }) {
      if (account && user) {
        const cookieStore = await cookies();

        if (user.refreshToken) {
          cookieStore.set("refresh_token", user.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: user.refresh_expires_in ?? 60 * 60 * 24,
          });
        }

        return {
          ...token,
          id: user.id,
          accessToken: user.accessToken,

          expires_at: Math.floor(Date.now() / 1000) + (user.expires_in ?? 3600),

          name: user.name,
          email: user.email,

          role_id: user.role_id,
          role_name: user.role_name,
          user_type: user.user_type ?? token.user_type,
          expert_id: user.expert_id,

          profile_picture: user.profile_picture,
          phone_number: user.phone_number,

          user_developer_relationship: user.user_developer_relationship,
        };
      }

      if (trigger === "update" && session) {
        return {
          ...token,
          accessToken: session.user?.accessToken ?? token.accessToken,
          expires_at: session.user?.expires_at ?? token.expires_at,
        };
      }

      return token;
    },

    async session({ session, token }) {
      if (token.error) {
        session.error = token.error as string;
        return session;
      }

      session.user = {
        id: token.id as string,
        accessToken: token.accessToken as string,

        expires_at: token.expires_at as number,

        role_id: token.role_id as number,
        role_name: token.role_name as string,
        user_type: token.user_type as string,
        expert_id: token.expert_id as number,

        name: token.name as string,
        email: token.email as string,

        profile_picture: token.profile_picture as string,
        phone_number: token.phone_number as string,

        user_developer_relationship: token.user_developer_relationship,
      };

      if (token.expires_at) {
        const expMs = Number(token.expires_at) * 1000;
        if (!isNaN(expMs) && isFinite(expMs)) {
          session.expires = new Date(expMs).toISOString();
        }
      }

      return session;
    },
  },
  events: {
    async signOut({ token }) {
      const cookieStore = await cookies();
      cookieStore.delete("refresh_token");

      if (token?.accessToken && token?.expires_at) {
        await blacklistToken(
          token.accessToken as string,
          token.expires_at as number
        );
      }
    },
  },
};