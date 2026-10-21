"use client";

// =============================================================================
// File: src/components/Footer.tsx
// Purpose: Website nu bottom footer component.
// Screenshot mujab copyright text ane current path batavse.
// =============================================================================

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        {/* Left side: Copyright information */}
        <div>
          <span>Campus Directory © Academic Informatics Core</span>
        </div>

        {/* Right side: Live path ane green status dot */}
        <div className="footer-path-status">
          <span>Path: {pathname}</span>
          <span className="status-live-dot" title="System Operational"></span>
        </div>
      </div>
    </footer>
  );
}
