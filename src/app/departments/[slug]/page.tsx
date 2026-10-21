// =============================================================================
// File: src/app/departments/[slug]/page.tsx
// Purpose: Dynamic Department Detail Page (e.g. `/departments/computer-science`).
// Selected department ni information, overview ane teni specializations batavse.
// =============================================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDepartmentBySlug } from "@/data/departments";

interface DepartmentDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function DepartmentDetailPage({
  params,
}: DepartmentDetailProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  // Agar department na male toh 404 page par redirect karo
  if (!department) {
    notFound();
  }

  return (
    <div>
      {/* 1. Breadcrumbs: Departments / Computer Science */}
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name },
        ]}
      />

      {/* 2. Top Navigation Links */}
      <div className="specialization-nav-row">
        <Link href="/departments" className="back-link" style={{ marginBottom: 0 }}>
          <span>←</span>
          <span>Back to departments</span>
        </Link>

        <Link href="/students" className="card-action-link">
          <span>View all students</span>
          <span>→</span>
        </Link>
      </div>

      {/* 3. Department Banner Card */}
      <div className="specialization-banner-card">
        <div className="spec-banner-top">
          <div className="spec-banner-title-area">
            <h1 className="spec-banner-title">{department.name}</h1>
            <span className="badge-spec-parent">Academic Faculty</span>
          </div>

          <div className="track-box">
            <div className="track-label">CURRICULUM CYCLE</div>
            <div className="track-code-badge">{department.curriculumCycle}</div>
          </div>
        </div>

        <p className="spec-banner-desc">{department.description}</p>

        {/* 4. Metadata Grid: 4 columns (Lead, Lab, Enrollment, Tracks) */}
        <div className="spec-meta-grid">
          <div>
            <div className="meta-field-label">ACADEMIC LEAD</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {department.academicLead}
            </div>
          </div>

          <div>
            <div className="meta-field-label">PRIMARY CORE LAB</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {department.primaryCoreLab}
            </div>
          </div>

          <div>
            <div className="meta-field-label">TOTAL ENROLLMENT</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {department.enrolledStudentsCount} Students
            </div>
          </div>

          <div>
            <div className="meta-field-label">TRACKS AVAILABLE</div>
            <div className="meta-field-value" style={{ fontSize: "0.95rem" }}>
              {department.specializationCount} Specializations
            </div>
          </div>
        </div>
      </div>

      {/* 5. Faculty Overview Card */}
      <div className="card" style={{ padding: "1.75rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Faculty Overview
        </h2>
        <p style={{ color: "#334155", lineHeight: 1.65 }}>{department.overview}</p>
      </div>

      {/* 6. Specializations List */}
      <div style={{ marginBottom: "2rem" }}>
        <div className="spec-section-header">
          <div className="spec-section-title-wrap">
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>Specializations</h2>
            <span className="badge-count">{department.specializations.length}</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {department.specializations.map((spec) => (
            <div key={spec.slug} className="student-card">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{spec.title}</h3>
                  <span className="badge-id">{spec.trackCode}</span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748b",
                    marginBottom: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  {spec.description}
                </p>
                <div style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "0.5rem" }}>
                  <strong>Lead:</strong> {spec.academicLead}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#475569" }}>
                  <strong>Lab:</strong> {spec.coreLab}
                </div>
              </div>

              <div>
                <div className="student-card-divider" style={{ marginTop: "1rem" }}></div>
                <Link
                  href={`/departments/${department.slug}/${spec.slug}`}
                  className="card-action-link"
                >
                  <span>Explore Track</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom meta row */}
      <div className="footer-meta-row">
        <span>Campus Directory © Academic Informatics Core</span>
        <span>Path: /departments/{department.slug}</span>
      </div>
    </div>
  );
}
