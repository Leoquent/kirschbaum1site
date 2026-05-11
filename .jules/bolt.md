
## 2026-05-11 - Performance Optimization of High-Frequency Animations
**Learning:** In projects using Framer Motion (`motion/react`), high-frequency animations like continuous number counters that update DOM values directly via `useState` and `setInterval` trigger excessive React re-renders (~60fps), degrading performance.
**Action:** Replace `useState` and `setInterval` with Framer Motion's `animate` function coupled with direct DOM manipulation (`ref.current.textContent = Math.floor(value)`). This bypasses the React render cycle completely while preserving smooth animation, achieving identical visual results with drastically less CPU overhead. Ensure `duration` is set in seconds for Framer Motion v12, and clean up the animation using `controls.stop()` in `useEffect`.
