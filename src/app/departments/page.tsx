// File: src/app/departments/page.tsx
// Route: /departments
// This is a SERVER COMPONENT (default in App Router — no "use client" needed).
// It shows a list of all departments from our dummy data.

import DepartmentCard from "@/components/DepartmentCard";
import { departmentsData } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title-row">
          <h1 className="page-title">Departments</h1>
          <div className="page-meta-indicator">
            <span className="indicator-dot"></span>
            <span>{departmentsData.length} Active Academic Faculties</span>
          </div>
        </div>
        <p className="page-subtitle">
          Explore academic faculties, programs, and enrolled students.
        </p>
      </div>

      {/* List of Department Cards */}
      <div className="departments-stack">
        {departmentsData.map((department) => (
          <DepartmentCard key={department.slug} department={department} />
        ))}
      </div>

      {/* Footer info row */}
      <div className="footer-meta-row">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}
