## 2024-05-18 - First entry
**Learning:** Found some issues
**Action:** Fix them

## 2026-09-08 - Suspense Fallback Layout Consistency
**Learning:** In this application's architecture, page components individually render the `<Layout>` component rather than having a top-level layout wrapper around the `<Routes>`. When implementing route-level code splitting with `Suspense`, the fallback UI will completely replace the current route's content while loading. If the fallback isn't wrapped in `<Layout>`, the header and footer will temporarily disappear, causing a jarring visual flicker.
**Action:** Always wrap `Suspense` fallbacks in the `<Layout isStatic={true}>` component when implementing code splitting in an architecture where pages individually own the layout rendering.
