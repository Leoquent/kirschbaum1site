import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// ⚡ Bolt Optimization: Lazy Loading Pages
// Why: Reduces initial bundle size by splitting the main bundle into smaller chunks for each page.
// Impact: Significantly faster initial load time (TTFB/FCP), as users only download code for the page they are on.
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const References = lazy(() => import('./pages/References').then(m => ({ default: m.References })));
const Impressum = lazy(() => import('./pages/Legal').then(m => ({ default: m.Impressum })));
const Datenschutz = lazy(() => import('./pages/Legal').then(m => ({ default: m.Datenschutz })));
const AGB = lazy(() => import('./pages/Legal').then(m => ({ default: m.AGB })));
const NotFound = lazy(() => import('./NotFound'));

// Temporary placeholders for sub-services and career
const Career = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Karriere - In Kürze mehr...</div></Layout>;
const Bath = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Bad & Sanitär - In Kürze mehr...</div></Layout>;
const Heating = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Heizung & Energie - In Kürze mehr...</div></Layout>;
const AC = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Klima & Lüftung - In Kürze mehr...</div></Layout>;

export default function App() {
  return (
    <Router basename="/kirschbaum1site">
      <Suspense fallback={<Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Laden...</div></Layout>}>
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
