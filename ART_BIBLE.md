# Art Bible: Villa Balear (Balearic Islands)

This document serves as the single source of truth for the design system and aesthetic guidelines of the Villa Balear project, extracted from the hero section. Adhere to these exact styling rules and CSS variables to maintain identical feature parity across the entire application.

## 1. CSS Root Variables
Always use these CSS variables to maintain consistency rather than hardcoding values.

```css
:root {
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'Inter', sans-serif;
  --color-gold: #dccaaf;
  --color-light: #fdf6eb;
}
```

## 2. Typography
The project relies on a high-contrast combination of a classic serif for primary displays and a modern sans-serif for functional text.

### Primary Serif
*   **Usage**: Main titles, subtitles, logos, and elegant badges.
*   **Reference Code**:
```css
.hero-title {
  font-family: var(--font-serif);
  font-size: 18.5vw;
  font-weight: 300;
  line-height: 0.8;
  color: var(--color-light);
  letter-spacing: -0.01em;
}

.hero-subtitle {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--color-gold);
  font-weight: 300;
  letter-spacing: 0.03em;
}
```

### Secondary Sans-Serif
*   **Usage**: Navigation, buttons, metadata, UI elements.
*   **Reference Code**:
```css
.hero-header {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

## 3. Color Palette
The color scheme is deeply atmospheric, relying on extreme darks and elegant, metallic-like accents.

*   **Background (Dark Base)**: `#111111`
*   **Primary Light (Text Base)**: `#fdf6eb` (Warm Off-White, `var(--color-light)`)
*   **Gold Accent**: `#dccaaf` (Muted Gold / Champagne, `var(--color-gold)`)
*   **Background Overlays**: Use linear gradients to ensure text legibility over media.
```css
.hero-overlay {
  background: linear-gradient(
    to bottom, 
    rgba(0,0,0,0.5) 0%, 
    rgba(0,0,0,0) 25%, 
    rgba(0,0,0,0) 75%, 
    rgba(0,0,0,0.5) 100%
  ), rgba(0,0,0,0.1);
}
```

## 4. Layout & Structure
The aesthetic is highly cinematic, prioritizing full-bleed visuals and "floating" UI elements.

*   **Margins/Padding**: `40px` inset for headers and footers.
*   **Media**: Background videos or large images must always use `object-fit: cover` with a slight scale (`1.02`) to hide bleed edges.
```css
.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  z-index: -2;
}
```

## 5. UI Elements & Interaction
Interactions are subtle, smooth, and convey luxury.

### Buttons (CTAs)
Must be pill-shaped with thin gold transparent borders.
```css
.hero-cta {
  background: transparent;
  border: 1px solid rgba(220, 202, 175, 0.4);
  color: var(--color-gold);
  padding: 10px 24px;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.4s ease;
}

.hero-cta:hover {
  background: rgba(220, 202, 175, 0.08);
  border-color: rgba(220, 202, 175, 0.8);
  color: var(--color-light);
}
```

### Badges/Stamps
Circular elements acting as watermarks or classic brand signatures.
```css
.hero-badge {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid rgba(203, 178, 135, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-serif);
  color: var(--color-gold);
  font-size: 1.4rem;
  font-weight: 400;
}
```

### Navigation Arrows (Carousel Controls)
Circular "glass" buttons for stepping through image carousels, meant to float over full-bleed photography without competing with it. Pairs the badge's hairline-circle language with a frosted, translucent fill so the button reads as a controls layer rather than an opaque UI chrome piece.
```css
.carousel-arrow {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(220, 202, 175, 0.4);
  background: rgba(17, 17, 17, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel-arrow:hover {
  border-color: rgba(220, 202, 175, 0.85);
  background: rgba(220, 202, 175, 0.12);
  color: var(--color-gold);
}

.carousel-arrow:active {
  transform: scale(0.92);
}
```
*   **Icon**: a long horizontal line with a small arrowhead (`<line>` + `<polyline>`, `strokeWidth: 1.25`, `strokeLinecap/Linejoin: round`) — the same two-primitive construction used by the diagonal CTA arrows (see `.hero-cta` / "Enquire Now" / "Read our story"), just reoriented. This keeps every arrow on the site drawn from one icon grammar instead of mixing chevrons with line-arrows.
*   **Mobile**: shrink to `40px` circles with `16px` icons; keep the same border/fill/hover treatment.
*   **Do not** use solid chevron polylines (`>` / `<`) alone in a flat, opaque circle — reads as generic slider UI, not the site's own voice.
