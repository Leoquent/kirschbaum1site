## 2025-02-24 - Bypass React Render Cycle for High-Frequency Animations
**Learning:** Animating counters using React state (`useState` + `setInterval`) causes ~60 React re-renders per second per counter, which is a major performance bottleneck for a full component tree.
**Action:** Use Framer Motion's `animate` function combined with a direct DOM mutation (`ref.current.textContent = ...`) for high-frequency visual updates to skip the React render cycle entirely while preserving smooth animation.
