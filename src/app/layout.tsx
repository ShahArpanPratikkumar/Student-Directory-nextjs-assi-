// =============================================================================
// File: src/app/layout.tsx
// Purpose: Root layout file chhe. Badha pages aa layout ni andar render thay chhe.
// Navbar ane Footer ahiya ek j vaar mukva thi badha pages par automatically aavi jaay.
// =============================================================================

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page title ane description (SEO meta tags)
export const metadata: Metadata = {
  title: "Campus Directory — Student & Department Portal",
  description:
    "Explore student profiles, academic departments, and specializations built with Next.js App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top Navbar */}
        <Navbar />

        {/* Main page content je center container ma aavse */}
        <main className="container">{children}</main>

        {/* Bottom Footer */}
        <Footer />
      </body>
    </html>
  );
}
