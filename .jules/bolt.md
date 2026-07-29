## 2024-05-18 - React.lazy Code Splitting with Named Exports
**Learning:** Most page components in this application (like `Home`, `About`, etc.) use named exports (e.g., `export const Home = ...`) instead of default exports. `React.lazy` inherently expects default exports.
**Action:** When implementing code splitting for routes, ensure explicit mapping to default exports for named components: `React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))`. `NotFound` is an exception and uses a default export.
