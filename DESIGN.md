---
version: 1.1-sunset-orange
name: Twilight Studio Design System
description: Architectural dark minimalist design system with signature warm orange / amber gradients for Twilight Studio. Deep matte black background (#090A0F), crisp high-contrast white text (#F9FAFB), and mandatory subtle sunset orange & warm amber gradients (#D4A373, #F59E0B, #EA580C) for focus elements, badges, dividers, and micro-interactions.
colors:
  background: "#090A0F"
  background-alt: "#06070A"
  surface: "#12141C"
  surface-card: "#0D0F17"
  surface-hover: "#1A1D26"
  primary: "#F3F4F6"
  secondary: "#12141C"
  tertiary: "#1E222D"
  text-primary: "#F9FAFB"
  text-muted: "#9CA3AF"
  text-subtle: "#6B7280"
  accent: "#E2E8F0"
  accent-orange: "#D4A373"
  accent-orange-bright: "#F59E0B"
  accent-orange-deep: "#EA580C"
  border: "#2A2E3D"
  border-subtle: "#1E222D"
gradients:
  orange-sunset: "linear-gradient(135deg, #D4A373 0%, #F59E0B 50%, #EA580C 100%)"
  orange-glow: "radial-gradient(circle, rgba(212, 163, 115, 0.15) 0%, transparent 70%)"
  orange-border: "linear-gradient(90deg, transparent, rgba(212, 163, 115, 0.6), transparent)"
  card-highlight: "linear-gradient(135deg, #1A1208 0%, #120E06 50%, #090A0F 100%)"
typography:
  h1:
    fontFamily: "Cabinet Grotesk, Plus Jakarta Sans, sans-serif"
    fontSize: "3.75rem"
    fontWeight: "800"
    lineHeight: "1.05"
    letterSpacing: "-0.035em"
  h2:
    fontFamily: "Cabinet Grotesk, Plus Jakarta Sans, sans-serif"
    fontSize: "2.5rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "-0.025em"
  h3:
    fontFamily: "Cabinet Grotesk, Plus Jakarta Sans, sans-serif"
    fontSize: "1.5rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "-0.015em"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "-0.005em"
  body-sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.5"
    letterSpacing: "0em"
  label:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "700"
    lineHeight: "1"
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "12px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.background}"
  button-accent:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.background}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "24px"
  navbar:
    style: "Floated Glassmorphism"
    background: "rgba(18, 20, 28, 0.75)"
    backdropBlur: "blur(12px)"
    border: "1px solid {colors.border}"
    rounded: "9999px"
---

## Overview

Twilight Studio adopts an architectural, strict dark minimalist aesthetic elevated with **mandatory warm orange and amber gradient accents**. The foundation is built upon deep matte black (`#090A0F`), structural surfaces (`#12141C` / `#0D0F17`), tactile 1px grid borders (`#1E222D` / `#2A2E3D`), crisp high-contrast white text (`#F9FAFB`), and radiant warm amber-orange gradients (`#D4A373` through `#F59E0B`).

This color harmony provides a sleek, high-tech industrial identity with warm organic vitality — eliminating sterile coldness while strictly forbidding neon slime, generic templates, or purple/pink gamer glows.

## MANDATORY: Orange & Amber Gradient Rule

Every major section or interactive interface MUST include subtle, curated touches of the warm orange/amber gradient spectrum:
1. **Header & Display Typography**: Use gradient text accents (`bg-gradient-to-r from-[#F9FAFB] to-[#D4A373] bg-clip-text text-transparent` or pure `#D4A373` emphasis) for focal keywords.
2. **Featured Cards**: Highlight hero/recommended pricing tiers with subtle amber-to-black surface gradients (`from-[#1A1208] via-[#120E06] to-[#090A0F]`) and top gradient borders (`from-transparent via-[#D4A373]/60 to-transparent`).
3. **Badges & Tags**: All section index labels, status pills, and system tags use `#D4A373` text or `#D4A373`/10 background with `#D4A373`/30 border.
4. **Dividers & Rules**: Section borders and dividers should incorporate gradient transitions (`from-[#1E222D] via-[#D4A373]/30 to-[#1E222D]`).
5. **Interactive Controls & Focus States**: Hover states, active buttons, and form focus rings utilize `#D4A373` / `ring-[#D4A373]`.

## Architecture & Folder Rules (Absolute Mandate)

1. **Thin Page Strategy:** Files at `app/**/page.tsx` act solely as lightweight entry points (invoking feature components and setting metadata). Heavy component JSX inside `page.tsx` is strictly prohibited.
2. **Feature-Driven Components:** All UI components must reside within feature folders:
   ```text
   src/ or tl-studio/
   ├── app/
   │   ├── about/page.tsx
   │   ├── services/page.tsx
   │   └── page.tsx
   └── components/
       ├── ui/             # Reusable base elements (Button, Input, Card, Modal)
       ├── layout/         # Global layout (Navbar, Footer)
       ├── landing/        # Landing page sections
       ├── about/          # About page sections
       └── services/       # Services & Pricing feature sections
   ```
3. **Clean Exports:** Use explicit TypeScript interfaces for props on every component.
4. **Icon Import:** All icons must be imported independently ONLY from `lucide-react`.

## Color System

- **Background Canvas (#090A0F):** Deep architectural matte black.
- **Card Surface (#12141C / #0D0F17):** Tactile dark surface with subtle depth.
- **Surface Hover (#1A1D26):** Active interactive hover state.
- **Text Primary (#F9FAFB):** High-contrast crisp white typography.
- **Text Muted (#9CA3AF):** Secondary readable cool gray for descriptions and body copy.
- **Text Subtle (#6B7280):** Monospace metadata and non-essential labels.
- **Border Default (#1E222D):** Precision 1px grid divider line.
- **Border Highlight (#2A2E3D):** Stronger border for active cards.
- **Accent Warm (#D4A373):** Studio signature amber/orange accent trigger.
- **Accent Orange Bright (#F59E0B):** Vivid warm highlight for active notifications and badges.

## Navigation System

- **Navbar Type:** Floated Glassmorphism Navbar (`Home`, `About`, `Project`, `Services`, `Contact`).
- **Styling:** Floating pill container with `backdrop-blur-md bg-[#12141C]/80 border border-[#2A2E3D]`, featuring smooth micro-interactions, responsive mobile menu drawer, and orange underline indicators.

## Do's and Don'ts

### Do
- Always use dark void backgrounds with white text and warm amber/orange gradient accents.
- Maintain strict modular feature-driven folder structures under `components/`.
- Use sharp, flat 1px borders (`#1E222D` / `#2A2E3D`) for card containers.
- Feature tables must have high readability, clear borders, and sticky header on mobile when needed.
- Forms must provide immediate validation, clear loading simulation, and pre-filled direct messaging shortcuts (WhatsApp / Telegram / Email).

### Don'ts
- **NO Purple / Neon Glows:** Banned multi-tone purple/pink/cyan background fills.
- **NO Thick Page UI:** Never write UI logic directly inside `app/**/page.tsx`.
- **NO Unstyled Forms:** Never use default browser form controls without custom industrial styling.
- **NO Missing TypeScript Types:** Every data object and component prop must be explicitly typed.
