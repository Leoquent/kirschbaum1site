## 2026-07-20 - React.lazy with named exports
**Learning:** This codebase primarily uses named exports for page components (e.g., `export const Home = ...`) rather than default exports. Because `React.lazy` explicitly expects a default export, a simple `React.lazy(() => import('./pages/Home'))` will fail at runtime.
**Action:** When implementing lazy loading in this repository, always append a `.then()` block to map the named export to the default property: `import('...').then(module => ({ default: module.ComponentName }))`.
