## 2024-05-18 - [Lazy Loading Route Components]
**Learning:** The React application is loading all route components (Home, About, Services, etc.) synchronously on initial load in `App.tsx`. This causes a large initial bundle size since all pages are bundled together, increasing TTFB and blocking the main thread.
**Action:** Implement `React.lazy` and `Suspense` for all route components in `App.tsx` to enable code splitting. This will significantly reduce the initial JavaScript payload by downloading page chunks only when requested.
