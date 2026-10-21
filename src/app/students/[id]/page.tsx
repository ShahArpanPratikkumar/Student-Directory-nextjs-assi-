// =============================================================================
// File: src/app/students/[id]/page.tsx
// Purpose: Dynamic Student Profile Page (Screenshot 4).
// URL ma thi [id] parameter (e.g. "stu-1042") lai ne profile details batavse.
// Agar student na male toh notFound() function thi 404 page batavse.
// =============================================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getStudentById } from "@/data/students";

interface StudentProfileProps {
  // Next.js 15+ ane 16 ma params Promise hoy chhe
  params: Promise<{ id: string }>;
}

export default async function StudentProfilePage({
  params,
}: StudentProfileProps) {
  // URL mathi 'id' parameter unpack karo
  const { id } = await params;

  // Student find karo
  const student = getStudentById(id);

  // Agar student na male toh custom 404 page par redirect karo
  if (!student) {
    notFound();
  }

  // Avatar CSS class
  const avatarClass = `avatar profile-avatar avatar-${student.avatarColor || "blue"}`;

  return (
    <div>
      {/* 1. Breadcrumbs: Students / Aarav Mehta */}
      <Breadcrumbs
        items={[
          { label: "Students", href: "/students" },
          { label: student.name },
        ]}
      />

      {/* 2. Back to students link */}
      <Link href="/students" className="back-link">
        <span>←</span>
        <span>Back to students</span>
      </Link>

      {/* 3. Main Profile Card */}
      <div className="profile-card">
        {/* Profile Header: Avatar, Name, ID badge, Status badge */}
        <div className="profile-header">
          <div className={avatarClass}>{student.initials}</div>

          <div className="profile-title-area">
            <h1 className="profile-name">{student.name}</h1>

            <div className="profile-badges-row">
              <span className="badge-id">{student.id}</span>
              <span className="badge-status-active">{student.status}</span>
            </div>
          </div>
        </div>

        {/* 4. Metadata Grid: 2 columns (Department, Study Year, Email, Enrolled) */}
        <div className="profile-meta-grid">
          <div>
            <div className="meta-field-label">DEPARTMENT</div>
            <div className="meta-field-value">{student.department}</div>
          </div>

          <div>
            <div className="meta-field-label">STUDY YEAR</div>
            <div className="meta-field-value">{student.studyYear}</div>
          </div>

          <div>
            <div className="meta-field-label">EMAIL</div>
            <a href={`mailto:${student.email}`} className="meta-field-link">
              {student.email}
            </a>
          </div>

          <div>
            <div className="meta-field-label">ENROLLED</div>
            <div className="meta-field-value">{student.enrolledTerm}</div>
          </div>
        </div>

        {/* 5. About Section */}
        <div className="profile-section">
          <h2 className="profile-section-heading">About</h2>
          <p className="profile-about-text">{student.about}</p>
        </div>

        {/* 6. Academic Details Section */}
        <div className="profile-section">
          <h2 className="profile-section-heading">Academic Details</h2>

          <div className="academic-row">
            <span className="academic-label">Department</span>
            <span className="academic-value">{student.department}</span>
          </div>

          <div className="academic-row">
            <span className="academic-label">Current Academic Standing</span>
            <span className="academic-value">{student.academicStanding}</span>
          </div>

          {/* Enrolled Subjects list */}
          <div style={{ marginTop: "1.25rem" }}>
            <div className="meta-field-label">ENROLLED SUBJECTS</div>

            <div className="subjects-box">
              {student.subjects.map((subject, idx) => (
                <div key={idx} className="subject-row">
                  <span className="subject-name">
                    {subject.code}: {subject.name}
                  </span>
                  <span className="subject-credits">{subject.credits} Credits</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom system record details */}
      <div className="footer-meta-row">
        <div>System Record ID: {student.systemRecordId}</div>
        <div>Last validated: {student.lastValidated}</div>
      </div>
    </div>
  );
}
