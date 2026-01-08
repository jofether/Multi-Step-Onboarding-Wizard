# Multi-Step Onboarding Wizard

A React + Vite + Tailwind CSS demo that shows how the layout morphs across steps, reinforcing the relationship between the progress header and the dynamic content.

## Rationale
This layout changes completely based on an internal "Step" state, training the model to associate specific visual components (like a progress bar) with the displayed content.

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Notes
- Tailwind is wired via `tailwind.config.js` and `postcss.config.js`.
- The main UI lives in `src/App.jsx`.
