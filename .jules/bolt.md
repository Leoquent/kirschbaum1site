
## 2026-06-11 - Eliminating React renders during animations
**Learning:** In React components like `AnimatedNumber`, using `setInterval` paired with state updates (`useState`) for visual animations is a severe anti-pattern, causing hundreds of unnecessary VDOM diffs and layout reflows (e.g. ~125 renders for a 2-second counter).
**Action:** Always prefer direct DOM manipulation for high-frequency visual updates (e.g., using Framer Motion's `animate` function directly on a ref's `textContent`). By returning static children (like `<span ref={ref}>0</span>`), React's VDOM remains unchanged and skips reconciliation entirely during the animation, improving main-thread performance without sacrificing visual accuracy.
