## 2024-03-24 - React Animation High-Frequency Re-renders
**Learning:** High-frequency animations (like number counters counting from 0 to 500) using `useState` and `setInterval` trigger excessive React render cycles (e.g. ~125 renders for a 2-second animation). In heavily nested component trees, this can block the main thread and drop frames.
**Action:** Always use animation libraries (like `motion/react`'s `animate`) to directly update the DOM node (`ref.current.textContent`) for these types of animations, bypassing the React render cycle completely.
