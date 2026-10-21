// =============================================================================
// File: src/components/Breadcrumbs.tsx
// Purpose: User page hierarchy ma kya chhe te batava mate Breadcrumb component.
// Example: "Students / Aarav Mehta"
// =============================================================================

import Link from "next/link";
import { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[]; // Breadcrumbs ni array
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-bar">
      {items.map((item, index) => {
        // Last item current page hoy, etle e link na bane
        const isLast = index === items.length - 1;

        return (
          <span
            key={index}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            {item.href && !isLast ? (
              // Link hoy toh Next.js Link component render karo
              <Link href={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              // Last item hoy toh plain text rakho
              <span className="breadcrumb-current">{item.label}</span>
            )}

            {/* Last item na hoy toh slash '/' symbol batavo */}
            {!isLast && <span className="breadcrumb-separator">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
