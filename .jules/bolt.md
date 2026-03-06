## 2024-03-06 - React Render Cycle Bypass for Animations
**Learning:** High-frequency visual updates (like counters incrementing every 16ms) cause severe performance bottlenecks when using React state, as every update triggers a full component re-render.
**Action:** Always bypass React's render cycle for pure visual animations by using `motion/react`'s `animate` function to directly update DOM nodes (e.g., `ref.current.textContent`).
