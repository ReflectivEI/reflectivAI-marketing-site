# ReflectivAI File Access Guide

This guide provides direct access to view and copy individual files from the ReflectivAI marketing site.

## Table of Contents
- [Main Pages](#main-pages)
- [Layout Components](#layout-components)
- [UI Components](#ui-components)
- [Configuration Files](#configuration-files)
- [Styles](#styles)

---

## Main Pages

### Homepage (`src/pages/index.tsx`)
**Purpose:** Main landing page with hero, features, capabilities, analytics, and testimonials

**Key Sections:**
- Hero with CTA
- Traditional Training vs ReflectivAI comparison table
- Performance Analytics (10 metrics)
- Interactive 8 Capabilities with modal details
- How Signal Intelligence Works (3 steps)
- Ethics & Governance (4 pillars)
- Ethics Statement
- Testimonial
- CTA section

**To view:** Read the file at `src/pages/index.tsx`
**File size:** ~1,010 lines

---

### AI Coach Page (`src/pages/ai-coach.tsx`)
**Purpose:** Detailed explanation of the AI Coach feature

**Key Sections:**
- Hero section
- How the Coach Works (10 EI Dimensions)
- Real-Time Coaching Cards (4 color-coded examples)
- EI in Practice (3 cards)
- Ethics Statement
- Benefits section
- CTA

**To view:** Read the file at `src/pages/ai-coach.tsx`
**File size:** ~545 lines

---

### Role Play Page (`src/pages/role-play.tsx`)
**Purpose:** Role Play Simulator feature explanation

**Key Sections:**
- Hero section
- How It Works (4 steps)
- Scenario examples
- Practice scenarios grid
- Ethics Statement
- Benefits
- CTA

**To view:** Read the file at `src/pages/role-play.tsx`
**File size:** ~578 lines

---

## Layout Components

### Root Layout (`src/layouts/RootLayout.tsx`)
**Purpose:** Main layout wrapper for all pages
**Includes:** Website container with Header and Footer
**File size:** ~30 lines

### Website Layout (`src/layouts/Website.tsx`)
**Purpose:** Base structural layout component
**File size:** ~50 lines

### Header (`src/layouts/parts/Header.tsx`)
**Purpose:** Site navigation header
**Features:**
- Logo/brand name
- Navigation menu (Home, AI Coach, Role Play)
- Mobile menu toggle
- CTA button
**File size:** ~100 lines

### Footer (`src/layouts/parts/Footer.tsx`)
**Purpose:** Site footer with links and copyright
**File size:** ~120 lines

---

## UI Components

All shadcn/ui components are located in `src/components/ui/`

### Key Components:
- `button.tsx` - Button component with variants
- `card.tsx` - Card container components
- `dialog.tsx` - Modal dialog (used for capability details)
- `badge.tsx` - Badge component for tags
- `separator.tsx` - Visual separator lines
- `scroll-area.tsx` - Scrollable container

**Full list:** 40+ components available in `src/components/ui/`

---

## Configuration Files

### Tailwind Config (`tailwind.config.js`)
**Purpose:** Tailwind CSS configuration with custom theme
**Includes:**
- Color system extensions
- Custom animations
- Typography settings
**File size:** ~100 lines

### Vite Config (`vite.config.ts`)
**Purpose:** Vite build configuration
**File size:** ~80 lines

### TypeScript Config (`tsconfig.json`)
**Purpose:** TypeScript compiler configuration
**File size:** ~30 lines

### Package.json (`package.json`)
**Purpose:** Project dependencies and scripts
**Key dependencies:**
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
**File size:** ~150 lines

---

## Styles

### Global Styles (`src/styles/globals.css`)
**Purpose:** Global CSS with Tailwind directives and CSS variables
**Includes:**
- CSS color variables (HSL format)
- Light/dark theme definitions
- Tailwind base, components, utilities
- Custom animations
**File size:** ~100 lines

---

## How to Access Files

### Method 1: Direct File Reading
Request specific files by path:
```
"Can you show me the contents of src/pages/index.tsx?"
"Read src/layouts/parts/Header.tsx"
"Display src/styles/globals.css"
```

### Method 2: Section-Specific Reading
Request specific line ranges:
```
"Show me lines 1-100 of src/pages/index.tsx"
"Read the hero section from the homepage"
"Display the header component navigation code"
```

### Method 3: Search and Display
Search for specific content:
```
"Find all instances of 'Signal Intelligence' in the codebase"
"Show me where the capabilities are defined"
"Find the ethics statement code"
```

---

## File Structure Overview

```
ReflectivAI/
├── src/
│   ├── pages/
│   │   ├── index.tsx           # Homepage (1,010 lines)
│   │   ├── ai-coach.tsx        # AI Coach page (545 lines)
│   │   ├── role-play.tsx       # Role Play page (578 lines)
│   │   └── _404.tsx            # 404 error page
│   ├── layouts/
│   │   ├── RootLayout.tsx      # Main layout wrapper
│   │   ├── Website.tsx         # Base layout
│   │   └── parts/
│   │       ├── Header.tsx      # Site header
│   │       └── Footer.tsx      # Site footer
│   ├── components/
│   │   └── ui/                 # 40+ shadcn components
│   ├── styles/
│   │   └── globals.css         # Global styles
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   └── assets/                 # Static assets
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript config
```

---

## Common File Requests

### "I want to see the homepage code"
→ Request: `src/pages/index.tsx`

### "Show me the navigation header"
→ Request: `src/layouts/parts/Header.tsx`

### "I need the color scheme"
→ Request: `src/styles/globals.css` (CSS variables section)

### "Display the AI Coach page"
→ Request: `src/pages/ai-coach.tsx`

### "Show me the capabilities section"
→ Request: Lines 400-700 of `src/pages/index.tsx`

### "I want to copy the ethics statement"
→ Request: Search for "Always ethical" in `src/pages/index.tsx`

---

## Tips for Copying Files

1. **Request specific files** - Be clear about which file you want
2. **Ask for line ranges** - For large files, request sections
3. **Search first** - Use search to find specific content before reading entire files
4. **Copy in sections** - Break large files into manageable chunks
5. **Verify paths** - Double-check file paths before requesting

---

## Need Help?

If you need to:
- View a specific file → "Show me [file path]"
- Copy a section → "Display lines X-Y of [file]"
- Find content → "Search for [term] in [location]"
- Export everything → See SITE_FILES_GUIDE.md for bulk download options

---

**Last Updated:** December 28, 2025
**Project:** ReflectivAI Marketing Site
**Version:** 1.0.0
