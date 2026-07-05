## 2024-05-20 - Adding code splitting
**Learning:** The monolithic React bundle was split using `React.lazy()` for route components, significantly reducing initial chunk size.
**Action:** Always implement code splitting via `React.lazy()` for distinct top-level route pages to optimize load times on SPAs.
## 2026-07-05 - High-frequency Animations React Render Optimization
**Learning:** High-frequency UI updates (like number counters at 60fps) using `useState` and `setInterval` trigger hundreds of unnecessary React component re-renders per instance, wasting CPU cycles and potentially causing jank.
**Action:** Always use direct DOM manipulation (e.g., `ref.current.textContent`) combined with an animation library's `onUpdate` callback (`motion/react`'s `animate`) to bypass the React render cycle entirely for purely visual, high-frequency continuous updates.
