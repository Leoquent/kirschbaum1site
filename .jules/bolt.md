## 2024-05-18 - AnimatedNumber high-frequency state updates
**Learning:** High-frequency animations inside React components using `useState` or `setInterval` (like a number counter) cause massive re-renders on the main thread, leading to performance bottlenecks.
**Action:** Use Framer Motion's `animate` function directly to modify the DOM node (`ref.current.textContent`) to bypass the React render cycle completely while preserving consistent animation speed.
