---
name: Tectonic Refinement
colors:
  surface: '#121413'
  surface-dim: '#121413'
  surface-bright: '#383a38'
  surface-container-lowest: '#0d0f0e'
  surface-container-low: '#1a1c1b'
  surface-container: '#1e201f'
  surface-container-high: '#282a29'
  surface-container-highest: '#333534'
  on-surface: '#e2e3e1'
  on-surface-variant: '#c5c6ca'
  inverse-surface: '#e2e3e1'
  inverse-on-surface: '#2f3130'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c6c6c9'
  primary: '#c6c6c9'
  on-primary: '#2f3133'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#5d5e61'
  secondary: '#dbc3a1'
  on-secondary: '#3d2e16'
  secondary-container: '#55442a'
  on-secondary-container: '#c9b290'
  tertiary: '#c3c7cc'
  on-tertiary: '#2d3135'
  tertiary-container: '#181c20'
  on-tertiary-container: '#808489'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#f8dfbb'
  secondary-fixed-dim: '#dbc3a1'
  on-secondary-fixed: '#261904'
  on-secondary-fixed-variant: '#55442a'
  tertiary-fixed: '#e0e3e8'
  tertiary-fixed-dim: '#c3c7cc'
  on-tertiary-fixed: '#181c20'
  on-tertiary-fixed-variant: '#43474b'
  background: '#121413'
  on-background: '#e2e3e1'
  surface-variant: '#333534'
typography:
  headline-display:
    fontFamily: Libre Caslon Text
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 96px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Metrophobic
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Metrophobic
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Metrophobic
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style

The brand personality is authoritative, precise, and quietly confident. It targets high-net-worth clients, developers, and design critics who value structural integrity and spatial purity. The UI must evoke a sense of permanence and intentionality, mirroring the discipline of architecture itself.

The design system employs a **High-End Minimalism** style. It prioritizes the "empty space" as a functional element, ensuring that architectural photography and technical drawings are the focal points. Borrowing from modernism, the interface uses rigid grid structures, high-quality typography, and a "less is more" philosophy. The emotional response should be one of calm, clarity, and sophistication.

## Colors

The palette is rooted in the materials of the built environment: stone, metal, and light. 

- **Primary (Deep Charcoal):** Used for the primary background surface to create a "void" where light and imagery can emerge.
- **Secondary (Muted Bronze):** A sophisticated accent used sparingly for interactive cues, active states, and subtle decorative lines. It mimics weathered metal or gold-leaf detailing.
- **Tertiary (Slate Gray):** Employed for container backgrounds, dividers, and secondary information to provide depth without breaking the dark-mode immersion.
- **Neutral (Off-White):** Used primarily for typography and iconography to ensure maximum legibility and a crisp, paper-like contrast against the dark base.

## Typography

Typography functions as the structural skeleton of the design system. 

**Libre Caslon Text** provides a literary, established feel for headlines, suggesting a history of craftsmanship. For large display text, negative letter spacing is used to create a tighter, more modern silhouette.

**Metrophobic** is used for all functional text. Its geometric yet open structure ensures clarity at smaller sizes and maintains a professional, architectural aesthetic.

**Label Caps** are used for metadata, navigation items, and small captions. The wide letter spacing (0.15em) is essential to create a sense of breathability and "blueprint" style labeling.

## Layout & Spacing

This design system uses a **Fixed Grid** approach for desktop and a **Fluid Grid** for mobile. 

- **Desktop:** A 12-column grid with a maximum width of 1440px. Gutters are generous (32px) to prevent visual clutter. Vertical rhythm is driven by a `section-gap` of 128px, forcing a slow, deliberate scrolling pace.
- **Mobile:** A 4-column fluid grid. Margins are reduced to 24px, but the vertical spacing remains relatively high to maintain the premium feel.
- **Alignment:** Content should predominantly be left-aligned to mirror architectural drafting standards. Use asymmetrical layouts (e.g., an image spanning 7 columns with text spanning 3 columns on the opposite side) to create visual interest.

## Elevation & Depth

In line with the minimalist philosophy, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Levels:** The base layer is the deepest charcoal. Overlays and cards use a slightly lighter Slate Gray.
- **Borders:** Use thin, 1px solid borders in a low-opacity Off-White (10-15% alpha) to define zones without adding visual weight.
- **Interactions:** Hover states for cards should involve a subtle shift in background tone or a slight "lift" using a very soft, large-radius ambient shadow (e.g., 40px blur, 5% opacity).
- **Glassmorphism:** Use sparingly for navigation bars or image overlays. A subtle backdrop blur (8px) with a semi-transparent Deep Charcoal fill maintains focus on the background imagery.

## Shapes

The shape language is strictly **Sharp (0)**. 

Architectural integrity is represented through right angles and straight lines. Circles are permitted only for functional icons or specific decorative motifs (like a compass or stamp), but all UI containers, buttons, and image frames must have a 0px border radius. This reinforces the "constructed" and precise nature of the portfolio.

## Components

- **Buttons:** Primary buttons are outlined (Ghost style) with a 1px Off-White border. On hover, they fill with the Bronze accent and transition the text to Deep Charcoal. All buttons use the `label-caps` typography.
- **Cards:** Project cards should be borderless with the image taking 100% of the container width. Project titles appear in `headline-md` below the image with a significant top margin.
- **Lists:** Use for project indices. A list item consists of a thin top-border, the project year in `label-caps`, and the project name in `headline-md`. On hover, a thumbnail of the project should appear following the cursor.
- **Input Fields:** Minimalist under-line style. A 1px border only on the bottom. Labels stay static above the line in `label-caps`.
- **Navigation:** A persistent, minimal top bar. Links are `label-caps`. The "Active" state is indicated by a 2px Bronze underline.
- **Image Galleries:** Use a "Masonry" or "Grid" layout with 32px gaps. Every image should have a caption in `body-md` using a slightly reduced opacity for the text.