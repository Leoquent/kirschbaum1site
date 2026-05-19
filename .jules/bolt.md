## 2026-05-19 - Optimizing High-Frequency Animations
**Learning:** Updating React state on every frame for a 2-second number animation causes ~120 unnecessary re-renders of the component.
**Action:** When animating values that update frequently (like counting numbers), use `motion/react`'s `animate` function with a linear easing to directly manipulate the DOM node (`ref.current.textContent`). Ensure lifecycle hygiene by returning `controls.stop()` in the useEffect cleanup.
