
## $(date +%Y-%m-%d) - Bypassing React Render Cycle for High-Frequency Animations
**Learning:** Using React state (`useState`) and `setInterval` to drive high-frequency animations (like a number counter updating every 16ms) causes massive main-thread blocking due to continuous re-renders. Micro-optimizations like tweaking `[...Array(n)]` are rejected as meaningless, but fixing render thrashing is highly valued.
**Action:** Always use `motion/react`'s `animate` function (or similar mechanisms) to directly update DOM nodes (e.g., `ref.current.textContent`) for continuous animations, completely bypassing the React render cycle.
