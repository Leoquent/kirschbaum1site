## 2025-02-18 - High-frequency Animations Without React Re-renders
**Learning:** React's render cycle (`setState` inside `setInterval`) is too slow and inefficient for high-frequency numerical animations, causing hundreds of unnecessary re-renders.
**Action:** Use Framer Motion's `animate` function to directly update the DOM node's `textContent` via a ref. This completely bypasses React's render phase while keeping smooth animations (remember: `motion/react` v12 duration is in seconds!).
