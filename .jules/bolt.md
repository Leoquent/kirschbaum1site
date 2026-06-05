## 2026-06-05 - Bypassing React render cycle for high-frequency animations
**Learning:** High-frequency animations (like number counters) using `useState` and `setInterval` trigger excessive React re-renders (~125 re-renders for a 2s animation at 60fps), causing significant main thread blocking.
**Action:** Always use `motion/react`'s `animate` function with direct DOM manipulation (`ref.current.textContent`) for high-frequency text animations to completely bypass React's render cycle while preserving animation speed and easing.
