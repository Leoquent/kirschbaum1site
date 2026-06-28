## 2026-06-28 - [High-Frequency React Animations]
**Learning:** Using `setInterval` to call a React state setter for smooth animations (like number counters) causes severe performance degradation, triggering a full component re-render every 16ms (60fps).
**Action:** Always use `motion/react`'s `animate` function combined with direct DOM node manipulation (e.g., `ref.current.textContent = value`) for high-frequency updates to bypass the React render cycle completely while preserving consistent animation speed.
