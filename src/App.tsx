import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Lazy loaded pages to reduce initial bundle size
// We map named exports to default exports as required by React.lazy
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Services = React.lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const References = React.lazy(() => import('./pages/References').then(m => ({ default: m.References })));
const Impressum = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Impressum })));
const Datenschutz = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Datenschutz })));
const AGB = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.AGB })));

// NotFound is a default export
const NotFound = React.lazy(() => import('./NotFound'));

// Temporary placeholders for sub-services and career
const Career = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Karriere - In Kürze mehr...</div></Layout>;
const Bath = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Bad & Sanitär - In Kürze mehr...</div></Layout>;
const Heating = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Heizung & Energie - In Kürze mehr...</div></Layout>;
const AC = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Klima & Lüftung - In Kürze mehr...</div></Layout>;

// Fallback UI mapped to layout to keep header/footer visible during load
const LoadingFallback = () => (
  <Layout isStatic={true}>
    <div className="pt-40 p-10 text-center text-primary h-[80vh] font-display text-xl">Laden...</div>
  </Layout>
);

export default function App() {
  return (
    <Router basename="/kirschbaum1site">
      {/*
        ⚡ Bolt Performance Optimization:
        Wrapping Routes in Suspense enables route-based code splitting.
        This reduces the initial JavaScript bundle size significantly because users
        only download the code for the specific page they are visiting,
        eliminating the need to parse and execute unused components upfront.
      */}
      <Suspense fallback={<LoadingFallback />}>
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
