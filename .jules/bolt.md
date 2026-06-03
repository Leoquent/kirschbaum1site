## 2026-06-03 - High-Frequency React Re-renders
**Learning:** Using React state (`useState`) to drive high-frequency animations (like number counting) triggers a render cycle on every frame. This is extremely inefficient and can cause UI jitter on slower devices.
**Action:** Always use Framer Motion's `animate` function combined with direct DOM node mutation (`ref.current.textContent`) via the `onUpdate` and `onComplete` callbacks for simple property animations, entirely bypassing React's render lifecycle.
