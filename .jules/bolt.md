## 2025-02-27 - Implement Code Splitting
**Learning:** The application has a single large main chunk that includes all page components, increasing initial load time.
**Action:** Use React.lazy and Suspense in App.tsx to dynamically import page components, creating separate chunks for each route and reducing the initial bundle size.
