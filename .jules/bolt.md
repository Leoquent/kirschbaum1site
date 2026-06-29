## 2024-10-24 - Optimizing Route Bundle Sizes
**Learning:** The application was serving the entire codebase in a single massive bundle, causing long initial load times, especially for users only visiting specific pages.
**Action:** Implemented React.lazy and Suspense for route-level code splitting in App.tsx. Ensure this approach is evaluated in other complex single-page apps to improve initial payload delivery.
