// =============================================================================
// File: src/components/StudentCard.tsx
// Purpose: Student no profile card render karva mate simple reusable component.
// Listing page ane Specialization page banne ma aa component use thay chhe.
// =============================================================================

import Link from "next/link";
import { Student } from "@/types";

interface StudentCardProps {
  student: Student;
  variant?: "directory" | "specialization"; // Screenshot 2 athva Screenshot 5
}

export default function StudentCard({
  student,
  variant = "directory",
}: StudentCardProps) {
  // Avatar no color class
  const avatarClass = `avatar avatar-${student.avatarColor || "blue"}`;

  // Department no badge color class
  const getDeptBadgeClass = (dept: string) => {
    if (dept.toLowerCase().includes("computer")) return "badge-dept-cs";
    if (dept.toLowerCase().includes("design")) return "badge-dept-design";
    return "badge-dept-business";
  };

  // Specialization page mate no card (Screenshot 5)
  if (variant === "specialization") {
    return (
      <div className="student-card">
        {/* Top row: Avatar, Name, ID ane right side Year badge */}
        <div className="student-card-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div className={avatarClass}>{student.initials}</div>
            <div>
              <div className="student-card-name" style={{ marginBottom: "0.15rem" }}>
                {student.name}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "0.82rem", color: "#64748b" }}>
                {student.id}
              </div>
            </div>
          </div>

          <span className="badge-id">
            Year {student.studyYear.replace(/[^0-9]/g, "") || "1"}
          </span>
        </div>

        <div className="student-card-divider"></div>

        {/* Bottom row: Track focus ane View profile link */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.88rem", color: "#475569", fontWeight: 500 }}>
            {student.trackFocus}
          </span>
          <Link href={`/students/${student.id.toLowerCase()}`} className="card-action-link">
            <span>View profile</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    );
  }

  // Students Directory page mate no main card (Screenshot 2)
  return (
    <div className="student-card">
      <div>
        {/* Header: Avatar ane STU-ID badge */}
        <div className="student-card-header">
          <div className={avatarClass}>{student.initials}</div>
          <span className="badge-id">{student.id}</span>
        </div>

        {/* Student name ane department / study year */}
        <div className="student-card-body">
          <h3 className="student-card-name">{student.name}</h3>

          <div className="student-card-meta">
            <span className={`badge-department ${getDeptBadgeClass(student.department)}`}>
              {student.department}
            </span>
            <span className="student-card-year">{student.studyYear}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="student-card-divider"></div>

        {/* Single student profile par jani link */}
        <Link
          href={`/students/${student.id.toLowerCase()}`}
          className="card-action-link"
        >
          <span>View profile</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
