## 2026-06-23 - [Optimize AnimatedNumber Performance]
**Learning:** High-frequency `useState` updates (like counting up numbers using `setInterval(..., 16)`) in React cause continuous and heavy re-renders, blocking the main thread and slowing down the UI.
**Action:** Use `animate` from `motion/react` with direct DOM manipulation (`ref.current.textContent = ...`) and `ease: "linear"` to bypass React's render cycle completely while preserving consistent animation speed.
