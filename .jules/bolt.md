
## 2024-05-08 - [Direct DOM manipulation bypasses React re-renders]
**Learning:** For high-frequency animations like counting numbers in `AnimatedNumber.tsx`, using React state triggers hundreds of unnecessary re-renders. Framer Motion's `animate` function allows updating the DOM directly (e.g., `ref.current.textContent`) while completely bypassing the React render cycle, preserving performance and maintaining visual consistency.
**Action:** When implementing high-frequency value updates or animations linked to a ref, use direct DOM manipulation (`animate` with `onUpdate` modifying the `textContent` or `style`) rather than `useState` to avoid thrashing the React render cycle.
