"use client";

// File: src/components/Navbar.tsx
// This is the top navigation bar shown on every page.
// "use client" is needed because we use usePathname() — a browser hook.
// usePathname() tells us the current URL so we can highlight the active link.

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Check if a nav link is currently active
  const isActive = (path: string) => {
    if (path === "/students") {
      return pathname.startsWith("/students") || pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left: Logo + Nav Links */}
        <div className="navbar-left">
          <Link href="/students" className="navbar-logo">
            <span className="navbar-logo-icon">🎓</span>
            <span>Campus Directory</span>
          </Link>

          <nav className="navbar-links" aria-label="Main Navigation">
            <Link href="/students" className={`navbar-link ${isActive("/students") ? "active" : ""}`}>
              Students
            </Link>
            <Link href="/departments" className={`navbar-link ${isActive("/departments") ? "active" : ""}`}>
              Departments
            </Link>
            <Link href="/about" className={`navbar-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
          </nav>
        </div>

        {/* Right: Badge */}
        <div className="navbar-right">
          <span className="navbar-badge">Frontend Practice</span>
        </div>
      </div>
    </header>
  );
}
