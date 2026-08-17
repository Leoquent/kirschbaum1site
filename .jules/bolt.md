## 2026-08-17 - React State Render Thrashing with High-Frequency Animations

**Learning:** Using `useState` and `setInterval` to manually drive an animation like a number counter (e.g., 60 updates per second) forces the component to go through the entire React reconciliation and render cycle on every tick. This creates unnecessary CPU overhead and can cause visual stuttering or block the main thread, especially when multiple counters are active at the same time.

**Action:** For high-frequency, continuous DOM updates that don't structurally change the component tree, use tools that can directly modify the DOM element, bypassing React's render loop entirely. Framer Motion's `animate` function can be used with a `ref` (e.g., `ref.current.textContent`) to update a value efficiently. Always remember to provide a cleanup function to stop the animation when the component unmounts.
