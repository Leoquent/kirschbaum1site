## 2024-05-18 - Route Code Splitting with Named Exports

**Learning:** When using `React.lazy()` for code splitting in a project that uses named exports for page components, you must explicitly map the named export to a `default` export property using a `.then()` handler. Otherwise, React will throw an error expecting a default export.

**Action:** Use the pattern `React.lazy(() => import('./path').then(module => ({ default: module.NamedExport })))` when implementing code splitting on modules that lack default exports.
