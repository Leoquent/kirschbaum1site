## 2026-06-01 - [AnimatedNumber Re-renders]
**Learning:** For high-frequency DOM updates (like counting numbers), updating React state on every frame (e.g., using `setInterval` or `requestAnimationFrame`) triggers massive component re-render cycles, harming performance.
**Action:** Use direct DOM manipulation. Utilize `motion/react`'s `animate` function on a DOM node ref (`ref.current.textContent`) with a linear ease to bypass React's render cycle completely while preserving consistent animation speed.
