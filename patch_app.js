const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
`// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { References } from './pages/References';
import { Impressum, Datenschutz, AGB } from './pages/Legal';
import NotFound from './NotFound';`,
`// Pages - Lazy loaded for better performance (code splitting)
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Services = React.lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const References = React.lazy(() => import('./pages/References').then(m => ({ default: m.References })));
const Impressum = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Impressum })));
const Datenschutz = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Datenschutz })));
const AGB = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.AGB })));
const NotFound = React.lazy(() => import('./NotFound'));`
);

content = content.replace(
  `import React from 'react';`,
  `import React, { Suspense } from 'react';`
);

content = content.replace(
  `<Routes>`,
  `{/* Suspense boundary added to handle loading states of lazy-loaded routes */}\n      <Suspense fallback={<div className="flex h-screen items-center justify-center">Lade...</div>}>\n        <Routes>`
);

content = content.replace(
  `</Routes>`,
  `</Routes>\n      </Suspense>`
);

fs.writeFileSync('src/App.tsx', content);
