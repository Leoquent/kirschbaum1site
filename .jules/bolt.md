## 2026-05-10 - AnimatedNumber React Re-renders
**Learning:** Using setInterval with useState for high-frequency animations (like number counters running every 16ms) causes excessive React re-renders (~125 per component), bottlenecking the main thread.
**Action:** Use framer-motion's animate function with direct DOM node manipulation (ref.current.textContent) to bypass React's render cycle completely.
