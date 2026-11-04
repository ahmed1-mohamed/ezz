import type { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Property Adviser",
    default: "Sign In | Property Adviser",
  },
  description: "Sign in to access your Property Adviser property management dashboard.",
};

interface AuthLayoutProps {
    children: ReactNode;
}

const shapes = [
    {
        className:
            "absolute -left-12 top-10 w-48 md:w-72 lg:w-[500px] opacity-25 pointer-events-none",
    },
    {
        className:
            "absolute right-0 -top-16 w-48 md:w-72 lg:w-[500px] opacity-25 pointer-events-none",
    },
    {
        className:
            "absolute bottom-0 left-[60%] w-24 md:w-32 lg:w-40 opacity-25 pointer-events-none",
    },
];

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#008081]">
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
            >
                {shapes.map((shape, index) => (
                    <div key={index} className={shape.className}>
                        <Image
                            src="/images/shape-12.svg"
                            alt=""
                            width={500}
                            height={500}
                            priority
                            unoptimized
                            className="w-full h-auto"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                ))}
            </div>

            <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6">
                {children}
            </main>
        </div>
    );
}