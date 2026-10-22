// File: src/app/departments/[slug]/[specialization]/page.tsx
// Route: /departments/[slug]/[specialization]
// Example: /departments/computer-science/web-development
// NESTED DYNAMIC ROUTE: Two [params] in the URL.
// SERVER COMPONENT: runs on server.

import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";
import { getSpecialization } from "@/data/departments";
import { getStudentsBySpecialization } from "@/data/students";

interface PageProps {
  params: Promise<{ slug: string; specialization: string }>;
}

export default async function SpecializationPage({ params }: PageProps) {
  // Get both dynamic params from the URL
  const { slug, specialization: specSlug } = await params;

  // Find the department AND specialization
  const result = getSpecialization(slug, specSlug);

  // If not found → show 404
  if (!result) {
    notFound();
  }

  const { department, specialization } = result;

  // Get students enrolled in this specialization
  const enrolledStudents = getStudentsBySpecialization(department.slug, specialization.slug);

  return (
    <div>
      {/* Breadcrumb: Departments / Computer Science / Web Development */}
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name, href: `/departments/${department.slug}` },
          { label: specialization.title },
        ]}
      />

      {/* Top navigation */}
      <div className="specialization-nav-row">
        <Link href={`/departments/${department.slug}`} className="back-link" style={{ marginBottom: 0 }}>
          ← Return to {department.name}
        </Link>
        <Link href="/students" className="card-action-link">
          View all students →
        </Link>
      </div>

      {/* Specialization Banner */}
      <div className="specialization-banner-card">
        <div className="spec-banner-top">
          <div className="spec-banner-title-area">
            <h1 className="spec-banner-title">{specialization.title}</h1>
            <span className="badge-spec-parent">Specialization under {department.name}</span>
          </div>
          <div className="track-box">
            <div className="track-label">DEPARTMENT TRACK</div>
            <div className="track-code-badge">{specialization.trackCode}</div>
          </div>
        </div>

        <p className="spec-banner-desc">{specialization.description}</p>

        {/* 4-column Metadata */}
        <div className="spec-meta-grid">
          <div>
            <div className="meta-field-label">ACADEMIC LEAD</div>
            <div className="meta-field-value">{specialization.academicLead}</div>
          </div>
          <div>
            <div className="meta-field-label">CORE LAB</div>
            <div className="meta-field-value">{specialization.coreLab}</div>
          </div>
          <div>
            <div className="meta-field-label">ENROLLMENT</div>
            <div className="meta-field-value">{specialization.enrollmentCountText}</div>
          </div>
          <div>
            <div className="meta-field-label">CURRICULUM</div>
            <div className="meta-field-value">{specialization.curriculumCycle}</div>
          </div>
        </div>
      </div>

      {/* Students in this Specialization */}
      <div className="spec-section-header">
        <div className="spec-section-title-wrap">
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>Students in this Specialization</h2>
          <span className="badge-count">{enrolledStudents.length}</span>
        </div>
      </div>

      {enrolledStudents.length > 0 ? (
        <div className="specialization-students-grid">
          {enrolledStudents.map((student) => (
            <StudentCard key={student.id} student={student} variant="specialization" />
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: "2.5rem", textAlign: "center", color: "#64748b" }}>
          No students currently enrolled in this track.
        </div>
      )}
    </div>
  );
}
