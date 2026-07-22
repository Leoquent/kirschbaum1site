## 2024-05-24 - React Router Code Splitting
**Learning:** Applying `React.lazy` to large route components successfully splits the bundle, reducing the main chunk by around 60kB. Using `React.lazy()` with named exports in this codebase requires an explicit `.then(m => ({ default: m.Component }))` mapping since most route pages do not use `export default`.
**Action:** When implementing lazy loading on routes with named exports, always map them to `default` instead of using the raw import, and ensure `<Suspense>` wraps the entire routing structure.
