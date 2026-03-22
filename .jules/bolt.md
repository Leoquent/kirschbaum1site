## 2024-03-21 - [Framer Motion Direct DOM Animation]
**Learning:** High-frequency animations (like number counters) using React state (`useState`) cause excessive re-renders (e.g. 60 FPS per component instance), blocking the main thread.
**Action:** Use `motion/react`'s `animate` function to directly update DOM nodes (e.g., modifying `ref.current.textContent`). This bypasses React's render cycle completely, vastly improving performance while maintaining visual fidelity.
