## 2026-06-12 - Prevent excessive re-renders in AnimatedNumber
**Learning:** High-frequency state updates in `AnimatedNumber` (using `setInterval` to update state at ~60fps) cause excessive React re-renders.
**Action:** Use `motion/react`'s `animate` function to directly update the DOM via `ref.current.textContent`.
