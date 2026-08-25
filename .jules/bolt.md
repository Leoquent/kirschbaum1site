## 2025-02-20 - Adding Route Level Code Splitting
**Learning:** Initial bundle size is relatively large because all routes are bundled together. Implementing Route-level code splitting using `React.lazy()` significantly decreases the initial bundle size (from 477kb to 376kb main chunk + smaller lazy chunks) and improves load times.
**Action:** Always consider `React.lazy()` for code-splitting routes in SPA's when route complexity increases, as they are a natural boundary. Ensure Suspense falls back wrapped with `<Layout>` to prevent UI jumping.
