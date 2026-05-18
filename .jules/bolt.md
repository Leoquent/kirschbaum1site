
## 2026-05-18 - High-Frequency DOM Updates
**Learning:** Using `useState` and `setInterval` for high-frequency animations like number counters causes significant unnecessary React re-renders (~60 per second per component).
**Action:** Use Framer Motion's `animate` function combined with a `useRef` to directly update the DOM node's `textContent`. This bypasses the React render cycle entirely, leading to much better performance. Always include a cleanup `controls.stop()` and use `onComplete` to ensure exact final values.
