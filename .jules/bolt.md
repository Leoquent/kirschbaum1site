## 2024-03-22 - Bypass React Render for High-Frequency Animations
**Learning:** The previous implementation of `AnimatedNumber` used `setInterval` and `useState` to increment a counter every 16ms, causing hundreds of unnecessary React component re-renders per animation. This is a common but severe anti-pattern for animations in React.
**Action:** Always use `motion/react`'s `animate` function combined with a `useRef` to directly update DOM nodes (e.g., `ref.current.textContent`) for high-frequency value interpolations to bypass the React render cycle entirely.
