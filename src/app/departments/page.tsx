// =============================================================================
// File: src/app/departments/page.tsx
// Purpose: Departments Listing Page (Screenshot 3).
// University na 3 departments (Computer Science, Design, Business) render kare chhe.
// =============================================================================

import DepartmentCard from "@/components/DepartmentCard";
import { departmentsData } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <div>
      {/* Page Header: Title ane active faculties counter */}
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

      {/* Departments Stack Container */}
      <div className="departments-stack">
        {departmentsData.map((department) => (
          <DepartmentCard key={department.slug} department={department} />
        ))}
      </div>

      {/* Bottom meta row */}
      <div className="footer-meta-row">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}
