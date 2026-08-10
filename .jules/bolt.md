## 2026-08-10 - Code Splitting Routes

**Learning:** Static importing of all page components in the main router file (`src/App.tsx`) creates a large initial JavaScript bundle.
**Action:** Always apply code splitting using `React.lazy()` for route-level components in React applications. In this app, it reduces the main bundle size by approximately 100kB (uncompressed).