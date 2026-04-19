## 2024-05-24 - [Animated Counter Performance Bottleneck]
**Learning:** High-frequency animations (like number counters from 0 to 5000 in 2 seconds at 60fps) implemented via React state (`useState`) cause excessive component re-renders (~120+ renders per animated element). This clogs the main thread and causes jank on slower devices.
**Action:** Use `motion/react`'s `animate` function to tween the value and mutate the DOM node directly (`ref.current.textContent = latest`), completely bypassing the React render cycle for high-frequency updates.
