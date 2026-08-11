## 2026-08-11 - Bypass React render cycle for high-frequency animations
**Learning:** For components that update very frequently (like number counters running at 60fps), using React state (`useState` + `setInterval`) causes excessive re-renders that can harm main thread performance.
**Action:** Use Framer Motion's `animate` function to directly update the DOM node (e.g. `ref.current.textContent`) to bypass React's render cycle completely while preserving smooth animation.
