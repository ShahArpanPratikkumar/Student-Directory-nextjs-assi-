// File: src/app/layout.tsx
// This is the ROOT LAYOUT. It wraps every page.
// Navbar and Footer are placed here so they appear on ALL pages automatically.

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// SEO: Page title and description shown in browser tab
export const metadata: Metadata = {
  title: "Campus Directory",
  description: "Student and Department Directory built with Next.js App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar appears at the top of every page */}
        <Navbar />

        {/* 'children' = the current page content */}
        <main className="container">{children}</main>

        {/* Footer appears at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
