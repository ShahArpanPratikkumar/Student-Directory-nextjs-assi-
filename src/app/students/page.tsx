"use client";

// =============================================================================
// File: src/app/students/page.tsx
// Purpose: Students listing page (Screenshot 2).
// Search, department filter, ane pagination mate simple useState use karyu chhe.
// =============================================================================

import { useState } from "react";
import StudentCard from "@/components/StudentCard";
import { studentsData } from "@/data/students";
import { departmentsData } from "@/data/departments";

export default function StudentsPage() {
  // 1. Search text store karva mate state
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Selected department store karva mate state
  const [selectedDept, setSelectedDept] = useState("All departments");

  // 3. Current page number mate state
  const [currentPage, setCurrentPage] = useState(1);

  // Ek page par 8 students dekhadva chhe
  const itemsPerPage = 8;

  // Simple filter logic: search name/id ane department dropdown
  const filteredStudents = studentsData.filter((student) => {
    // Name athva ID ma search match thay chhe k nai
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase());

    // Department match thay chhe k nai
    const matchesDept =
      selectedDept === "All departments" ||
      student.department.toLowerCase() === selectedDept.toLowerCase();

    return matchesSearch && matchesDept;
  });

  // Total ketla pages banse
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;

  // Current page par ketla students dekhadva te slice karo
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Search input change thay tyare
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Filter badlay tyare page 1 par jao
  };

  // Department dropdown change thay tyare
  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDept(e.target.value);
    setCurrentPage(1); // Filter badlay tyare page 1 par jao
  };

  return (
    <div>
      {/* Page Title & Subtitle */}
      <div className="page-header">
        <h1 className="page-title">Students</h1>
        <p className="page-subtitle">Browse students and view their profiles.</p>
      </div>

      {/* Search Bar ane Department Filter Card */}
      <div className="filter-card">
        {/* Search input with search icon */}
        <div className="search-input-wrapper">
          <span className="search-icon" aria-hidden="true">
            🔍
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search students"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search students by name or ID"
          />
        </div>

        {/* Department select dropdown */}
        <div className="filter-group">
          <label htmlFor="dept-filter" className="filter-label">
            Department:
          </label>
          <select
            id="dept-filter"
            className="filter-select"
            value={selectedDept}
            onChange={handleDeptChange}
          >
            <option value="All departments">All departments</option>
            {departmentsData.map((dept) => (
              <option key={dept.slug} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Student Cards Grid (3 Columns) */}
      {currentStudents.length > 0 ? (
        <div className="students-grid">
          {currentStudents.map((student) => (
            <StudentCard key={student.id} student={student} variant="directory" />
          ))}
        </div>
      ) : (
        /* Agar koi student na male */
        <div
          className="card"
          style={{
            padding: "3rem 1.5rem",
            textAlign: "center",
            color: "#64748b",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            No students found matching your criteria.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Try searching with a different student name, ID, or department filter.
          </p>
        </div>
      )}

      {/* Bottom Pagination Bar */}
      <div className="pagination-bar">
        {/* Showing 8 of 8 students indicator */}
        <div>
          Showing <strong>{currentStudents.length}</strong> of{" "}
          <strong>{filteredStudents.length}</strong> students
        </div>

        {/* Previous and Next buttons */}
        <div className="pagination-controls">
          <button
            type="button"
            className="btn-pagination"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            aria-label="Previous Page"
          >
            Previous
          </button>
          <button
            type="button"
            className="btn-pagination"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
