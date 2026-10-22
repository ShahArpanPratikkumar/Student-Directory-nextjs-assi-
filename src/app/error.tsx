"use client";

// File: src/app/error.tsx
// This is the GLOBAL ERROR BOUNDARY.
// "use client" is REQUIRED — Next.js forces error.tsx to be a Client Component.
//
// DIFFERENCE between error.tsx and not-found.tsx:
//   - not-found.tsx → when we know data is missing (expected: wrong ID)
//   - error.tsx     → when something crashes unexpectedly (unexpected runtime error)

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void; // Call reset() to retry rendering the page
}

export default function GlobalError({ error, reset }: ErrorProps) {
  // Log the error to browser console for debugging
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="not-found-container">
      <div className="not-found-badge">
        <span>⚠ 500 · UNEXPECTED ERROR</span>
      </div>

      <h1 className="not-found-heading">Something went wrong</h1>

      <p className="not-found-text">
        An unexpected error occurred. You can try again or return to the directory.
      </p>

      <div className="not-found-actions">
        {/* reset() will re-render the failed page */}
        <button className="btn-primary" onClick={reset}>
          Try Again
        </button>
        <Link href="/students" className="btn-outline">
          Return to Directory
        </Link>
      </div>
    </div>
  );
}
