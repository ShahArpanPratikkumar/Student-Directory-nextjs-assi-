// =============================================================================
// File: src/app/not-found.tsx
// Purpose: Custom 404 Not Found Page (Screenshot 1).
// Jyare koi invalid URL aave athva student id na male tyare aa page dekhay chhe.
// =============================================================================

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NotFound() {
  return (
    <div>
      {/* Top Breadcrumbs: Directory / Not Found */}
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "Not Found" },
        ]}
      />

      <div className="not-found-container">
        {/* 404 Route Not Found Badge */}
        <div className="not-found-badge">
          <span>● 404 · ROUTE NOT FOUND</span>
        </div>

        {/* Main Heading */}
        <h1 className="not-found-heading">Student or department not found</h1>

        {/* Description text */}
        <p className="not-found-text">
          The requested directory entry or path could not be located. It may have
          moved or the identifier might be invalid.
        </p>

        {/* Action Buttons */}
        <div className="not-found-actions">
          <Link href="/students" className="btn-primary">
            Return to Students Directory
          </Link>
          <Link href="/departments" className="btn-outline">
            Browse All Departments
          </Link>
        </div>

        {/* Suggested Starting Points Box */}
        <div className="suggested-box">
          <div className="suggested-box-header">
            <span>SUGGESTED STARTING POINTS</span>
            <span>Internal Routes</span>
          </div>

          <Link href="/departments/computer-science" className="suggested-item">
            <div className="suggested-item-left">
              <span>🏛</span>
              <span>Computer Science Department</span>
            </div>
            <div className="suggested-item-path">
              <span>/departments/computer-science</span>
              <span>→</span>
            </div>
          </Link>

          <Link href="/departments/design" className="suggested-item">
            <div className="suggested-item-left">
              <span>🎨</span>
              <span>Design Department</span>
            </div>
            <div className="suggested-item-path">
              <span>/departments/design</span>
              <span>→</span>
            </div>
          </Link>

          <Link href="/departments/business" className="suggested-item">
            <div className="suggested-item-left">
              <span>📈</span>
              <span>Business Department</span>
            </div>
            <div className="suggested-item-path">
              <span>/departments/business</span>
              <span>→</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
