## 2025-04-05 - Bypassing React render cycle for high-frequency animations
**Learning:** The `AnimatedNumber` component previously used `setInterval` and React's `useState` to update a number every 16ms, causing ~60 re-renders per second during the 2-second animation.
**Action:** Use Framer Motion's `animate` function to directly mutate the DOM node's `textContent` via a `ref`. This bypasses the React render cycle completely, dramatically reducing unnecessary re-renders while preserving the exact same visual behavior.
