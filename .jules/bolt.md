## 2024-07-09 - Code Splitting Implementation
**Learning:** This React application using Vite didn't utilize dynamic code splitting, resulting in a slightly bloated main bundle loading code for unvisited pages.
**Action:** Implemented React.lazy and Suspense for top level route components. Since components were exported as named exports, explicitly mapped them via the `then` Promise syntax (e.g. `import('./pages/Home').then(module => ({ default: module.Home }))`).
