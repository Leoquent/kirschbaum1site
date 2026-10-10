import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// ⚡ Bolt Performance Optimization: Route-level code splitting
// Replaced synchronous imports with React.lazy to reduce the initial bundle size.
// This defers loading of route components until they are actually visited,
// which speeds up the initial page load time and reduces main thread blocking.
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
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

// ⚡ Bolt Performance Optimization: Suspense fallback
// Wraps the lazy-loaded routes. The fallback maintains the structural Layout
// (Navbar/Footer) so the user experiences a seamless transition without UI jumping.
const PageLoader = () => (
  <Layout isStatic={true}>
    <div className="pt-40 p-10 text-center text-primary h-[80vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
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
