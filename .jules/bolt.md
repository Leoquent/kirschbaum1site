## 2024-06-24 - Bypassing React Render for High-Frequency Animations
**Learning:** For rapidly changing values like number counters (`1` to `500+` in 2 seconds), standard React state updates (`useState` + `setInterval`) cause excessive and unnecessary re-renders.
**Action:** Use Framer Motion's `animate` function directly on a DOM node ref (`ref.current.textContent`) to decouple the visual animation from React's render cycle, achieving smooth high-frequency updates without performance overhead.
