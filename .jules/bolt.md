## YYYY-MM-DD - [Suspense Fallback Layout Quirk]
**Learning:** In this application's architecture, page components individually render the `<Layout>` component rather than it wrapping the router. When implementing route-level boundaries (like `<Suspense>`), the fallback UI must also be wrapped in the `<Layout isStatic={true}>` component to prevent the header and footer from disappearing during the loading state.
**Action:** Always wrap `<Suspense>` fallbacks or ErrorBoundaries in `<Layout isStatic={true}>` to prevent jarring layout shifts and missing navigation elements.
