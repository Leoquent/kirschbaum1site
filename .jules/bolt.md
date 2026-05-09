## 2024-05-10 - React re-renders in AnimatedNumber
**Learning:** High-frequency `setInterval` updates tied to React's `useState` cause significant unnecessary DOM reconciliation (120+ re-renders over a 2-second animation). React's virtual DOM is not optimized for 60fps continuous scalar value updates.
**Action:** Always bypass React's render cycle for high-frequency numerical animations by using `motion/react`'s `animate` function and directly mutating the DOM node via `ref.current.textContent`.
