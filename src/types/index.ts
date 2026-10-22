// File: src/types/index.ts
// All TypeScript interfaces are defined here in ONE place.
// We import these types in data files and components to avoid mistakes.

// One subject that a student is enrolled in
export interface EnrolledSubject {
  code: string;    // e.g. "CS-301"
  name: string;    // e.g. "Distributed Systems"
  credits: number; // e.g. 4.0
}

// A student record
export interface Student {
  id: string;                // Unique ID: "STU-1042"
  name: string;              // Full name: "Aarav Mehta"
  initials: string;          // For avatar display: "AM"
  avatarColor: string;       // Color class: "blue", "lavender", etc.
  email: string;             // Email address
  department: string;        // Department name: "Computer Science"
  departmentSlug: string;    // URL slug: "computer-science"
  specializationSlug: string;// Track slug: "web-development"
  trackFocus: string;        // Focus area: "Full-Stack Architecture"
  studyYear: string;         // "3rd Year"
  enrolledTerm: string;      // "Fall 2022"
  status: "Active Student" | "Graduated" | "On Leave";
  about: string;             // Short bio
  academicStanding: string;  // "3rd Year Undergraduate"
  subjects: EnrolledSubject[];// List of enrolled subjects
  systemRecordId: string;    // "0948-CS-AM"
  lastValidated: string;     // "Oct 24, 2024"
}

// A specialization (track) inside a department
export interface Specialization {
  slug: string;              // URL slug: "web-development"
  title: string;             // Display name: "Web Development"
  trackCode: string;         // Code: "CS-SPEC-04"
  description: string;       // What this track covers
  academicLead: string;      // Faculty name
  coreLab: string;           // Lab name
  enrollmentCountText: string;// "4 Active Enrollees"
  curriculumCycle: string;   // "2024–2025 Revised"
}

// A department
export interface Department {
  slug: string;              // URL slug: "computer-science"
  name: string;              // "Computer Science"
  description: string;       // Short description
  iconType: "code" | "design" | "business";
  specializationCount: number;
  enrolledStudentsCount: number;
  academicLead: string;
  primaryCoreLab: string;
  curriculumCycle: string;
  overview: string;          // Full overview paragraph
  specializations: Specialization[];
}

// One item in a breadcrumb trail
export interface BreadcrumbItem {
  label: string;  // Text to display
  href?: string;  // Link URL (optional — last item has no link)
}
