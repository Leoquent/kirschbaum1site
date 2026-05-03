## 2026-05-03 - [Direct DOM Updates for High-Frequency Animations]
**Learning:** High-frequency animations like number counters cause excessive React re-renders (~60fps) when using `useState` and `setInterval`. Bypassing React's render cycle completely by directly mutating `ref.current.textContent` with `motion/react`'s `animate` function is much more performant.
**Action:** Use `animate` from `motion/react` with `ease: "linear"` to directly update DOM nodes for animations that change values frequently, ensuring to return a cleanup function (`controls.stop()`) inside the `useEffect`.
