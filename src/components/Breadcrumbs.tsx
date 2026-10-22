// File: src/components/Breadcrumbs.tsx
// Reusable breadcrumb component.
// Example output: Students / Aarav Mehta
// Last item is plain text (current page), earlier items are clickable links.

import Link from "next/link";
import { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-bar">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            {/* If it has a link AND it's not the last item → make it a link */}
            {item.href && !isLast ? (
              <Link href={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}

            {/* Show "/" separator between items */}
            {!isLast && <span className="breadcrumb-separator">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
