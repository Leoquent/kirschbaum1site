## 2024-03-20 - [Performance] Optimize high-frequency React state updates in animations
**Learning:** Using `useState` and `setInterval` for high-frequency updates (like counting numbers up to 500 in 2 seconds) causes significant performance degradation due to unnecessary React re-renders (~240 re-renders per second).
**Action:** Use Framer Motion's `animate` function to directly update the DOM node (e.g. `ref.current.textContent`) to bypass React's render cycle completely while preserving the same animation visual effect.
