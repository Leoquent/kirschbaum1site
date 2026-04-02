## 2025-02-14 - Optimize high-frequency animations by bypassing React render cycle
**Learning:** Using `useState` and `setInterval` for high-frequency DOM manipulation like number counters (e.g. running for 2000ms updating every 16ms) results in ~125 unnecessary React re-renders per component instance.
**Action:** Always prefer direct DOM mutations for high-frequency continuous changes, using tools like Framer Motion's `animate` with an `onUpdate` callback to modify `ref.current.textContent` directly, preserving animation smoothness while entirely bypassing React's render overhead.
