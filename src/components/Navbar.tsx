"use client";

// =============================================================================
// File: src/components/Navbar.tsx
// Purpose: Website na badha pages par top navbar dekhay chhe.
// usePathname hook thi active link olkhi ne niche blue line aave chhe.
// =============================================================================

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Current URL path check karva mate
  const pathname = usePathname();

  // Link active chhe k nai te check karva mate simple function
  const isActive = (path: string) => {
    if (path === "/students") {
      return pathname.startsWith("/students") || pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left side: Logo ane links */}
        <div className="navbar-left">
          {/* Logo */}
          <Link href="/students" className="navbar-logo">
            <span className="navbar-logo-icon">🎓</span>
            <span>Campus Directory</span>
          </Link>

          {/* Navigation Links */}
          <nav className="navbar-links" aria-label="Main Navigation">
            <Link
              href="/students"
              className={`navbar-link ${isActive("/students") ? "active" : ""}`}
            >
              Students
            </Link>

            <Link
              href="/departments"
              className={`navbar-link ${isActive("/departments") ? "active" : ""}`}
            >
              Departments
            </Link>

            <Link
              href="/about"
              className={`navbar-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right side: Frontend Practice badge */}
        <div className="navbar-right">
          <span className="navbar-badge">Frontend Practice</span>
        </div>
      </div>
    </header>
  );
}
