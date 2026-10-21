// =============================================================================
// File: src/app/about/page.tsx
// Purpose: About page (`/about`).
// College assignment mate simple overview, tech stack ane features batavse.
// =============================================================================

import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumbs: Directory / About */}
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "About" },
        ]}
      />

      <div className="page-header">
        <h1 className="page-title">About Campus Directory</h1>
        <p className="page-subtitle">
          An intuitive, modern academic directory platform built with Next.js App Router.
        </p>
      </div>

      {/* Project Mission Card */}
      <div className="card" style={{ padding: "2rem", marginBottom: "1.75rem" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.85rem" }}>
          Project Mission
        </h2>
        <p style={{ color: "#334155", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          Campus Directory is developed as an academic frontend assignment to demonstrate
          the power of <strong>Next.js App Router</strong>, <strong>TypeScript</strong>, and clean, accessible
          component architecture. The platform allows faculty, students, and administrators to seamlessly
          explore academic faculties, study tracks, and individual student profiles.
        </p>
        <p style={{ color: "#334155", lineHeight: 1.7 }}>
          Built with an emphasis on clarity, high readability, responsive typography, and
          light lavender-tinted surfaces, the interface reflects modern collegiate design standards.
        </p>
      </div>

      {/* Features Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⚡</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Next.js App Router
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Leveraging modern Server Components by default with targeted Client Components for interactive filtering and search.
          </p>
        </div>

        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔍</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Instant Search & Filter
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Real-time client-side search by student name, student ID, and academic department with automatic pagination reset.
          </p>
        </div>

        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🛡️</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            TypeScript Type Safety
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Comprehensive interfaces for students, departments, and specializations ensuring clean contracts and bug-free code.
          </p>
        </div>
      </div>

      {/* Footer meta row */}
      <div className="footer-meta-row">
        <span>Curriculum Year 2024–2025</span>
        <span>Version 1.0.0 · Frontend Practice</span>
      </div>
    </div>
  );
}
