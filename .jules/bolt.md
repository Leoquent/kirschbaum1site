## 2025-03-05 - Avoid re-renders in AnimatedNumber
**Learning:** Animated counters that use React state (`useState`) coupled with `setInterval` cause excessive main-thread blocking by forcing continuous React render cycles (e.g., 60 renders per second).
**Action:** Use Framer Motion's `animate` with direct DOM manipulation (`ref.current.textContent`) to update numeric values outside the React render cycle, thereby significantly reducing CPU usage and eliminating unnecessary React reconciliations.
