
## 2026-05-29 - [Optimize High-Frequency Animations]
**Learning:** High-frequency animations (like number counters) using React state updates (`useState`/`setInterval`) trigger excessive and unnecessary React render loops, causing layout thrashing and processing overhead.
**Action:** Use `motion/react`'s `animate` function with `ease: "linear"` to directly update DOM nodes (e.g., modifying `ref.current.textContent`), bypassing React's render cycle completely while preserving consistent animation duration. Always maintain React lifecycle hygiene by returning a cleanup function (`controls.stop()`) within `useEffect` to prevent regressions and memory leaks.
