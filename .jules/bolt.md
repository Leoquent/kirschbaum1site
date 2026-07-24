## YYYY-MM-DD - [Direct DOM manipulation for high frequency React components]
**Learning:** High-frequency animations (like number counters) using `setInterval` and `useState` trigger excessive React state updates (e.g. ~125 updates in 2s), blocking the main thread and causing unnecessary re-renders.
**Action:** Use `motion/react`'s `animate` function with `ease: "linear"` to directly update DOM nodes (e.g. modifying `ref.current.textContent`), bypassing React's render cycle completely while preserving consistent animation speed.
