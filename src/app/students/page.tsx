"use client";

// File: src/app/students/page.tsx
// Route: /students
// This is a CLIENT COMPONENT because we use useState for search and filter.
// Server Components cannot use useState — that's why "use client" is needed here.

import { useState } from "react";
import StudentCard from "@/components/StudentCard";
import { studentsData } from "@/data/students";
import { departmentsData } from "@/data/departments";

export default function StudentsPage() {
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // State for selected department filter
  const [selectedDept, setSelectedDept] = useState("All departments");

  // State for current pagination page
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Filter students based on search and department
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept =
      selectedDept === "All departments" ||
      student.department.toLowerCase() === selectedDept.toLowerCase();

    return matchesSearch && matchesDept;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;

  // Get students for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Students</h1>
        <p className="page-subtitle">Browse students and view their profiles.</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="filter-card">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search students"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to page 1 when searching
            }}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="dept-filter" className="filter-label">Department:</label>
          <select
            id="dept-filter"
            className="filter-select"
            value={selectedDept}
            onChange={(e) => {
              setSelectedDept(e.target.value);
              setCurrentPage(1);
            }}
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

      {/* Students Grid or Empty Message */}
      {currentStudents.length > 0 ? (
        <div className="students-grid">
          {currentStudents.map((student) => (
            <StudentCard key={student.id} student={student} variant="directory" />
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
          <p>No students found. Try a different search.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="pagination-bar">
        <div>
          Showing <strong>{currentStudents.length}</strong> of{" "}
          <strong>{filteredStudents.length}</strong> students
        </div>
        <div className="pagination-controls">
          <button
            className="btn-pagination"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <button
            className="btn-pagination"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
