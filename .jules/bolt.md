## 2026-06-09 - High-Frequency React State Updates for Animations
**Learning:** Using `useState` and `setInterval` to trigger React state updates 60 times a second for simple number counter animations (`AnimatedNumber`) forces massive, unnecessary component re-renders. This is a common performance anti-pattern.
**Action:** Bypassed React's render cycle completely by directly mutating `ref.current.textContent` using `motion/react`'s `animate` function. This provides smooth animation and zero re-renders.
