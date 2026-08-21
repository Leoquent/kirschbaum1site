## 2026-08-21 - [Optimize AnimatedNumber rendering]
**Learning:** High-frequency `useState` for simple animations (like incrementing numbers) triggers excessive React re-renders, causing main thread load and inefficient DOM updates.
**Action:** Use `motion/react`'s `animate` function directly on a DOM element ref (`ref.current.textContent`) to update the DOM directly, bypassing React state entirely and ensuring zero unnecessary re-renders.
