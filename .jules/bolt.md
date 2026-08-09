## 2026-08-09 - [Direct DOM manipulation for Animated Numbers]
**Learning:** High-frequency animations (like number counters 0 to 1000 in 2 seconds) causing continuous `useState` updates will block the main thread and trigger massive React re-render cycles at 60 FPS. Framer Motion can update the DOM outside of React's lifecycle.
**Action:** Use `motion/react`'s `animate` function on a ref to modify `textContent` directly using the `onUpdate` callback with `ease: "linear"`, bypassing the React render tree completely. Ensure default textContent is present inside the component for initial load.
