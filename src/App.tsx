import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Home kept synchronous for optimal initial load performance
import { Home } from './pages/Home';

// Lazy loaded routes to reduce initial bundle size
// ⚡ Bolt: Code splitting implemented for all non-Home routes.
// This prevents downloading the entire app bundle on the initial visit,
// significantly reducing the initial JavaScript payload and improving Time to Interactive (TTI).
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Services = React.lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const References = React.lazy(() => import('./pages/References').then(module => ({ default: module.References })));
const Impressum = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.Impressum })));
const Datenschutz = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.Datenschutz })));
const AGB = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.AGB })));
const NotFound = React.lazy(() => import('./NotFound'));

// Temporary placeholders for sub-services and career
const Career = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Karriere - In Kürze mehr...</div></Layout>;
const Bath = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Bad & Sanitär - In Kürze mehr...</div></Layout>;
const Heating = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Heizung & Energie - In Kürze mehr...</div></Layout>;
const AC = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Klima & Lüftung - In Kürze mehr...</div></Layout>;

// ⚡ Bolt: Suspense fallback UI for lazy-loaded routes.
// Wrapped in Layout to prevent the header/footer from flashing/disappearing during route transitions.
const PageLoader = () => (
  <Layout isStatic={true}>
    <div className="flex h-[80vh] items-center justify-center text-primary font-display text-2xl animate-pulse">
      Wird geladen...
    </div>
  </Layout>
);

export default function App() {
  return (
    <Router basename="/kirschbaum1site">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/karriere" element={<Career />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/referenzen" element={<References />} />

          {/* Services */}
          <Route path="/leistungen" element={<Services />} />
          <Route path="/leistungen/bad" element={<Bath />} />
          <Route path="/leistungen/heizung" element={<Heating />} />
          <Route path="/leistungen/klima" element={<AC />} />

          {/* Legal */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
