# Component: Ribbon Visual

A flexible ribbon component with a "swallowtail" (inward triangle) cut-out, designed to highlight items (e.g., "Brand New", "Free", "New Release").

## Usage

### 1. Basic Structure (Right-Aligned)

Place this HTML inside a `relative` container.

```html
<div class="relative ... parent-container">
    <!-- Ribbon -->
    <div class="absolute top-6 right-6 bg-red-600 text-white font-bold italic px-4 py-1.5 pr-8 text-xs uppercase tracking-widest shadow-lg rounded-l-md transform hover:scale-105 transition-transform origin-right" 
         style="clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);">
        YOUR TEXT HERE
    </div>
    
    <!-- Content -->
</div>
```

### 2. Left-Aligned (Inverted)

To place the ribbon on the LEFT side with the cut-out facing inward (towards the content):

*   Change `right-6` to `left-6`.
*   Change `rounded-l-md` to `rounded-r-md`.
*   Change `pr-8` to `pl-8` (padding-left for the cut-out space).
*   Change `origin-right` to `origin-left`.
*   **Invert the `clip-path`**: The triangle needs to point the other way.

```html
<div class="absolute top-6 left-6 bg-red-600 text-white font-bold italic px-4 py-1.5 pl-8 text-xs uppercase tracking-widest shadow-lg rounded-r-md transform hover:scale-105 transition-transform origin-left" 
     style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%);">
    YOUR TEXT HERE
</div>
```

### 3. Customization

*   **Color**: Change `bg-red-600` to any Tailwind color (e.g., `bg-emerald-500`, `bg-blue-600`).
*   **Size**: Adjust `text-xs`, `px-4`, `py-1.5`.
*   **Cut-Out Depth**: 
    *   Right-sided: `85% 50%` controls the depth of the cut. Lower number = deeper cut.
    *   Left-sided: `15% 50%` controls the depth. Higher number = deeper cut.

## Design Notes

*   **Clip-Path**: Uses CSS `clip-path: polygon(...)` to create the non-rectangular shape. This is more robust than using pseudo-elements for transparency support.
*   **Responsiveness**: The component scales with text length automatically.
*   **Hover Effect**: Includes a subtle `scale-105` on hover for interactivity.
