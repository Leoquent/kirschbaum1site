## 2023-10-27 - [Direct DOM manipulation for high-frequency animations]
**Learning:** Using React state for 60fps animations like counting numbers causes massive unnecessary re-renders (120+ renders per 2s animation). Framer Motion's `animate` with direct DOM `textContent` updates is far more efficient.
**Action:** When implementing high-frequency visual updates that don't affect other components, bypass React state and use refs with direct DOM manipulation.
