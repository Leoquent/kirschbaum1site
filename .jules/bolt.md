## 2026-03-27 - [AnimatedNumber Component Mount Performance]
**Learning:** Found an AnimatedNumber component using React state (useState) and setInterval to increment a number. In a typical 2s animation at 60fps (~16ms), this triggers ~125 unnecessary React renders per instance, heavily blocking the main thread during scroll or mount.
**Action:** Always prefer manipulating DOM nodes directly for high-frequency visual updates that don't depend on React's declarative rendering model. Used motion/react's `animate` function to bypass React's render cycle completely.
