# 🎓 Campus Directory — Next.js App Router Assignment

A full-featured academic directory built with **Next.js 15 App Router**, **TypeScript**, and **Vanilla CSS**. This project demonstrates routing patterns, component architecture, rendering strategies, and error handling as required by the assignment.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
src/
├── app/                              # Next.js App Router root
│   ├── layout.tsx                    # Root layout — Navbar + Footer shared by all pages
│   ├── page.tsx                      # Root redirect (/ → /students)
│   ├── not-found.tsx                 # Global custom 404 page
│   ├── error.tsx                     # Global error boundary (unexpected runtime errors)
│   │
│   ├── students/
│   │   ├── page.tsx                  # /students — Students listing (Client Component)
│   │   ├── loading.tsx               # Skeleton loading UI for /students
│   │   └── [id]/
│   │       └── page.tsx              # /students/[id] — Dynamic student profile
│   │
│   ├── departments/
│   │   ├── page.tsx                  # /departments — Departments listing
│   │   ├── loading.tsx               # Skeleton loading UI for /departments
│   │   └── [slug]/
│   │       ├── page.tsx              # /departments/[slug] — Department detail
│   │       └── [specialization]/
│   │           └── page.tsx          # /departments/[slug]/[specialization] — Track detail
│   │
│   ├── about/
│   │   └── page.tsx                  # /about — About page
│   │
│   └── globals.css                   # Global CSS styles + skeleton animation
│
├── components/                       # Reusable UI components
│   ├── Navbar.tsx                    # Top navigation bar (active link detection)
│   ├── Footer.tsx                    # Bottom footer
│   ├── Breadcrumbs.tsx               # Dynamic breadcrumb trail
│   ├── StudentCard.tsx               # Student card (supports 2 variants)
│   └── DepartmentCard.tsx            # Department summary card
│
├── data/                             # Dummy data (separated from components)
│   ├── students.ts                   # 8 student records + helper functions
│   └── departments.ts                # 3 departments with specializations + helpers
│
└── types/
    └── index.ts                      # TypeScript interfaces for all data shapes
```

---

## 🗺️ Routes — Analysis & Decisions

### Static Routes
| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Redirects to `/students` |
| `/students` | `app/students/page.tsx` | Lists all students with search & filter |
| `/departments` | `app/departments/page.tsx` | Lists all academic departments |
| `/about` | `app/about/page.tsx` | Project information page |

### Dynamic Routes `[param]`
| Route | File | Description |
|-------|------|-------------|
| `/students/[id]` | `app/students/[id]/page.tsx` | Shows individual student profile by ID (e.g. `stu-1042`) |
| `/departments/[slug]` | `app/departments/[slug]/page.tsx` | Shows department detail by slug (e.g. `computer-science`) |

### Nested Dynamic Routes
| Route | File | Description |
|-------|------|-------------|
| `/departments/[slug]/[specialization]` | `app/departments/[slug]/[specialization]/page.tsx` | Shows a specific specialization under a department (e.g. `/departments/computer-science/web-development`) |

### Why No Catch-All Routes `[...slug]` or `[[...slug]]`?
This project uses **structured, predictable URL patterns** where each segment has a clear meaning (`/departments/<dept>/<specialization>`). Catch-all routes are most useful when:
- The number of URL segments is unknown at build time (e.g., CMS pages, wiki-style paths)
- A single handler needs to cover arbitrary depth (e.g., `/docs/a/b/c/d`)

Since this app always has at most 2 dynamic segments under a known parent, catch-all routes would add complexity without benefit.

### Why No Route Groups `(group)`?
Route groups are used to share layouts among subsets of routes without affecting the URL. Since this app has a single shared layout (Navbar + Footer via `app/layout.tsx`) for all pages, no additional segmentation was needed. A route group like `(main)` could be added if a separate auth section were introduced.

---

## ⚙️ Rendering Strategies

| Page | Strategy | Reason |
|------|----------|--------|
| `/students` | **Client Component** (`"use client"`) | Needs `useState` for search, filter, and pagination — browser interaction required |
| `/students/[id]` | **Server Component** (async) | Reads data at render time; no browser interaction needed; better for SEO |
| `/departments` | **Server Component** | Static data render; no interactivity needed |
| `/departments/[slug]` | **Server Component** (async) | Fetches department from data by slug param |
| `/departments/[slug]/[specialization]` | **Server Component** (async) | Fetches both department and specialization from params |
| `/about` | **Server Component** | Fully static page |
| `Navbar.tsx` | **Client Component** | Uses `usePathname()` to detect active route — requires browser API |

---

## 🧩 Components

| Component | Type | Reused On |
|-----------|------|-----------|
| `Navbar` | Client | All pages (via root layout) |
| `Footer` | Server | All pages (via root layout) |
| `Breadcrumbs` | Server | Student profile, Dept detail, Spec detail, About, Not Found |
| `StudentCard` | Server | `/students` (variant: `"directory"`) and `/departments/[slug]/[specialization]` (variant: `"specialization"`) |
| `DepartmentCard` | Server | `/departments` |

`StudentCard` uses a `variant` prop to render two different layouts without duplicating the component.

---

## 🛡️ Error Handling

| Feature | File | When It Triggers |
|---------|------|-----------------|
| `notFound()` | `students/[id]/page.tsx` | Student ID not found in data |
| `notFound()` | `departments/[slug]/page.tsx` | Department slug not found |
| `notFound()` | `departments/[slug]/[specialization]/page.tsx` | Specialization not found |
| Custom 404 UI | `app/not-found.tsx` | Any `notFound()` call or invalid URL |
| Global Error Boundary | `app/error.tsx` | Unexpected runtime errors (must be `"use client"`) |

**Key distinction:** `not-found.tsx` handles *expected missing data* (wrong ID). `error.tsx` handles *unexpected crashes* (thrown exceptions, failed operations).

---

## ⏳ Loading UI

| File | Route Covered |
|------|--------------|
| `app/students/loading.tsx` | `/students` — shimmer skeleton for grid |
| `app/departments/loading.tsx` | `/departments` — shimmer skeleton for dept cards |

Next.js automatically shows `loading.tsx` while the page component is being rendered (wrapped in React Suspense internally).

---

## 🔧 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | App Router, Server/Client Components |
| TypeScript | 5 | Type safety for all data and props |
| Vanilla CSS | — | All styling, no utility frameworks |
| React | 19 | UI rendering |
