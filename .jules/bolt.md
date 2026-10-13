## 2023-10-14 - Suspense Fallback Layout Wrapper
**Learning:** In this application's architecture, page components individually render the `<Layout>` component instead of it wrapping the `<Routes>`. When implementing route-level boundaries (e.g., `<Suspense>` fallbacks), the fallback UI must also be wrapped in the `<Layout>` component to prevent the header and footer from disappearing during the loading state.
**Action:** When adding suspense boundaries or error boundaries at the route level, always wrap the fallback UI in `<Layout isStatic={true}>`.
