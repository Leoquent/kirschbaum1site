
## 2026-09-11 - [Direct DOM Mutation for Animations]
**Learning:** Using `setInterval` with `useState` for rapid continuous animations (like number counters) triggers excessive React re-renders (~60 per second per component), creating unnecessary main-thread overhead.
**Action:** Use Framer Motion's `animate` function on a DOM ref's `textContent` to bypass React's render cycle completely for purely visual, continuous transitions.
