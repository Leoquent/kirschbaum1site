/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import { 
  Droplets, 
  Flame, 
  Wind, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Calculator
} from 'lucide-react';
import { cn } from './lib/utils';
import { COLORS, COMPANY_NAME, LOCATION } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Using the description from the image */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center overflow-hidden">
               <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-primary" />
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C0C0C0]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-4 bg-primary -rotate-12 transform translate-y-1" />
                  </div>
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-widest text-text-primary/60">Heizung, Bad & Klima</span>
              <span className="text-2xl font-bold tracking-tighter text-primary leading-none">{COMPANY_NAME.toLowerCase()}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Leistungen', 'Über uns', 'Referenzen', 'Karriere'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/20">
            Kontakt aufnehmen
          </button>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Leistungen', 'Über uns', 'Referenzen', 'Karriere'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-medium text-text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold">
              Kontakt aufnehmen
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});

  const steps = [
    {
      question: "Was planen Sie als Nächstes?",
      options: [
        { label: "Neues Traumbad", icon: <Droplets className="w-6 h-6" /> },
        { label: "Moderne Heizung", icon: <Flame className="w-6 h-6" /> },
        { label: "Klimatisierung", icon: <Wind className="w-6 h-6" /> },
        { label: "Wartung & Service", icon: <ShieldCheck className="w-6 h-6" /> }
      ]
    },
    {
      question: "Wie ist der aktuelle Stand?",
      options: [
        { label: "Neubau", icon: <Sparkles className="w-6 h-6" /> },
        { label: "Sanierung", icon: <Award className="w-6 h-6" /> },
        { label: "Akuter Defekt", icon: <Phone className="w-6 h-6" /> },
        { label: "Nur Beratung", icon: <Calculator className="w-6 h-6" /> }
      ]
    },
    {
      question: "Wann soll es losgehen?",
      options: [
        { label: "Sofort", icon: <ArrowRight className="w-6 h-6" /> },
        { label: "In 3-6 Monaten", icon: <ArrowRight className="w-6 h-6" /> },
        { label: "Nächstes Jahr", icon: <ArrowRight className="w-6 h-6" /> },
        { label: "Noch offen", icon: <ArrowRight className="w-6 h-6" /> }
      ]
    }
  ];

  const handleSelect = (option: string) => {
    setSelections({ ...selections, [step]: option });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(steps.length); // Completion
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${((step) / steps.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Schritt {step + 1} von {steps.length}</span>
              <h3 className="text-3xl font-display font-bold text-primary tracking-tight">{steps[step].question}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.label)}
                  className="flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-50 hover:border-primary hover:bg-primary/5 transition-all text-left group"
                >
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    {opt.icon}
                  </div>
                  <span className="font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-12"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-display font-bold text-primary">Fast geschafft!</h3>
              <p className="text-text-primary text-lg max-w-md mx-auto">
                Wir haben Ihre Auswahl erhalten. Hinterlassen Sie uns Ihre Kontaktdaten für ein unverbindliches Erstgespräch.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <input type="text" placeholder="Name" className="px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
              <input type="email" placeholder="E-Mail Adresse" className="px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
              <button className="bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-xl shadow-primary/20">
                Jetzt Angebot anfordern
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/luxury-bathroom/1920/1080?blur=1" 
            alt="Luxusbad" 
            className="w-full h-full object-cover opacity-60 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Meisterbetrieb seit über 25 Jahren</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight leading-[0.95]">
              Handwerkliche <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Präzision</span> für Ihr Zuhause.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
              Exklusive Badplanung, hocheffiziente Heizsysteme und intelligentes Klima – direkt in {LOCATION}.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full md:w-auto bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                Projekt anfragen
              </button>
              <button className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Unsere Leistungen
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Trust & Logos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Mocking Guild Logos */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">SHK</span>
                <span className="text-[10px] uppercase tracking-tighter">Innungsfachbetrieb</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">MEISTER</span>
                <span className="text-[10px] uppercase tracking-tighter">Handwerkskammer</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">TÜV</span>
                <span className="text-[10px] uppercase tracking-tighter">Zertifiziert</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Flame className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">VIESSMANN</span>
                <span className="text-[10px] uppercase tracking-tighter">Premium Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Quiz Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              Lead-Magnet
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight tracking-tight">
              Planen Sie Ihr <br /> Projekt in 60 Sekunden.
            </h2>
            <p className="text-xl text-text-primary/80 leading-relaxed font-light">
              Nutzen Sie unseren interaktiven Planer, um direkt eine erste Einschätzung und Förderberatung für Ihr neues Bad oder Ihre Heizung zu erhalten.
            </p>
            
            <ul className="space-y-4">
              {[
                "Individuelle Förderberatung inklusive",
                "Direkter Draht zum Meister",
                "Unverbindlich & Kostenfrei"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-medium text-text-primary">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quiz />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">Unsere Kompetenzen</h2>
            <p className="text-xl text-text-primary/60 max-w-2xl mx-auto">Vom tropfenden Wasserhahn bis zum komplexen Smart-Home-Heizsystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bad & Sanitär",
                desc: "Wir verwandeln Ihr Badezimmer in eine Wellness-Oase. Von der 3D-Planung bis zur schlüsselfertigen Übergabe.",
                icon: <Droplets className="w-8 h-8" />,
                img: "https://picsum.photos/seed/bath/800/600"
              },
              {
                title: "Heizung & Energie",
                desc: "Zukunftssichere Heizsysteme: Wärmepumpen, Solarthermie oder klassische Brennwerttechnik – effizient und nachhaltig.",
                icon: <Flame className="w-8 h-8" />,
                img: "https://picsum.photos/seed/heat/800/600"
              },
              {
                title: "Klima & Lüftung",
                desc: "Perfektes Raumklima zu jeder Jahreszeit. Intelligente Lüftungskonzepte für gesundes Wohnen und Arbeiten.",
                icon: <Wind className="w-8 h-8" />,
                img: "https://picsum.photos/seed/air/800/600"
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg -mt-16 relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  <p className="text-text-primary/80 leading-relaxed">{service.desc}</p>
                  <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all pt-2">
                    Mehr erfahren <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight leading-none">
            Bereit für Ihr <br /> nächstes Projekt?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Zuhause schöner, effizienter und komfortabler machen.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:+49211000000" className="flex items-center gap-3 text-white text-2xl font-bold hover:text-accent transition-colors">
              <Phone className="w-8 h-8" /> 0211 / 000 000
            </a>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <a href="mailto:info@kirschbaum-shk.de" className="flex items-center gap-3 text-white text-2xl font-bold hover:text-accent transition-colors">
              <Mail className="w-8 h-8" /> info@kirschbaum-shk.de
            </a>
          </div>
          <button className="bg-white text-primary px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
            Jetzt Termin vereinbaren
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-primary" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C0C0C0]" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-primary">{COMPANY_NAME.toLowerCase()}</span>
            </div>
            <p className="text-text-primary/60 leading-relaxed">
              Ihr zertifizierter Meisterbetrieb für Sanitär, Heizung und Klima in Düsseldorf und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Leistungen</h4>
            <ul className="space-y-4 text-text-primary/60">
              <li><a href="#" className="hover:text-primary transition-colors">Badplanung</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Heizungswartung</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wärmepumpen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Klimatechnik</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Kontakt</h4>
            <ul className="space-y-4 text-text-primary/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>Musterstraße 123<br />40210 Düsseldorf</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>0211 / 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <span>info@kirschbaum-shk.de</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-text-primary/60">
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center text-text-primary/40 text-sm">
          © {new Date().getFullYear()} {COMPANY_NAME} SHK {LOCATION}. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
