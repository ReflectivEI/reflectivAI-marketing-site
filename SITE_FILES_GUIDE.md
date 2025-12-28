# ReflectivAI Marketing Site - File Guide

## Main Pages

### 1. Homepage
**File:** `src/pages/index.tsx`
**URL:** `/` or `https://xox8z610ws.preview.c24.airoapp.ai/`

**Sections:**
- Hero with "Connect and Convert with Intelligence" tagline
- Traditional Training vs ReflectivAI Impact comparison
- Platform Features (AI Coach, Role Play, Coaching Modules, Analytics)
- Why Signal Intelligence Matters
- How Signal Intelligence Works (3-step process)
- 6 Coaching Modules with framework tags
- EI Frameworks callout
- 8 Interactive Signal Intelligence Capabilities (clickable modals)
- Platform Capabilities (Real-Time Detection, Behavioral Coaching, Leadership Analytics)
- Performance Analytics (10 metric cards)
- What This Is NOT section
- Testimonial
- Ethics & Governance (4 pillars)
- Final CTA

### 2. AI Coach Page
**File:** `src/pages/ai-coach.tsx`
**URL:** `/ai-coach` or `https://xox8z610ws.preview.c24.airoapp.ai/ai-coach`

**Sections:**
- Hero: "Your Personal Pharma Sales Coach"
- What You Can Do (4 features)
- 8 Signal Intelligence Capabilities
- How the Coach Works:
  - 10 EI Dimensions grid
  - Real-Time Coaching Cards (color-coded examples)
- EI in Practice (3 skills)
- Real-Time, Actionable Coaching
- Use Cases
- Benefits
- Final CTA

### 3. Role Play Simulator Page
**File:** `src/pages/role-play.tsx`
**URL:** `/role-play` or `https://xox8z610ws.preview.c24.airoapp.ai/role-play`

**Sections:**
- Hero: "Role Play Simulator - Practice Makes Perfect"
- Key Features
- How It Works
- Therapeutic Areas (HIV, Oncology, Cardiology, Vaccines, etc.)
- HCP Personas (Skeptical Oncologist, Budget-Conscious PCP, etc.)
- Benefits
- Final CTA

## Layout Components

### Root Layout
**File:** `src/layouts/RootLayout.tsx`
- Wraps all pages with consistent header/footer
- Configured in `src/App.tsx`

### Header
**File:** `src/layouts/parts/Header.tsx`
- Navigation menu
- Logo
- Mobile menu

### Footer
**File:** `src/layouts/parts/Footer.tsx`
- Footer links
- Copyright
- Social links (if configured)

## Styling

### Global Styles
**File:** `src/styles/globals.css`
- CSS variables for colors
- Tailwind base styles
- Custom animations

## UI Components

**Directory:** `src/components/ui/`

All shadcn UI components are pre-installed:
- `button.tsx` - Button component
- `dialog.tsx` - Modal dialogs (used for capability details)
- `card.tsx` - Card layouts
- Plus 40+ other components

## Key Features Implemented

### Interactive Elements
1. **Clickable Capability Cards** - Click any of the 8 capabilities to see:
   - Definition
   - How it's calculated
   - Example of excellence
   - 4 improvement tips

2. **Hover Animations** - All cards have hover effects with shadows and border highlights

3. **Color-Coded Coaching Cards** - Green/Yellow/Red borders showing feedback examples

### Data Structures

**Capability Details Object** (in `src/pages/index.tsx`):
```typescript
const capabilityDetails: Record<string, CapabilityDetail> = {
  'signal-awareness': { ... },
  'signal-interpretation': { ... },
  // ... 8 total capabilities
}
```

## How to Download/Export

### Option 1: Git Clone (Recommended)
If you have repository access:
```bash
git clone <your-repo-url>
cd <project-directory>
npm install
npm run dev
```

### Option 2: Individual File Copy
1. Open any file in your code editor
2. Copy the entire content
3. Save locally with the same file path structure

### Option 3: Archive Download
If your hosting platform supports it, download the entire project as a ZIP file.

## Project Structure

```
ReflectivAI/
├── src/
│   ├── pages/
│   │   ├── index.tsx          # Homepage
│   │   ├── ai-coach.tsx       # AI Coach page
│   │   └── role-play.tsx      # Role Play page
│   ├── layouts/
│   │   ├── RootLayout.tsx     # Main layout wrapper
│   │   └── parts/
│   │       ├── Header.tsx     # Navigation
│   │       └── Footer.tsx     # Footer
│   ├── components/
│   │   └── ui/                # shadcn components
│   ├── styles/
│   │   └── globals.css        # Global styles
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   └── assets/                # Images and static files
└── package.json               # Dependencies
```

## Dependencies

**Key packages:**
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React (icons)
- Vite (build tool)

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment

**Preview URL:** https://xox8z610ws.preview.c24.airoapp.ai

**Pages:**
- Homepage: `/`
- AI Coach: `/ai-coach`
- Role Play: `/role-play`

## Next Steps

To continue development:
1. Add About page (`src/pages/about.tsx`)
2. Add Contact page (`src/pages/contact.tsx`)
3. Add Pricing page (`src/pages/pricing.tsx`)
4. Connect to backend API
5. Add authentication
6. Integrate with production platform

## Support

For questions or modifications, refer to:
- `README.md` - Project overview
- `src/layouts/*.md` - Layout documentation
- Component documentation in each file
