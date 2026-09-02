## 2024-05-15 - Bolt's Journal
**Learning:** Initial journal entry.
**Action:** Let's look for performance bottlenecks.

## 2026-09-02 - React.lazy Code Splitting Details
**Learning:** Page components in this app render their own layout and use named exports. This means `React.lazy` mapping must be explicit to `.then(m => ({ default: m.[Name] }))` and the `Suspense` fallback must include `<Layout isStatic={true}>` to prevent the layout from temporarily unmounting on navigation.
**Action:** When implementing route-level boundaries or fallbacks, wrap them in the Layout component and explicitly map named exports for lazy loading.
