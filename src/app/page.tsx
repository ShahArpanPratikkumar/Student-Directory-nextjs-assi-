// File: src/app/page.tsx
// This is the HOME PAGE ( / ).
// We don't want a separate home page, so we redirect to /students directly.

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/students");
}
