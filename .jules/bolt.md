## 2026-05-16 - Prevent high-frequency React re-renders in animations
**Learning:** Using `useState` paired with `setInterval` for high-frequency animations (like rapid number counters) forces React to re-render the entire component (and potentially its children) 60 times a second. This causes significant, unnecessary main thread blocking.
**Action:** Use Framer Motion's `animate` function combined with a direct DOM mutation via `useRef` (e.g., `ref.current.textContent = value`) inside `onUpdate` to completely bypass React's render cycle during the animation, improving performance.
