## 2026-05-27 - [AnimatedNumber Performance]
**Learning:** High-frequency animations using React state (e.g., `useState` with `setInterval` triggering every 16ms) in `AnimatedNumber.tsx` cause excessive, unnecessary React render cycles.
**Action:** Always use `motion/react`'s `animate` function to directly update DOM nodes (e.g., modifying `ref.current.textContent`) with `ease: "linear"` to bypass React's render cycle completely while preserving consistent animation speed.
