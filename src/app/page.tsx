// =============================================================================
// File: src/app/page.tsx
// Purpose: Home page ('/') chhe.
// Jyare koi website na root url par aave tyare ene direct '/students' page par
// redirect kari devay chhe.
// =============================================================================

import { redirect } from "next/navigation";

export default function HomePage() {
  // Next.js nu redirect function use karyu chhe
  redirect("/students");
}
