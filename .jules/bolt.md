## 2025-02-27 - Direct DOM manipulation for animation

**Learning:** Animations implemented using `setInterval` and `useState` for visual updates (e.g., number counters) cause a significant number of React re-renders proportional to the duration of the animation (e.g., 125 re-renders for a 2-second animation updating every 16ms). This blocks the main thread and impacts the frame rate.

**Action:** For simple visual animations like counting numbers, use a direct DOM reference (`useRef`) and update the `textContent` of the node directly in an animation loop (like `framer-motion`'s `animate` with an `onUpdate` callback). This completely eliminates React re-renders, removing the performance penalty and significantly smoothing the UI transition.
