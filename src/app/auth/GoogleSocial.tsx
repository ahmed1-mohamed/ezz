'use client'
import { Button } from "@/components/ui/button";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSocial() {

    const router = useRouter();

    const handleSocialSignIn = async (provider: string) => {
        try {
            const result = await signIn(provider, {
                redirect: false,
            });

            if (result?.error) {
                return;
            }

            const session = await getSession();
            const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();
            router.push(`/${userType}/home`);

        } catch (error) {
            console.error("Sign in failed:", error);
        }
    };
    return (
        <Button
            variant="outline"
            className="w-full gap-2 border border-[#E5E7EB] rounded-xl h-12 bg-[#F9FAFB] hover:bg-gray-50 transition-colors shadow-sm font-semibold text-sm text-[#4A5565] flex items-center justify-center"
            onClick={() => handleSocialSignIn("google")}
            type="button"
            aria-label="Sign in with Google"
        >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
        </Button>
    )
}