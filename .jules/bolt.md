## 2024-03-05 - Animating DOM Nodes Directly

**Learning:** When using frequent `setInterval` to update state for simple animations (like a number counter), React's reconciliation process can be a major bottleneck. The `AnimatedNumber` component triggered 120 re-renders per component over 2 seconds. Given there were multiple components animating simultaneously, this caused excessive main-thread work.

**Action:** For high-frequency non-layout animations (especially text/number updates), bypass React's render cycle completely. Use an animation library like `motion/react` to calculate the value, and use a `ref` to directly update the DOM node (`ref.current.textContent = value`).
