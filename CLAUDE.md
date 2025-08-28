# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Untitled UI Next.js starter kit** - a comprehensive React component library and design system built with:

- **React 19.1** and **Next.js 15.4**
- **Tailwind CSS v4.1** with custom theme system
- **TypeScript 5.9** with strict configuration
- **React Aria** for accessibility-first components
- **@untitledui/icons** icon system

## Purpose of this project

- To use the design system files within to create the world best landing pages for small businesses from various industries.

## Architecture & Component System

### Component Organization

```
src/components/
├── base/           # Core UI primitives (buttons, inputs, forms, etc.)
├── foundations/    # Design tokens (icons, logos, ratings, etc.)
├── marketing/      # Marketing-specific sections (headers, heroes, CTAs, etc.)
└── shared-assets/  # Reusable patterns (login, signup, not-found, etc.)
```

### Page Structure

```
src/app/
├── page-examples/landing-pages/  # Pre-built landing page examples (20 total)
├── drywall-landing/              # Custom landing page example
└── layout.tsx                    # Root layout with theme providers
```

## Untitled UI CLI Integration

This project integrates with the Untitled UI CLI for component management:

```bash
# Add marketing components
echo "components" | npx untitledui@latest add {slug}

# Add landing page examples
npx untitledui@latest example {slug} -e src/pages/landing-pages -p components

# Authentication required
npx untitledui@latest login
```

**Component Slugs**: Marketing components use specific slugs (e.g., `dropdown-menu-simple`, `hero-screen-mockup-01`). Landing pages use `landing-pages/01` through `landing-pages/20` format.

## Styling System

### Tailwind CSS v4 Configuration

- **Custom Design Tokens**: Uses Untitled UI's design system with semantic color tokens
- **Custom Variants**: `@custom-variant dark`, `label`, `focus-input-within`
- **Custom Utilities**: `scrollbar-hide`, `transition-inherit-all`
- **Display Typography**: Custom text sizes (`display-xs` through `display-2xl`)

### Component Styling Pattern

```typescript
import { cx } from "@/utils/cx";

// Enhanced tailwind-merge with custom configuration
const className = cx("base-classes", conditionalClasses && "conditional-classes");

// For complex component styling systems
const styles = sortCx({
    sizes: { sm: "...", md: "...", lg: "..." },
    colors: { primary: "...", secondary: "..." },
});
```

## Theme System

**Dark Mode**: Uses `next-themes` with custom class mapping:

- Light mode: `.light-mode`
- Dark mode: `.dark-mode`
- System preference supported

**Theme Provider Structure**:

```typescript
<RouteProvider>
  <Theme>{children}</Theme>
</RouteProvider>
```

## Import Patterns

**Path Aliasing**: `@/*` maps to `src/*`

**Optimized Imports**: Next.js config optimizes `@untitledui/icons` package imports

**Standard Import Structure**:

```typescript
// External libraries first
import { useState } from "react";
import { Button } from "react-aria-components";

// Untitled UI icons
import { ArrowRight, Phone } from "@untitledui/icons";

// Internal components by hierarchy
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "@/components/marketing/header-navigation/header";

// Utilities last
import { cx } from "@/utils/cx";
```

## Key Implementation Notes

### Component Development

- All interactive components use **React Aria** for accessibility
- Components follow **compound pattern** with sub-components
- **TypeScript strict mode** - all props must be typed
- Use `"use client"` directive for client-side interactive components

### Landing Page Pattern

Landing pages are organized as:

- Main page component with sections
- Each section as separate component
- IDs on sections for navigation anchors
- Responsive design with mobile-first approach
- Integration with Untitled UI marketing components

**IMPORTANT**: Before creating any new landing pages, ALWAYS review ALL 20 existing landing page examples in `src/app/page-examples/landing-pages/` (one through twenty) to understand the full range of patterns, components, and design approaches available. Do not limit yourself to reviewing only one or a few examples - comprehensive review of all examples ensures you leverage the best patterns and avoid recreating existing solutions.

### Icon Usage

```typescript
// Import specific icons needed
import { Tool01, CheckCircle, Phone } from "@untitledui/icons";

// Use with FeaturedIcon for consistent styling
<FeaturedIcon icon={Tool01} size="lg" color="brand" theme="modern" />
```

## Design Assets

The `src//design-assets` directory contains a comprehensive collection of design assets for creating professional landing pages:

### Avatars (144 total)

```
src//design-assets/avatars/
└── PNG (transparent background)/
    ├── Abraham Baker.png
    ├── Amelie Laurent.png
    ├── Candice Wu.png
    └── [141 more professional headshots...]
```

**Usage**: High-quality placeholder user avatars for testimonials, team sections, and user profiles. All images are PNG format with transparent backgrounds for easy integration.

### Company Logos (719 total)

