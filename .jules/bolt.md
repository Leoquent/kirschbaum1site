
## 2024-05-14 - Bypass React Renders in High-Frequency Animations
**Learning:** `AnimatedNumber` was causing ~120 React re-renders per component over its 2s animation because it stored the counting state in `useState`. In `motion/react`, high-frequency animations should be decoupled from React's state management.
**Action:** Use `motion/react`'s `animate` directly with an `onUpdate` callback that mutates `ref.current.textContent`. This offloads work to the browser layout engine and eliminates React overhead entirely for smooth number counting animations.
