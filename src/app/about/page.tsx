// File: src/app/about/page.tsx
// Route: /about
// Simple static page. SERVER COMPONENT (no state, no client interaction).

import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About — Campus Directory",
  description: "About the Campus Directory project built with Next.js App Router.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "About" },
        ]}
      />

      <div className="page-header">
        <h1 className="page-title">About Campus Directory</h1>
        <p className="page-subtitle">
          An academic directory built with Next.js App Router.
        </p>
      </div>

      {/* Project Info */}
      <div className="card" style={{ padding: "2rem", marginBottom: "1.75rem" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.85rem" }}>
          Project Mission
        </h2>
        <p style={{ color: "#334155", lineHeight: 1.7, marginBottom: "1rem" }}>
          Campus Directory is a college frontend assignment to demonstrate{" "}
          <strong>Next.js App Router</strong>, <strong>TypeScript</strong>, and
          clean component architecture. It lets users explore departments,
          specializations, and student profiles.
        </p>
        <p style={{ color: "#334155", lineHeight: 1.7 }}>
          Built with simple Vanilla CSS, realistic dummy data, and proper
          routing using static, dynamic, and nested dynamic routes.
        </p>
      </div>

      {/* Features */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⚡</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Next.js App Router
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Server Components by default. Client Components only where needed (search/filter).
          </p>
        </div>

        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔍</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Search & Filter
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Real-time client-side search by name, ID, and department with pagination.
          </p>
        </div>

        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🛡️</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            TypeScript Types
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>
            All data shapes defined with interfaces in <code>src/types/index.ts</code>.
          </p>
        </div>
      </div>

      {/* Tech Stack Table */}
      <div className="card" style={{ padding: "1.75rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>Tech Stack</h2>
        <div className="subjects-box">
          {[
            ["Next.js 15", "App Router, Server/Client Components"],
            ["TypeScript", "Type-safe interfaces for all data"],
            ["Vanilla CSS", "All styling — no Tailwind"],
            ["React 19", "UI rendering"],
          ].map(([tech, desc]) => (
            <div key={tech} className="subject-row">
              <span className="subject-name">{tech}</span>
              <span className="subject-credits" style={{ textAlign: "right" }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-meta-row">
        <span>Curriculum Year 2024–2025</span>
        <span>Version 1.0.0 · Frontend Assignment</span>
      </div>
    </div>
  );
}