```
src//design-assets/logos/
├── Default style/
│   ├── Light mode/           # Standard logos for light backgrounds
│   ├── Dark mode/            # White/light logos for dark backgrounds
│   ├── Light mode logomark/  # Icon-only versions for light mode
│   └── Dark mode logomark/   # Icon-only versions for dark mode
├── Badge style/
│   ├── Light mode/           # Badge-style logos for light backgrounds
│   ├── Dark mode/            # Badge-style logos for dark backgrounds
│   ├── Light mode logomark/  # Badge logomarks for light mode
│   └── Dark mode logomark/   # Badge logomarks for dark mode
└── Avatar company logos/
    ├── JPEG/                 # Square company avatars in JPEG format
    └── WebP/                 # Square company avatars in WebP format
```

**Companies Available**: Wide variety including Boltshift, Lightbox, FeatherDev, Sisyphus, Capsule, Hourglass, Command+R, Sisyphus, Catalyst, Quotient, and many more tech-focused fictional companies.

### Asset Integration Patterns

**Avatars in Components**:

```typescript
// Direct path reference
<Avatar
  src="/design-assets/avatars/PNG (transparent background)/Amelie Laurent.png"
  alt="Amelie Laurent"
  size="xl"
/>

// For testimonials
author: {
  name: "Sarah Johnson",
  title: "Property Manager",
  avatar: "/design-assets/avatars/PNG (transparent background)/Sarah Johnson.png"
}
```

**Logos in Components**:

```typescript
// Light mode company logo
<img
  src="/design-assets/logos/Default style/Light mode/Boltshift.svg"
  alt="Boltshift"
  className="h-8 dark:hidden"
/>

// Dark mode company logo
<img
  src="/design-assets/logos/Default style/Dark mode/Boltshift.svg"
  alt="Boltshift"
  className="h-8 opacity-85 not-dark:hidden"
/>
```

**Responsive Logo Usage**:

- Use **Default style** for main branding and social proof sections
- Use **Badge style** for compact spaces and navigation
- Use **Avatar company logos** for team company affiliations
- Always provide both light and dark mode variants

**🚨 CRITICAL - Custom Logo Requirement**:
**NEVER use the default Untitled UI logo in website headers and footers**. Every new website MUST:

1. **Use LOGOMARK versions only** from these specific folders:
   - `src/design-assets/logos/Default style/Light mode logomark/` (for light backgrounds)
   - `src/design-assets/logos/Default style/Dark mode logomark/` (for dark backgrounds)
   - **DO NOT use** the `Light mode` or `Dark mode` folders as they contain text with the logo
   
2. **Add custom company name text** next to the logomark that matches the website's:
    - Color scheme and brand palette
    - Industry and business type
    - Overall design aesthetic
    - This gives the appearance of a fully custom logo
   
3. **Replace ALL instances** of the default logo in:
    - Header navigation components
    - Footer components
    - Any branding sections

3. **Logo Selection Guidelines**:
    - **Construction/Building**: Choose logos with strong, geometric shapes (e.g., Boltshift, Catalyst)
    - **Technology/AI**: Choose modern, tech-focused logos (e.g., ContrastAI, Lightbox, Command+R)
    - **Food/Restaurant**: Choose organic, friendly logos (e.g., Flora&Fauna, Goodwell, Magnolia)
    - **Finance/Business**: Choose professional, trustworthy logos (e.g., Sisyphus, Capsule, Layers)

4. **Implementation Pattern**:

```typescript
// ❌ WRONG - Never use default logo
<UntitledLogo className="h-8" />

// ✅ CORRECT - Use selected logo from design assets
<img alt="Company Name" src="/design-assets/logos/Default style/Light mode/ChosenLogo.svg" className="h-8 dark:hidden" />
<img alt="Company Name" src="/design-assets/logos/Default style/Dark mode/ChosenLogo.svg" className="h-8 opacity-85 not-dark:hidden" />
```

**IMPORTANT - Industry-Specific Images**: When using images from Unsplash or other sources, ALWAYS ensure images accurately reflect the specific business industry the website is being created for. Use targeted, industry-relevant search terms rather than generic images. For example:

- **Drywall company**: Search for "drywall installation", "construction worker", "interior construction" - NOT generic "business" or "office"
- **Restaurant**: Search for "restaurant kitchen", "chef cooking", "dining atmosphere" - NOT generic "people working"
- **Law firm**: Search for "lawyer office", "legal consultation", "courthouse" - NOT generic "professional meeting"

Generic or unrelated images undermine credibility and fail to connect with the target audience.

### Development Workflow

1. Use Untitled UI CLI to add pre-built components
2. Customize components by extending existing patterns
3. Create custom landing pages in `app/` directory
4. Follow established component and styling patterns
5. Ensure accessibility with React Aria integration
6. **Leverage design assets** from `src//design-assets` for realistic content
