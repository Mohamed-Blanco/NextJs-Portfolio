import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconArticle,
} from "@tabler/icons-react";

import Poppins from "next/font/local";

// If loading a variable font, you don't need to specify the font weight

const popinsFont = Poppins({
  src: "/fonts/Poppins-Regular.ttf", // note the ".." to go up one folder
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labiad Mohamed Portfolio",
  description: "Labiad Mohamed Portfolio",
};

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "Products",
    icon: (
      <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/articles",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },

  {
    title: "Changelog",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/labiad-mohamed-499b3a1a7/",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/labiadmo920",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Mohamed-Blanco",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className="w-full items-center z-40 flex fixed top-10  ">
        <FloatingDock items={links} />
      </nav>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${popinsFont.className} `}
      >
        {children}
      </body>
    </html>
  );
}
