// File: src/app/students/loading.tsx
// Next.js automatically shows this file while the students page is loading.
// It displays skeleton placeholder cards so the user knows something is loading.
// This is a SERVER COMPONENT — no "use client" needed.

export default function StudentsLoading() {
  return (
    <div>
      {/* Skeleton for page title */}
      <div className="page-header">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
      </div>

      {/* Skeleton for filter bar */}
      <div className="filter-card">
        <div className="skeleton skeleton-input" />
        <div className="skeleton skeleton-select" />
      </div>

      {/* Skeleton for 8 student cards */}
      <div className="students-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="student-card">
            <div className="student-card-header">
              <div className="skeleton skeleton-avatar" />
              <div className="skeleton skeleton-badge" />
            </div>
            <div className="student-card-body">
              <div className="skeleton skeleton-name" />
              <div className="skeleton skeleton-meta" />
            </div>
            <div className="student-card-divider" />
            <div className="skeleton skeleton-link" />
          </div>
        ))}
      </div>
    </div>
  );
}
