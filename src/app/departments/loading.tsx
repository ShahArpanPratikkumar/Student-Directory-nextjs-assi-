// File: src/app/departments/loading.tsx
// Next.js shows this while the departments page is loading.
// Skeleton cards shown as placeholders for 3 departments.

export default function DepartmentsLoading() {
  return (
    <div>
      {/* Skeleton for page title */}
      <div className="page-header">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
      </div>

      {/* Skeleton for 3 department rows */}
      <div className="departments-stack">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="department-row">
            <div className="skeleton skeleton-avatar" style={{ borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <div className="skeleton skeleton-name" style={{ marginBottom: "0.5rem" }} />
              <div className="skeleton skeleton-subtitle" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
