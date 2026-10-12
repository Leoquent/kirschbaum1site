## 2025-02-27 - [Code Splitting with React.lazy]
**Learning:** React Router v7+ supports React.lazy() efficiently, drastically reducing initial load time (from 477.36 kB to 377.08 kB initial chunk). However, components that rely on the `Layout` must ensure the fallback itself renders the `Layout` to prevent the header/footer from flashing during chunk load.
**Action:** Always wrap Suspense fallbacks inside the common `Layout` component when applying React.lazy to routes in this application structure.
