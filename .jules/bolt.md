## 2026-09-12 - Named Exports in React.lazy
**Learning:** In this codebase, most page components use named exports instead of default exports.
**Action:** When using `React.lazy()` for code splitting, explicitly map the module to default (e.g., `then(module => ({ default: module.Home }))`).
