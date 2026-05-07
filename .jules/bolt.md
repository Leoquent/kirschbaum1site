## 2024-05-07 - [Bypass React Render Cycle for High-Frequency Animations]
**Learning:** Found a major bottleneck in `AnimatedNumber.tsx`: Using `setInterval` to trigger React state updates (`useState`) every 16ms for animations causes severe re-render thrashing (~125 re-renders per animation per component).
**Action:** Use `motion/react`'s `animate` function to directly mutate the DOM node's `textContent` inside `onUpdate`. This achieves 60fps animations with 0 React re-renders. Always ensure to clean up with `controls.stop()` to prevent memory leaks on unmount.
