## YYYY-MM-DD - Direct DOM Manipulation with Framer Motion
**Learning:** When using Framer Motion's `animate` function for direct DOM updates on `textContent`, providing a default value (e.g., `0`) in the initial render prevents visual layout shifts or blank flashes before the animation begins. Always returning a cleanup function (`controls.stop()`) prevents memory leaks.
**Action:** Always include a sensible default text content inside elements receiving direct DOM manipulation in React, and ensure cleanup functions are returned in `useEffect`.
