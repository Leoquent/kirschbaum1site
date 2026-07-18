## 2026-07-18 - High-Frequency React State Updates Lead to Performance Degradation

**Learning:** When animating values (like number counters) over a short duration, using React `useState` inside a `setInterval` or `requestAnimationFrame` loop forces the component to re-render 60 times per second. This causes significant performance bottlenecks, especially if multiple counters are rendered simultaneously or if the component tree is complex.

**Action:** Bypass the React render cycle entirely for high-frequency DOM updates by using direct DOM manipulation (e.g., `ref.current.textContent = ...`). Libraries like Framer Motion's `animate` function combined with a `useRef` provide a performant way to handle these animations without sacrificing developer experience.
