// =============================================================================
// File: src/data/departments.ts
// Purpose: Aa file ma 3 departments (Computer Science, Design, Business)
// ane teni branches no mock data chhe.
// =============================================================================

import { Department } from "@/types";

// Badha departments no main data array
export const departmentsData: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    iconType: "code",
    specializationCount: 4,
    enrolledStudentsCount: 320,
    academicLead: "Dr. Alan Mitchell",
    primaryCoreLab: "Turing Hall 401",
    curriculumCycle: "2024–2025",
    overview: "The Department of Computer Science focuses on fundamental computational theories, scalable software engineering, cloud systems, artificial intelligence, and applied computing technologies.",
    specializations: [
      {
        slug: "web-development",
        title: "Web Development",
        trackCode: "CS-SPEC-04",
        description: "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        coreLab: "Turing Hall 408",
        enrollmentCountText: "4 Active Enrollees",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        trackCode: "CS-SPEC-01",
        description: "Machine learning architectures, deep neural networks, natural language processing, and computer vision systems.",
        academicLead: "Dr. Marcus Brody",
        coreLab: "Neural Systems Lab 302",
        enrollmentCountText: "85 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "data-science",
        title: "Data Science",
        trackCode: "CS-SPEC-02",
        description: "Statistical modeling, large-scale data processing pipelines, predictive analytics, and visualization paradigms.",
        academicLead: "Dr. Sophia Reyes",
        coreLab: "Data Analytics Lab 210",
        enrollmentCountText: "95 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "cybersecurity",
        title: "Cybersecurity",
        trackCode: "CS-SPEC-03",
        description: "Network security protocols, modern cryptography, penetration testing, defensive systems, and digital forensics.",
        academicLead: "Prof. David Miller",
        coreLab: "Security Operations Lab 501",
        enrollmentCountText: "70 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  },
  {
    slug: "design",
    name: "Design",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    iconType: "design",
    specializationCount: 3,
    enrolledStudentsCount: 185,
    academicLead: "Prof. Sarah Jenkins",
    primaryCoreLab: "DaVinci Studio 204",
    curriculumCycle: "2024–2025",
    overview: "The Department of Design merges human-centered design principles with modern digital tools to cultivate leaders in user experience, interface crafts, and visual storytelling.",
    specializations: [
      {
        slug: "ui-ux",
        title: "UI/UX Design",
        trackCode: "DES-SPEC-01",
        description: "User research methodologies, wireframing, high-fidelity design systems, and usable interface heuristics.",
        academicLead: "Prof. Sarah Jenkins",
        coreLab: "Human Factors Lab 102",
        enrollmentCountText: "70 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "visual-communication",
        title: "Visual Communication",
        trackCode: "DES-SPEC-02",
        description: "Typography, brand identity architecture, digital illustration, and expressive visual communication.",
        academicLead: "Prof. Arthur Pendelton",
        coreLab: "Media Arts Studio 303",
        enrollmentCountText: "60 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "interaction-design",
        title: "Interaction Design",
        trackCode: "DES-SPEC-03",
        description: "Micro-interactions, motion design, tangible interaction, and responsive physical-digital interfaces.",
        academicLead: "Dr. Clara Wu",
        coreLab: "Motion Lab 404",
        enrollmentCountText: "55 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  },
  {
    slug: "business",
    name: "Business",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    iconType: "business",
    specializationCount: 3,
    enrolledStudentsCount: 240,
    academicLead: "Dr. Robert Sterling",
    primaryCoreLab: "Wall Street Lab 102",
    curriculumCycle: "2024–2025",
    overview: "The Department of Business prepares analytical leaders for the modern digital economy with rigorous coursework in finance, venture creation, and tech-driven management.",
    specializations: [
      {
        slug: "fintech",
        title: "Financial Technology",
        trackCode: "BUS-SPEC-01",
        description: "Algorithmic trading systems, blockchain applications, decentralized finance, and quantitative risk modeling.",
        academicLead: "Dr. Robert Sterling",
        coreLab: "Trading Simulation Lab 104",
        enrollmentCountText: "90 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "strategic-management",
        title: "Strategic Management",
        trackCode: "BUS-SPEC-02",
        description: "Corporate strategy, international mergers, business model innovation, and organizational leadership.",
        academicLead: "Prof. Catherine Vance",
        coreLab: "Venture Incubator 202",
        enrollmentCountText: "80 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      },
      {
        slug: "business-analytics",
        title: "Business Analytics",
        trackCode: "BUS-SPEC-03",
        description: "Managerial decision science, business intelligence reporting, predictive marketing, and supply chain metrics.",
        academicLead: "Dr. James Thornton",
        coreLab: "Decision Systems Lab 305",
        enrollmentCountText: "70 Enrolled Students",
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  }
];

// Helper Function: URL na slug parthi department find karva mate
// Agar URL ma "cs" hoy toh pan "computer-science" find kare
export function getDepartmentBySlug(slug: string): Department | undefined {
  const cleanSlug = slug.toLowerCase();
  if (cleanSlug === "cs") {
    return departmentsData.find((d) => d.slug === "computer-science");
  }
  return departmentsData.find((d) => d.slug.toLowerCase() === cleanSlug);
}

// Helper Function: Department and Teni Specialization find karva mate
export function getSpecialization(deptSlug: string, specSlug: string) {
  // Pahela department sodho
  const dept = getDepartmentBySlug(deptSlug);
  if (!dept) return undefined;

  // Pachhi te department ni specialization sodho
  const spec = dept.specializations.find(
    (s) => s.slug.toLowerCase() === specSlug.toLowerCase()
  );
  if (!spec) return undefined;

  return { department: dept, specialization: spec };
}
