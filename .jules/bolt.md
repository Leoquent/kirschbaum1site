## 2024-05-18 - AnimatedNumber Framer Motion React Render Bypass
**Learning:** High-frequency animations (like number counters) can block the main thread by triggering hundreds of React renders if state is used.
**Action:** Use Framer Motion's `animate` function with `onUpdate` to directly modify DOM nodes (e.g. `ref.current.textContent`) to bypass React's render cycle completely while preserving smooth animation.
