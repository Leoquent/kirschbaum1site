import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
// ⚡ Bolt: Route-level code splitting
// What: Dynamically import page components using React.lazy()
// Why: Reduces the initial main bundle size by splitting each page into its own chunk.
// Impact: Decreases initial TTI (Time to Interactive) by preventing the loading of unnecessary page code upfront.
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const References = lazy(() => import('./pages/References').then(module => ({ default: module.References })));
const Impressum = lazy(() => import('./pages/Legal').then(module => ({ default: module.Impressum })));
const Datenschutz = lazy(() => import('./pages/Legal').then(module => ({ default: module.Datenschutz })));
const AGB = lazy(() => import('./pages/Legal').then(module => ({ default: module.AGB })));
const NotFound = lazy(() => import('./NotFound'));

// Temporary placeholders for sub-services and career
const Career = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Karriere - In Kürze mehr...</div></Layout>;
const Bath = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Bad & Sanitär - In Kürze mehr...</div></Layout>;
const Heating = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Heizung & Energie - In Kürze mehr...</div></Layout>;
const AC = () => <Layout isStatic={true}><div className="pt-40 p-10 text-center text-primary h-[80vh] italic font-display text-4xl">Klima & Lüftung - In Kürze mehr...</div></Layout>;

export default function App() {
  return (
    <Router basename="/kirschbaum1site">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-gray-50 text-primary font-display text-2xl">Laden...</div>}>
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
