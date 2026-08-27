## 2026-08-27 - Bypassing React State for High-Frequency Animations
**Learning:** Using `useState` and `setInterval` for high-frequency requestAnimationFrame-style animations (like number counters) causes excessive React re-renders, hurting performance.
**Action:** Use Framer Motion's `animate` function with direct DOM manipulation (`ref.current.textContent`) to bypass the React render cycle entirely while maintaining visual fidelity.
