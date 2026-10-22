// File: src/app/students/[id]/page.tsx
// Route: /students/[id]  →  Example: /students/stu-1042
// This is a DYNAMIC ROUTE. [id] changes based on which student you click.
// This is a SERVER COMPONENT (no "use client") — it runs on the server side.

import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getStudentById } from "@/data/students";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StudentProfilePage({ params }: PageProps) {
  // Get the [id] from the URL
  const { id } = await params;

  // Look up the student in our data
  const student = getStudentById(id);

  // If no student found → show the 404 page
  if (!student) {
    notFound();
  }

  const avatarClass = `avatar profile-avatar avatar-${student.avatarColor || "blue"}`;

  return (
    <div>
      {/* Breadcrumb: Students / Aarav Mehta */}
      <Breadcrumbs
        items={[
          { label: "Students", href: "/students" },
          { label: student.name },
        ]}
      />

      {/* Back Link */}
      <Link href="/students" className="back-link">
        ← Back to students
      </Link>

      {/* Profile Card */}
      <div className="profile-card">
        {/* Header: Avatar + Name + Badges */}
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

        {/* Metadata Grid: Department, Year, Email, Term */}
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

        {/* About Section */}
        <div className="profile-section">
          <h2 className="profile-section-heading">About</h2>
          <p className="profile-about-text">{student.about}</p>
        </div>

        {/* Academic Details */}
        <div className="profile-section">
          <h2 className="profile-section-heading">Academic Details</h2>

          <div className="academic-row">
            <span className="academic-label">Department</span>
            <span className="academic-value">{student.department}</span>
          </div>

          <div className="academic-row">
            <span className="academic-label">Academic Standing</span>
            <span className="academic-value">{student.academicStanding}</span>
          </div>

          {/* Enrolled Subjects */}
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

      {/* Footer meta */}
      <div className="footer-meta-row">
        <div>System Record ID: {student.systemRecordId}</div>
        <div>Last validated: {student.lastValidated}</div>
      </div>
    </div>
  );
}
