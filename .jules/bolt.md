## 2026-06-15 - [Direct DOM Mutation for Frequent Animations]
**Learning:** Frequent animations like number counters cause severe performance issues when tied to React's `useState`, resulting in hundreds of unnecessary component re-renders per second.
**Action:** Use Framer Motion's `animate` function combined with a direct DOM mutation on a `ref` (`ref.current.textContent = value`) with `ease: "linear"` to completely bypass React's render cycle for high-frequency visual updates while maintaining precise control.
