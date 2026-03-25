## 2024-05-20 - [Animated Numbers Re-render Elimination]
**Learning:** High-frequency animations (like number counters) using `setInterval` and `useState` cause severe React render thrashing. `motion/react`'s `animate` function can be used to directly mutate DOM node properties (e.g., `ref.current.textContent`) bypassing the React render cycle completely.
**Action:** For continuous numeric or stylistic animations, prefer `animate` with direct DOM refs over React state variables to eliminate rendering overhead.
