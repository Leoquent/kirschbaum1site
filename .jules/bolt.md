## 2026-09-01 - Route-level Suspense Boundary Fallbacks
**Learning:** In this application's architecture, page components individually render the `<Layout>` component, meaning a naive global `<Suspense>` fallback will cause the header and footer to disappear during route transitions.
**Action:** When implementing code-splitting with `React.lazy()`, always wrap the `Suspense` fallback UI within `<Layout isStatic={true}>` to maintain shell stability during chunk loading.
