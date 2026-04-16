## 2024-05-23 - [React Render Cycle vs DOM Manipulation]
**Learning:** High-frequency state updates in React (like number counters at 60fps) cause severe performance bottlenecks due to excessive re-renders.
**Action:** Always use direct DOM manipulation (e.g. `ref.current.textContent`) paired with `motion/react`'s `animate` function for high-frequency animations to completely bypass the React render cycle while preserving animation smoothness.
