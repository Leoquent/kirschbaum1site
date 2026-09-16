## 2026-09-16 - Route-level code splitting mapping requirement
**Learning:** Implementing React.lazy on routes requires wrapping Suspense fallbacks in Layout components to prevent header/footer disappearing. Also, since most pages use named exports, they must be explicitly mapped to default exports.
**Action:** Always check component export types before applying React.lazy, and always wrap Suspense fallbacks in a Layout component to prevent visual jumps.
