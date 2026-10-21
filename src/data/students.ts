// =============================================================================
// File: src/data/students.ts
// Purpose: Aa file ma 8 students no complete dummy data chhe.
// Database vagar simple array use kari ne college project banavyu chhe.
// =============================================================================

import { Student } from "@/types";

// 8 students no data array
export const studentsData: Student[] = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    avatarColor: "blue",
    email: "aarav.mehta@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    trackFocus: "Full-Stack Architecture",
    studyYear: "3rd Year",
    enrolledTerm: "Fall 2022",
    status: "Active Student",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      {
        code: "CS-301",
        name: "Distributed Systems & Microservices",
        credits: 4.0,
      },
      {
        code: "CS-340",
        name: "Web Application Architecture",
        credits: 4.0,
      },
      {
        code: "CS-280",
        name: "Algorithms & Complexity",
        credits: 3.5,
      },
    ],
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
  },
  {
    id: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: "lavender",
    email: "elena.rostova@campus.edu",
    department: "Design",
    departmentSlug: "design",
    specializationSlug: "ui-ux",
    trackFocus: "User Research & Usability",
    studyYear: "2nd Year",
    enrolledTerm: "Fall 2023",
    status: "Active Student",
    about:
      "Elena explores the intersection of cognitive psychology and digital product design. She leads collaborative design workshops and conducts usability studies on accessible interface frameworks.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      {
        code: "DES-210",
        name: "User Interface Design Systems",
        credits: 4.0,
      },
      {
        code: "DES-215",
        name: "Cognitive Ergonomics & Usability",
        credits: 3.5,
      },
      {
        code: "DES-180",
        name: "Visual Communication Principles",
        credits: 3.0,
      },
    ],
    systemRecordId: "1089-DS-ER",
    lastValidated: "Oct 22, 2024",
  },
  {
    id: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    avatarColor: "peach",
    email: "marcus.chen@campus.edu",
    department: "Business",
    departmentSlug: "business",
    specializationSlug: "fintech",
    trackFocus: "Financial Technology",
    studyYear: "4th Year",
    enrolledTerm: "Fall 2021",
    status: "Active Student",
    about:
      "Marcus focuses on computational finance, quantitative risk management, and venture capital syndication. He actively directs the university student investment fund.",
    academicStanding: "4th Year Senior",
    subjects: [
      {
        code: "BUS-410",
        name: "Algorithmic Trading & Financial Modeling",
        credits: 4.0,
      },
      {
        code: "BUS-430",
        name: "Venture Capital & Corporate Valuation",
        credits: 4.0,
      },
      {
        code: "BUS-350",
        name: "Applied Managerial Econometrics",
        credits: 3.5,
      },
    ],
    systemRecordId: "1120-BS-MC",
    lastValidated: "Oct 20, 2024",
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "blue",
    email: "priya.sharma@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    trackFocus: "Reactive UI Design",
    studyYear: "1st Year",
    enrolledTerm: "Fall 2024",
    status: "Active Student",
    about:
      "Priya is passionate about modern JavaScript ecosystems, reactive web interfaces, and web performance optimization.",
    academicStanding: "1st Year Undergraduate",
    subjects: [
      {
        code: "CS-110",
        name: "Principles of Programming in TypeScript",
        credits: 4.0,
      },
      {
        code: "CS-120",
        name: "Data Structures & Discrete Mathematics",
        credits: 4.0,
      },
      {
        code: "CS-105",
        name: "Introduction to Computer Systems",
        credits: 3.0,
      },
    ],
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 23, 2024",
  },
  {
    id: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    avatarColor: "rose",
    email: "lucas.dubois@campus.edu",
    department: "Design",
    departmentSlug: "design",
    specializationSlug: "visual-communication",
    trackFocus: "Brand Identity Systems",
    studyYear: "3rd Year",
    enrolledTerm: "Fall 2022",
    status: "Active Student",
    about:
      "Lucas crafts expressive typographic systems and cohesive digital brand identities.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      {
        code: "DES-301",
        name: "Advanced Brand Architecture",
        credits: 4.0,
      },
      {
        code: "DES-320",
        name: "Experimental Typography & Grid Systems",
        credits: 3.5,
      },
      {
        code: "DES-260",
        name: "Motion Design for Digital Media",
        credits: 3.5,
      },
    ],
    systemRecordId: "1201-DS-LD",
    lastValidated: "Oct 19, 2024",
  },
  {
    id: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: "slate",
    email: "maya.lin@campus.edu",
    department: "Business",
    departmentSlug: "business",
    specializationSlug: "strategic-management",
    trackFocus: "Global Strategy & Operations",
    studyYear: "2nd Year",
    enrolledTerm: "Fall 2023",
    status: "Active Student",
    about:
      "Maya researches cross-border business development and sustainable corporate governance.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      {
        code: "BUS-220",
        name: "Global Strategic Management",
        credits: 4.0,
      },
      {
        code: "BUS-240",
        name: "Corporate Finance Principles",
        credits: 3.5,
      },
      {
        code: "BUS-210",
        name: "Organizational Leadership Dynamics",
        credits: 3.5,
      },
    ],
    systemRecordId: "1244-BS-ML",
    lastValidated: "Oct 21, 2024",
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: "blue",
    email: "tariq.almansoor@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    trackFocus: "Distributed Web Systems",
    studyYear: "4th Year",
    enrolledTerm: "Fall 2021",
    status: "Active Student",
    about:
      "Tariq investigates fault-tolerant microservice architectures, caching strategies, and cloud deployments.",
    academicStanding: "4th Year Senior",
    subjects: [
      {
        code: "CS-420",
        name: "Cloud Native Architecture & Kubernetes",
        credits: 4.0,
      },
      {
        code: "CS-450",
        name: "High-Performance Distributed Databases",
        credits: 4.0,
      },
      {
        code: "CS-390",
        name: "Advanced Software Engineering Capstone",
        credits: 4.0,
      },
    ],
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 24, 2024",
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: "blue",
    email: "sophia.muller@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    trackFocus: "Progressive Web Apps",
    studyYear: "2nd Year",
    enrolledTerm: "Fall 2023",
    status: "Active Student",
    about:
      "Sophia specializes in offline-first client architecture, service workers, and client-side database caching.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      {
        code: "CS-240",
        name: "Web Application Architecture",
        credits: 4.0,
      },
      {
        code: "CS-220",
        name: "Object-Oriented Design Patterns",
        credits: 3.5,
      },
      {
        code: "CS-210",
        name: "Computer Networking Protocols",
        credits: 3.5,
      },
    ],
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 24, 2024",
  },
];

// Helper Function: Student ID parthi student sodhva mate
// Example: "stu-1042" athva "STU-1042" banne work kare
export function getStudentById(id: string): Student | undefined {
  const cleanId = id.trim().toLowerCase();
  return studentsData.find(
    (student) =>
      student.id.toLowerCase() === cleanId ||
      student.id.toLowerCase().replace("stu-", "") === cleanId
  );
}

// Helper Function: Koi branch na students find karva mate
export function getStudentsBySpecialization(
  deptSlug: string,
  specSlug: string
): Student[] {
  return studentsData.filter(
    (s) =>
      s.departmentSlug.toLowerCase() === deptSlug.toLowerCase() &&
      s.specializationSlug.toLowerCase() === specSlug.toLowerCase()
  );
}

// Helper Function: Department wise students filter karva mate
export function getStudentsByDepartment(deptName: string): Student[] {
  if (!deptName || deptName === "All departments") {
    return studentsData;
  }
  return studentsData.filter(
    (s) => s.department.toLowerCase() === deptName.toLowerCase()
  );
}
