## 2025-06-16 - Route Code Splitting
**Learning:** The application bundles all route components (`Home`, `About`, `Services`, etc.) synchronously into a single large JavaScript bundle.
**Action:** Implement route-level code splitting using `React.lazy` and `Suspense` in `App.tsx` to reduce the initial load time and bundle size.
