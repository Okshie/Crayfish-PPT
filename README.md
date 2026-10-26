# IoT-Based Crayfish Monitoring and Growing System — Presentation Website

A lightweight, responsive, browser-based thesis-defense presentation inspired by the clean, interactive slide structure of the provided Sampaloc Lake sample. The topic, content, diagrams, palette, and layout have been adapted for the crayfish research paper rather than copied.

## Files
- `index.html` — slide content and page structure
- `assets/` — figures from the thesis (block diagrams and 3D renders, cropped)
- `styles.css` — visual design, responsive layout, and illustrations
- `script.js` — slide navigation, outline panel, keyboard controls, touch navigation, and fullscreen

## Run locally
1. Extract the ZIP file.
2. Keep all three source files in the same folder.
3. Open `index.html` in a current browser (Chrome, Edge, or Firefox).

No build tools, server, or external JavaScript libraries are required. An internet connection may be needed for the optional Google Fonts import; system sans-serif fallbacks are included.

## Controls
- Left / Right arrow: previous / next slide
- Space or Page Down: next slide
- Page Up: previous slide
- Home / End: first / last slide
- Slide outline button: jump to a slide
- Fullscreen button: toggle fullscreen
- Touch: swipe left or right on touch devices

- Click a figure to enlarge it; click again or press Esc to close.

## Slide coverage (18 slides)
Chapter 1: Background · Theoretical framework · Conceptual framework · Objectives · Scope and delimitations
Chapter 2: Synthesis · Research gap
Chapter 3: Research design (V-model) · Functional block diagram · Problem specification · Problem analysis · Design solution (system + hardware block diagrams) · System flowchart · 3D conceptual design (2 slides)

## Content notes
Content is condensed from Chapters 1–3. The V-model and flowchart are redrawn as vector graphics from the thesis; the block diagrams and 3D figures are the thesis images.
Two points in the paper differ and are flagged on-slide: Chapter 3's conceptual design uses two ESP32 units plus an offline display (block diagrams show one), and the text says the aerator is not ESP32-controlled while the block diagram lists a pump/aerator actuator.
