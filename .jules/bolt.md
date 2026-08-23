## 2026-08-23 - Optimizing High-Frequency Animations
**Learning:** Updating React state on every frame (e.g. 60 times a second for counting numbers) causes expensive and unnecessary React re-renders, causing a large performance bottleneck during animations.
**Action:** Use framer-motion's `animate` function to directly update DOM nodes (e.g. `ref.current.textContent`) to bypass the React render cycle completely when running high-frequency animations.
