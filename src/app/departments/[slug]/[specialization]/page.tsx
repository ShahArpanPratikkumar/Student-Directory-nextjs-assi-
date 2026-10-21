// =============================================================================
// File: src/app/departments/[slug]/[specialization]/page.tsx
// Purpose: Nested Dynamic Specialization Page (Screenshot 5).
// URL mathi department slug ane specialization slug lai ne details batavse.
// E.g. `/departments/computer-science/web-development`
// =============================================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";
import { getSpecialization } from "@/data/departments";
import { getStudentsBySpecialization } from "@/data/students";

interface SpecializationPageProps {
  params: Promise<{
    slug: string;
    specialization: string;
  }>;
}

export default async function SpecializationPage({
  params,
}: SpecializationPageProps) {
  // Banne dynamic params unpack karo
  const { slug, specialization: specSlug } = await params;

  // Department ane Specialization check karo
  const result = getSpecialization(slug, specSlug);

  // Agar na male toh 404 page batavo
  if (!result) {
    notFound();
  }

  const { department, specialization } = result;

  // Aa track na students filter karo
  const enrolledStudents = getStudentsBySpecialization(
    department.slug,
    specialization.slug
  );

  return (
    <div>
      {/* 1. Breadcrumbs: Departments / Computer Science / Web Development */}
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name, href: `/departments/${department.slug}` },
          { label: specialization.title },
        ]}
      />

      {/* 2. Top Navigation Links */}
      <div className="specialization-nav-row">
        <Link
          href={`/departments/${department.slug}`}
          className="back-link"
          style={{ marginBottom: 0 }}
        >
          <span>←</span>
          <span>Return to {department.name} Department</span>
        </Link>

        <Link href="/students" className="card-action-link">
          <span>View all students</span>
          <span>→</span>
        </Link>
      </div>

      {/* 3. Specialization Header Banner Card */}
      <div className="specialization-banner-card">
        <div className="spec-banner-top">
          <div className="spec-banner-title-area">
            <h1 className="spec-banner-title">{specialization.title}</h1>
            <span className="badge-spec-parent">
              Specialization under {department.name}
            </span>
          </div>

          <div className="track-box">
            <div className="track-label">DEPARTMENT TRACK</div>
            <div className="track-code-badge">{specialization.trackCode}</div>
          </div>
        </div>

        <p className="spec-banner-desc">{specialization.description}</p>

        {/* 4. Metadata Grid: 4 columns (Lead, Lab, Enrollment, Curriculum) */}
        <div className="spec-meta-grid">
          <div>
            <div className="meta-field-label">ACADEMIC LEAD</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {specialization.academicLead}
            </div>
          </div>

          <div>
            <div className="meta-field-label">PRIMARY CORE LAB</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {specialization.coreLab}
            </div>
          </div>

          <div>
            <div className="meta-field-label">TOTAL ENROLLMENT</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {specialization.enrollmentCountText}
            </div>
          </div>

          <div>
            <div className="meta-field-label">CURRICULUM CYCLE</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {specialization.curriculumCycle}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Specialization Students Section Header */}
      <div className="spec-section-header">
        <div className="spec-section-title-wrap">
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>
            Students in this Specialization
          </h2>
          <span className="badge-count">{enrolledStudents.length}</span>
        </div>

        <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
          <span>Filtered by Track: </span>
          <span className="badge-id">{specialization.title}</span>
        </div>
      </div>

      {/* 6. Specialization Students Grid (2 columns - Screenshot 5) */}
      {enrolledStudents.length > 0 ? (
        <div className="specialization-students-grid">
          {enrolledStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              variant="specialization"
            />
          ))}
        </div>
      ) : (
        <div
          className="card"
          style={{ padding: "2.5rem", textAlign: "center", color: "#64748b" }}
        >
          No students currently enrolled in this track.
        </div>
      )}
    </div>
  );
}
