# Footer Logo Template - Standard Implementation

**Purpose**: Standardized logo container for all page footers across Exo Enterprise website.

**Last Updated**: January 24, 2026

**Status**: ✅ Implemented on: index.html, firm.html, flow.html

---

## Overview

All footer sections should include a branded Exo Enterprise logo container. This provides consistent visual branding across all pages and makes the footer more professional and visually balanced.

**Logo File Path**: `./logos/LOGO%20MARK.png`
- Location: Root of `/logos` folder
- Note: `%20` is the URL-encoded space character for the filename space
- Use relative path (`./`) for reliable cross-page compatibility
- Works with both direct file access and server environments

---

## Implementation Guide

### For Standard 4-Column Footers (index.html, firm.html)

**Grid Structure**: `lg:grid-cols-4`

```html
<footer class="border-t border-neutral-800/50 bg-neutral-900/30">
  <div class="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-4 gap-x-12 gap-y-12">

      <!-- Brand Logo Section - FIRST COLUMN -->
      <div class="flex flex-col items-center justify-center">
        <div class="w-full bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.07] transition-colors duration-300"
          style="aspect-ratio: 1;">
          <img src="./logos/LOGO%20MARK.png"
            alt="Exo Enterprise Logo"
            class="w-[80%] h-[80%] object-contain"
            style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
        </div>
        <p class="text-xs text-neutral-500 font-geist mt-4 text-center">Exo Enterprise</p>
      </div>

      <!-- Company Links Column -->
      <div>
        <h4 class="uppercase text-sm font-normal text-emerald-300 tracking-widest font-geist mb-4">
          Company
        </h4>
        <!-- Links here -->
      </div>

      <!-- Products Column -->
      <div>
        <h4 class="uppercase text-sm font-normal text-emerald-300 tracking-widest font-geist mb-4">
          Products
        </h4>
        <!-- Links here -->
      </div>

      <!-- Additional Column (optional) -->
      <!-- Add as needed -->

    </div>

    <!-- Copyright bar -->
    <div class="text-xs font-normal text-neutral-500 font-geist border-neutral-800/50 border-t mt-10 pt-6">
      © 2026 Exo Enterprise. All rights reserved.
    </div>
  </div>
</footer>
```

### For Multi-Column Footers with col-span (flow.html)

**Grid Structure**: `grid-cols-2 md:grid-cols-4 lg:grid-cols-6` with `col-span-2`

```html
<footer class="overflow-hidden bg-slate-950 border-white/5 border-t relative">
  <div class="z-10 md:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 gap-x-8 gap-y-8">

      <!-- Brand Logo Section - SPANS 2 COLUMNS -->
      <div class="col-span-2 flex flex-col items-center justify-center">
        <div class="w-full bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.07] transition-colors duration-300"
          style="aspect-ratio: 1; max-width: 200px;">
          <img src="./logos/LOGO%20MARK.png"
            alt="Exo Enterprise Logo"
            class="w-[80%] h-[80%] object-contain"
            style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
        </div>
        <p class="text-xs text-slate-400 font-geist mt-4 text-center">Exo Enterprise</p>
        <p class="leading-relaxed text-sm text-slate-400 font-geist max-w-xs mt-4 text-center">
          Building the future of AI-powered systems for forward-thinking teams.
        </p>
      </div>

      <!-- Other columns as needed -->

    </div>
  </div>
</footer>
```

---

## Container Specifications

### Styling Properties

| Property | Value | Purpose |
|----------|-------|---------|
| **Width** | `w-full` | Fills available column space |
| **Background** | `bg-white/5` | Subtle white overlay (5% opacity) |
| **Border** | `border border-white/10` | Delicate white border (10% opacity) |
| **Rounded** | `rounded-lg` | Rounded corners for modern look |
| **Padding** | `p-8` (4-col) / `p-6` (flow) | Internal spacing |
| **Backdrop** | `backdrop-blur-xl` | Glass morphism effect |
| **Aspect Ratio** | `aspect-ratio: 1` | Perfect square (1:1 ratio) |
| **Hover State** | `hover:bg-white/[0.07]` | Subtle background increase |
| **Transition** | `transition-colors duration-300` | Smooth hover animation |

### Image Styling

| Property | Value | Purpose |
|----------|-------|---------|
| **Width** | `w-[80%]` | 80% of container width |
| **Height** | `h-[80%]` | 80% of container height |
| **Object Fit** | `object-contain` | Preserves aspect ratio |
| **Drop Shadow** | `drop-shadow(0 4px 12px rgba(0,0,0,0.3))` | Adds depth |

### Typography (Subtitle)

