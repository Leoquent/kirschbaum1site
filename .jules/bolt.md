## 2024-05-18 - [Optimizing High-Frequency Animations]
**Learning:** Using React state (`useState`) inside a fast `setInterval` (e.g., 16ms) to drive animations causes excessive re-renders (dozens per second) and degrades performance.
**Action:** Use Framer Motion's `animate` function combined with a `useRef` to directly mutate the DOM element's `textContent`. This completely bypasses the React render cycle for high-frequency updates while maintaining the same visual result.
