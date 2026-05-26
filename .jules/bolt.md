## 2026-05-26 - [High-frequency Animations via Direct DOM Manipulation]
**Learning:** For high-frequency value updates (like AnimatedNumber counters), using `setInterval` and updating React state 60 times a second creates expensive re-renders and potential performance bottlenecks.
**Action:** Use `motion/react`'s `animate` function to directly update the DOM node's `textContent` (via a ref) bypassing React's render cycle completely while preserving consistent animation speed.
