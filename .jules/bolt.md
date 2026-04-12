
## 2024-05-18 - [Optimizing High-Frequency Animations with Framer Motion]
**Learning:** In React, animating high-frequency state changes (like number counters updating every 16ms via setInterval and useState) causes massive re-render waterfalls, leading to significant performance bottlenecks and jank.
**Action:** When animating values that update rapidly, bypass the React render cycle completely by using Framer Motion's `animate` function combined with a direct DOM mutation (e.g., `ref.current.textContent = value`). This provides linear, smooth 60fps animations while keeping the component's render count to a minimum.
