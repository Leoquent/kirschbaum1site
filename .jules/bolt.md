## 2024-05-18 - [AnimatedNumber Performance]
**Learning:** High-frequency animations (like number counters) using `setInterval` and `useState` cause excessive re-renders (~120 per 2-second animation).
**Action:** Always use `motion/react`'s `animate` function with direct DOM node updates (`ref.current.textContent`) to bypass React's render cycle completely for pure visual animations.
