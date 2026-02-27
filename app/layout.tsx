import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import Analytics from "@/app/components/Analytics";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "SteerMesh | Steer AI development across tools",
  description:
    "Define guidance once. Compile into Kiro, Cursor, Amazon Q—and keep your team aligned with versioned, governed steering bundles.",
  metadataBase: new URL("https://steermesh.dev"),
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "SteerMesh",
    description:
      "Define guidance once. Compile into Kiro, Cursor, Amazon Q—and keep your team aligned with versioned, governed steering bundles.",
    url: "https://steermesh.dev",
    siteName: "SteerMesh",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SteerMesh",
    description:
      "Define guidance once. Compile into Kiro, Cursor, Amazon Q—and keep your team aligned with versioned, governed steering bundles."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ink-900">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans text-haze-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
