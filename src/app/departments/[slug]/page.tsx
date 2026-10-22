// File: src/app/departments/[slug]/page.tsx
// Route: /departments/[slug]  →  Example: /departments/computer-science
// DYNAMIC ROUTE: [slug] changes based on which department you visit.
// SERVER COMPONENT: runs on server, no "use client" needed.

import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDepartmentBySlug } from "@/data/departments";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  // Get the [slug] from the URL
  const { slug } = await params;

  // Find the department in our data
  const department = getDepartmentBySlug(slug);

  // If not found → show 404
  if (!department) {
    notFound();
  }

  return (
    <div>
      {/* Breadcrumb: Departments / Computer Science */}
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name },
        ]}
      />

      {/* Top navigation row */}
      <div className="specialization-nav-row">
        <Link href="/departments" className="back-link" style={{ marginBottom: 0 }}>
          ← Back to departments
        </Link>
        <Link href="/students" className="card-action-link">
          View all students →
        </Link>
      </div>

      {/* Department Banner Card */}
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

        {/* 4-column Metadata Grid */}
        <div className="spec-meta-grid">
          <div>
            <div className="meta-field-label">ACADEMIC LEAD</div>
            <div className="meta-field-value">{department.academicLead}</div>
          </div>
          <div>
            <div className="meta-field-label">PRIMARY CORE LAB</div>
            <div className="meta-field-value">{department.primaryCoreLab}</div>
          </div>
          <div>
            <div className="meta-field-label">TOTAL ENROLLMENT</div>
            <div className="meta-field-value">{department.enrolledStudentsCount} Students</div>
          </div>
          <div>
            <div className="meta-field-label">TRACKS AVAILABLE</div>
            <div className="meta-field-value">{department.specializationCount} Specializations</div>
          </div>
        </div>
      </div>

      {/* Faculty Overview */}
      <div className="card" style={{ padding: "1.75rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Faculty Overview
        </h2>
        <p style={{ color: "#334155", lineHeight: 1.65 }}>{department.overview}</p>
      </div>

      {/* Specializations List */}
      <div style={{ marginBottom: "2rem" }}>
        <div className="spec-section-header">
          <div className="spec-section-title-wrap">
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>Specializations</h2>
            <span className="badge-count">{department.specializations.length}</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {department.specializations.map((spec) => (
            <div key={spec.slug} className="student-card">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{spec.title}</h3>
                  <span className="badge-id">{spec.trackCode}</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                  {spec.description}
                </p>
                <div style={{ fontSize: "0.85rem", color: "#475569" }}>
                  <strong>Lead:</strong> {spec.academicLead}
                </div>
              </div>

              <div>
                <div className="student-card-divider" style={{ marginTop: "1rem" }}></div>
                <Link href={`/departments/${department.slug}/${spec.slug}`} className="card-action-link">
                  Explore Track →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer row */}
      <div className="footer-meta-row">
        <span>Campus Directory</span>
        <span>Path: /departments/{department.slug}</span>
      </div>
    </div>
  );
}
