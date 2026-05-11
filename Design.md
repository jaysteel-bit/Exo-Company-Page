# Design System - Exo Enterprise [Will be updated by Jay]

---
name: Exo Enterprise
colors:
  primary: "#10b981"
  secondary: "#6366f1"
  tertiary: "#34d399"
  neutral: "#050505"
  surface: "rgba(20, 20, 20, 0.4)"
  text: "#e5e5e5"
  text-muted: "#a3a3a3"
typography:
  h1:
    fontFamily: "Urbanist, Geist, Inter, sans-serif"
    fontSize: "3.75rem"
    fontWeight: "300"
  h2:
    fontFamily: "Urbanist, Geist, Inter, sans-serif"
    fontSize: "3rem"
    fontWeight: "300"
  body-md:
    fontFamily: "Urbanist, Geist, Inter, sans-serif"
    fontSize: "1.125rem"
  accent:
    fontFamily: "Playfair Display, serif"
    fontWeight: "400"
rounded:
  sm: "4px"
  md: "8px"
  lg: "24px"
  xl: "45px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  glass-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  shiny-cta:
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
---

## Overview

**Industrial Futurism** meets high-end enterprise consulting. The UI evokes a premium, sophisticated dark mode environment with vibrant, energetic accents. It balances deep, void-like backgrounds with luminous elements to create a sense of advanced technology, clarity, and motion.

## Colors

The palette is rooted in deep space neutrals paired with vivid "Flow" energy accents.

- **Primary (#10b981 / Emerald):** The core action color. Represents active flow, success, and the Exo ecosystem.
- **Secondary (#6366f1 / Indigo):** Used for subtle gradients, selection highlights (`bg-indigo-500/30`), and secondary depth.
- **Neutral (#050505):** The foundation of the void. Almost pure black, allowing glowing elements to pop.
- **Surface (rgba(20, 20, 20, 0.4)):** Glassmorphic panels that float above the background.
- **Text (#e5e5e5):** Soft white for high contrast without the harshness of pure `#ffffff`.

## Typography

The typography layers modern tech with sophisticated editorial accents.

- **Sans-Serif (Urbanist, Geist, Inter):** The workhorse font for all structural elements, UI, and body copy. Used in light weights (300/400) for large elegant headings.
- **Serif Accent (Playfair Display):** Used specifically for italicized emphasis words (e.g., "Chaos", "Flow OS") to bring a touch of journalistic gravitas and human touch to the high-tech environment.

## Layout

Layouts utilize generous padding and centralized alignment for hero sections. The design relies on "Spotlight Cards" and layered "Stacked Cards" to organize information sequentially, keeping the cognitive load low while looking visually complex.

## Elevation & Depth

Depth is primarily achieved through:
1. **Glassmorphism:** Blur effects (`backdrop-filter: blur(12px)`) on panels.
2. **Spotlight Gradients:** Radial gradients that follow mouse interaction (`card-spotlight`).
3. **Animated Borders:** Conic gradients used on CTAs to draw the eye (`shiny-cta`).

## Shapes

- Interactive elements (buttons, badges) use full pill shapes (`rounded-full`).
- Content containers and cards use large, friendly border radii (24px to 45px) to soften the industrial aesthetic.

## Components

### Shiny CTA
The primary conversion driver. It features a spinning conic gradient border and a dark center, combining smooth CSS animations with a premium tactile feel.

### Glass Panel
Standard structural container. Combines a 40% opaque dark background with a 12px background blur and a very subtle white border (8% opacity).
