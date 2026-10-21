// =============================================================================
// File: src/components/DepartmentCard.tsx
// Purpose: Department nu card render karva mate simple reusable component.
// Screenshot 3 pramane icon, name, description, metrics ane link batavse.
// =============================================================================

import Link from "next/link";
import { Department } from "@/types";

interface DepartmentCardProps {
  department: Department; // Department no data object
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  // Department type mujab simple emoji icon
  const getIcon = (type: Department["iconType"]) => {
    switch (type) {
      case "code":
        return "💻";
      case "design":
        return "✏️";
      case "business":
        return "📈";
      default:
        return "🏛️";
    }
  };

  return (
    <div className="department-row">
      <div className="department-info">
        {/* Department icon */}
        <div className="department-icon" aria-hidden="true">
          {getIcon(department.iconType)}
        </div>

        {/* Department name ane details */}
        <div className="department-text">
          <h2 className="department-name">{department.name}</h2>
          <p className="department-description">{department.description}</p>

          <div className="department-metrics">
            <span className="metric-item">
              <span>🗂</span>
              <span>{department.specializationCount} Specializations</span>
            </span>

            <span>·</span>

            <span className="metric-item">
              <span>👥</span>
              <span>{department.enrolledStudentsCount} Enrolled Students</span>
            </span>
          </div>
        </div>
      </div>

      {/* Department detail page par jani link */}
      <div>
        <Link
          href={`/departments/${department.slug}`}
          className="card-action-link"
          style={{ whiteSpace: "nowrap" }}
        >
          <span>View students</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
