import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { siteConfig } from "@/lib/site";
import { LayoutProps } from "@/types/layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const domain = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: [{ url: "/logo.svg", href: "/logo.svg" }],
  keywords: ["Exflow", "Trello Clone"],
  category: "Project Management",
  applicationName: "Exflow",
  authors: [{ name: "Andrew Mason", url: "https://andeh.uk" }],
  publisher: "Andrew Mason",
  openGraph: {
    images: [{ url: "/hero.svg" }],
    type: "website",
    countryName: "United Kingdom",
    description:
      "Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique — accomplish it all with Exflow.",
    locale: "en_GB",
    siteName: "Exflow",
    title: "Exflow",
    url: domain,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
