## 2026-08-28 - Suspense Fallback Architecture

**Learning:** In this application's architecture, page components individually render their own `<Layout>` component rather than having a global layout wrapper around the router. When implementing route-level code splitting using `<Suspense>`, if the fallback UI is just a simple loading spinner or text, the site's header and footer (provided by the Layout) will disappear entirely during the loading state, resulting in layout shift and a poor user experience.

**Action:** When implementing route-level boundaries (e.g., `<Suspense>` fallbacks) in an architecture where pages manage their own layouts, the fallback UI must also be explicitly wrapped in the `<Layout>` component (e.g., `<Layout isStatic={true}>...`) to prevent the global UI elements from unmounting during transitions.
