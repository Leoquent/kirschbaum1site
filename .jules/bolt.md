## 2025-03-05 - [Animated Counter Re-renders]
**Learning:** High-frequency animations (like number counters) using React state updates (e.g. `setInterval` and `useState`) cause excessive component re-renders (e.g. ~60 renders/sec for 2 seconds).
**Action:** Use `motion/react`'s `animate` function to update DOM node `textContent` directly (`ref.current.textContent = value`), bypassing the React render cycle completely while preserving smooth animation speed.
