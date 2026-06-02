## 2026-06-02 - High-Frequency Animation Anti-Pattern
**Learning:** Found a performance bottleneck where `useState` combined with `setInterval(..., 16)` was used to implement a number counter animation in `AnimatedNumber.tsx`. This causes React to re-render the component roughly 60 times a second, which is an anti-pattern.
**Action:** For high-frequency animations like number counters, bypass React's render cycle by using `motion/react`'s `animate` function to directly update the DOM node's text content (e.g., `ref.current.textContent`).
