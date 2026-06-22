## 2026-06-22 - Route-based Code Splitting with Named Exports
**Learning:** In this application, page components (like Home, About) are exported as named exports. When using `React.lazy` for code splitting, it expects a default export. A direct dynamic import fails unless mapped correctly.
**Action:** When implementing lazy loading with named exports, ensure the dynamic import is mapped to a default export format: `React.lazy(() => import('./path').then(module => ({ default: module.NamedExport })))`.
