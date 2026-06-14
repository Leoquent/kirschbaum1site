## 2026-06-14 - Direct DOM manipulation for high-frequency animations
**Learning:** React state updates for high-frequency animations (like number counters running at 60fps via `setInterval` or `requestAnimationFrame`) cause severe main thread blocking due to excessive re-renders (e.g., ~125 re-renders for a 2-second animation).
**Action:** Always use `motion/react`'s `animate` function combined with direct DOM node manipulation (`ref.current.textContent`) to bypass the React render cycle entirely while preserving animation fidelity and performance.
