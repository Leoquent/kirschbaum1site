## 2026-07-17 - Optimize AnimatedNumber with Direct DOM Manipulation
**Learning:** High-frequency animations like number counters cause severe performance regressions (e.g. ~125 re-renders per component per animation loop) if driven by React state and `setInterval`.
**Action:** Use Framer Motion's `animate` function to directly mutate `ref.current.textContent` with `ease: "linear"`, bypassing the React render cycle completely while preserving consistent animation speed. Always ensure initial render sets a default value and cleanup function is provided via `controls.stop()`.