| Property | Value | Purpose |
|----------|-------|---------|
| **Font Size** | `text-xs` | Small caption text |
| **Color** | `text-neutral-500` (index/firm) / `text-slate-400` (flow) | Subtle text |
| **Font Family** | `font-geist` | Consistent typeface |
| **Margin** | `mt-4` | Spacing below container |
| **Alignment** | `text-center` | Centered caption |

---

## Responsive Behavior

### Mobile (< 640px)
- Grid: 1 column
- Logo container: Full width (capped by parent max-width)
- Logo: Clearly visible and centered
- Text: Centered below

### Tablet (640px - 1023px)
- Grid: 2 columns
- Logo: Takes 1 full column (50% width with gap)
- Other sections: Arranged naturally

### Desktop (1024px+)
- Grid: 3-4 columns (depending on page)
- Logo: 1 column width
- All content: Horizontal flow with proper spacing

---

## Implementation Checklist

When adding this logo container to new pages:

- [ ] Place logo container as **FIRST element** in footer grid
- [ ] Use **relative path** `./logos/Exo%20MasterLogo/LOGO%20MARK.png`
- [ ] Include **alt text**: "Exo Enterprise Logo"
- [ ] Add **subtitle text** below logo (brand name or description)
- [ ] Ensure grid includes logo column in layout (e.g., `lg:grid-cols-4` for 4 columns)
- [ ] Test on **mobile, tablet, desktop** viewports
- [ ] Verify **hover effect** works (subtle background change)
- [ ] Check **drop shadow** renders properly
- [ ] Confirm logo **doesn't exceed max-width** constraints

---

## Color Variations by Page

### index.html & firm.html
```css
/* Container background */
bg-white/5 border-white/10

/* Text color */
text-neutral-500

/* Hover state */
hover:bg-white/[0.07]
```

### flow.html
```css
/* Container background */
bg-white/5 border-white/10

/* Text color */
text-slate-400

/* Hover state */
hover:bg-white/[0.07]
```

**Note**: Colors are intentionally similar across pages for consistency. Adjust the opacity values (5%, 10%, 7%) if your design system requires different emphasis.

---

## Common Issues & Solutions

### Issue: Logo doesn't load

**Cause**: Incorrect file path or spaces not URL-encoded

**Solution**:
- Always use: `./logos/Exo%20MasterLogo/LOGO%20MARK.png`
- Never use spaces directly: ❌ `./logos/Exo MasterLogo/LOGO MARK.png`
- Use relative path (`./`), not absolute (`/`): ✅ `./` for better compatibility

### Issue: Logo appears stretched or distorted

**Cause**: Missing `object-contain` class or wrong aspect ratio

**Solution**:
- Keep `class="w-[80%] h-[80%] object-contain"`
- Maintain `style="aspect-ratio: 1;"` on container

### Issue: Logo not visible in column grid

**Cause**: Missing `flex flex-col items-center justify-center` on wrapper div

**Solution**:
- Always wrap logo container in flexbox centering div
- Ensures proper alignment regardless of screen size

### Issue: Text label below logo is misaligned

**Cause**: Missing `text-center` class

**Solution**:
- Always include `text-center` on subtitle paragraphs

---

## Future Enhancements (Optional)

- Add logo animation on hover (subtle scale or glow)
- Link logo to homepage (href="/")
- Add QR code or social micro-interactions
- Implement dark/light mode logo switching (if needed later)

---

## Pages Using This Template

✅ **index.html** (4-column footer)
✅ **firm.html** (4-column footer)
✅ **flow.html** (6-column col-span footer)

**For new pages, copy the appropriate template above based on your footer grid structure.**

---

## Quick Copy-Paste

### 4-Column Footer (Most Common)
```html
<div class="flex flex-col items-center justify-center">
  <div class="w-full bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.07] transition-colors duration-300" style="aspect-ratio: 1;">
    <img src="./logos/LOGO%20MARK.png" alt="Exo Enterprise Logo" class="w-[80%] h-[80%] object-contain" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
  </div>
  <p class="text-xs text-neutral-500 font-geist mt-4 text-center">Exo Enterprise</p>
</div>
```

### Multi-Column with col-span
```html
<div class="col-span-2 flex flex-col items-center justify-center">
  <div class="w-full bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.07] transition-colors duration-300" style="aspect-ratio: 1; max-width: 200px;">
    <img src="./logos/LOGO%20MARK.png" alt="Exo Enterprise Logo" class="w-[80%] h-[80%] object-contain" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
  </div>
  <p class="text-xs text-slate-400 font-geist mt-4 text-center">Exo Enterprise</p>
</div>
```
