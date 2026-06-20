## 2026-06-20 - High-Frequency Animation Pattern for React
**Learning:** In React, updating state with high-frequency intervals (like 60fps/every 16ms) for multiple components concurrently (e.g., AnimatedNumber counters) causes excessive re-renders across the component tree, leading to layout thrashing and CPU spikes.
**Action:** Always bypass the React render cycle for purely visual animations or interpolations. Use library functions like Framer Motion's `animate` to directly mutate DOM node properties (e.g., `ref.current.textContent`) to maintain high performance.
