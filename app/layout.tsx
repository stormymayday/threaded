import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers";

export const metadata: Metadata = {
    title: "Threaded | Engage in Topic-Based Discussions",
    description:
        "Join Threaded, a Next.js-powered social platform where you can create posts, comment on discussions, and explore topics that matter to you.",
    keywords:
        "social media, discussion forum, Next.js, topic-based conversations, online community",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
