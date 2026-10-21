// =============================================================================
// File: src/types/index.ts
// Purpose: Aa file ma badha TypeScript types and interfaces define karela chhe.
// Beginner mate aa file no use etle chhe k koi spelling mistake na thay.
// =============================================================================

// Subject (Vishay) mate no interface
export interface EnrolledSubject {
  code: string;       // Example: "CS-301"
  name: string;       // Subject name: "Distributed Systems & Microservices"
  credits: number;    // Credits: 4.0
}

// Student mate no simple interface
export interface Student {
  id: string;               // Unique ID: "STU-1042"
  name: string;             // Full name: "Aarav Mehta"
  initials: string;         // Avatar mate initials: "AM"
  avatarColor: string;      // Avatar background color: "blue", "peach", etc.
  email: string;            // Email address: "aarav.mehta@campus.edu"
  department: string;       // Department: "Computer Science", "Design", "Business"
  departmentSlug: string;   // URL ma use thase: "computer-science"
  specializationSlug: string;// Branch slug: "web-development"
  trackFocus: string;       // Focus topic: "Full-Stack Architecture"
  studyYear: string;        // Year: "3rd Year"
  enrolledTerm: string;     // Term: "Fall 2022"
  status: "Active Student" | "Graduated" | "On Leave"; // Status
  about: string;            // Short bio / about text
  academicStanding: string; // "3rd Year Undergraduate"
  subjects: EnrolledSubject[]; // Student na subjects no list (array)
  systemRecordId: string;   // Record ID: "0948-CS-AM"
  lastValidated: string;    // Date: "Oct 24, 2024"
}

// Specialization (Branch) mate no interface
export interface Specialization {
  slug: string;             // URL slug: "web-development"
  title: string;            // Title: "Web Development"
  trackCode: string;        // Track Code: "CS-SPEC-04"
  description: string;      // Detail description
  academicLead: string;     // Faculty lead: "Prof. Elena Vance"
  coreLab: string;          // Lab name: "Turing Hall 408"
  enrollmentCountText: string; // "4 Active Enrollees"
  curriculumCycle: string;  // "2024–2025 Revised"
}

// Department mate no interface
export interface Department {
  slug: string;             // "computer-science"
  name: string;             // "Computer Science"
  description: string;      // Short description
  iconType: "code" | "design" | "business"; // Icon type
  specializationCount: number;// Kitla specialization chhe
  enrolledStudentsCount: number; // Total students
  academicLead: string;     // HOD / Lead
  primaryCoreLab: string;   // Main Lab
  curriculumCycle: string;  // "2024–2025"
  overview: string;         // Overview paragraph
  specializations: Specialization[]; // Aa department na tracks
}

// Breadcrumb links mate simple interface
export interface BreadcrumbItem {
  label: string;            // Screen par dekhase te name
  href?: string;            // Link URL (optional)
}
