## 2026-06-30 - Direct DOM manipulation for fast animations
**Learning:** Using React state (`useState`) with high-frequency updates like `setInterval` or requestAnimationFrame (e.g. for number counters) triggers hundreds of unnecessary re-renders in the component tree, drastically reducing performance.
**Action:** Use Framer Motion's `animate` function with `ease: "linear"` to directly update DOM nodes (e.g., `ref.current.textContent = value`) bypassing React's render cycle completely while preserving consistent animation speed. Always return a cleanup function (e.g. `controls.stop()`).
