import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import NotFound from './NotFound';
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
  Calculator,
  Star,
  Wrench,
  ClipboardCheck,
  Handshake,
  MessageSquareQuote
} from 'lucide-react';
import { cn } from './lib/utils';
import { COLORS, COMPANY_NAME, COMPANY_FULL_NAME, LOCATION, CONTACT, SOCIALS } from './constants';

// --- Components ---

const TrustLogos = () => (
  <>
    <div className="flex items-center gap-3 shrink-0">
      <ShieldCheck className="w-10 h-10 text-primary/60" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-none text-primary">SHK</span>
        <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Innungsfachbetrieb</span>
      </div>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <Award className="w-10 h-10 text-primary/60" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-none text-primary">MEISTER</span>
        <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Handwerkskammer</span>
      </div>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <CheckCircle2 className="w-10 h-10 text-primary/60" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-none text-primary">TÜV</span>
        <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Zertifiziert</span>
      </div>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <Flame className="w-10 h-10 text-primary/60" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-none text-primary">VIESSMANN</span>
        <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Premium Partner</span>
      </div>
    </div>
  </>
);

const Navbar = ({ heroScrollProgress }: { heroScrollProgress: any }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth transforms for background opacity and colors
  const backgroundColor = useTransform(heroScrollProgress, [0, 0.2], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);
  const backdropBlur = useTransform(heroScrollProgress, [0, 0.2], ["blur(0px)", "blur(16px)"]);
  const shadowOpacity = useTransform(heroScrollProgress, [0, 0.2], ["0 0 #0000", "0 1px 2px 0 rgb(0 0 0 / 0.05)"]);

  // Transition logo from white (inverted) to original
  const logoInvert = useTransform(heroScrollProgress, [0, 0.15], [1, 0]);
  const logoBrightness = useTransform(heroScrollProgress, [0, 0.15], [0, 1]);

  // Transition links from white to primary
  const linkColor = useTransform(heroScrollProgress, [0, 0.15], ["#FFFFFF", "#2B53A0"]);

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow: shadowOpacity }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Using the description from the image */}
          <div className="flex items-center gap-4">
            <motion.img
              src="/Kirschbaum-Logo_transparent.png"
              alt="Kirschbaum Logo"
              style={{ filter: useTransform(heroScrollProgress, [0, 0.15], ["brightness(0) invert(1)", "brightness(1) invert(0)"]) }}
              className="h-16 w-auto"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {['Leistungen', 'Über uns', 'Referenzen', 'Karriere'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{ color: linkColor }}
                className="text-sm font-bold transition-colors hover:text-accent drop-shadow-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button className="bg-accent text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer whitespace-nowrap">
            Kontakt aufnehmen
          </button>

          <button
            className="md:hidden text-primary p-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
            style={{ color: linkColor }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
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
                className="text-lg font-bold text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold cursor-pointer active:scale-95 transition-transform">
              Kontakt aufnehmen
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
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
    <div className="bg-background rounded-[24px] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-accent"
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
              <span className="text-accent font-bold text-sm uppercase tracking-widest">Schritt {step + 1} von {steps.length}</span>
              <h3 className="text-3xl font-display font-bold text-primary tracking-tight">{steps[step].question}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.label)}
                  className="flex items-center gap-4 p-6 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 transition-all text-left group cursor-pointer active:scale-[0.98]"
                >
                  <div className="p-3 bg-gray-100 text-[#666666] group-hover:bg-accent group-hover:text-white transition-all duration-300 rounded-lg">
                    {opt.icon}
                  </div>
                  <span className="font-semibold text-lg text-primary group-hover:text-accent transition-colors">{opt.label}</span>
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
              <p className="text-xl md:text-2xl text-primary/95 max-w-md mx-auto font-medium">
                Wir haben Ihre Auswahl erhalten. Hinterlassen Sie uns Ihre Kontaktdaten für ein unverbindliches Erstgespräch.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <input type="text" placeholder="Name" className="px-6 py-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent outline-none" />
              <input type="email" placeholder="E-Mail Adresse" className="px-6 py-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent outline-none" />
              <button className="bg-accent text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-accent/20 cursor-pointer">
                Jetzt Angebot anfordern
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
};

const Home = () => {
  const [showEmergencyWidget, setShowEmergencyWidget] = useState(true);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white">


      {/* Floating Notdienst Widget */}
      <AnimatePresence>
        {showEmergencyWidget && (
          <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
            <motion.div
              initial={{ x: "calc(100% - 48px)", opacity: 0 }}
              animate={{ x: "calc(100% - 48px)", opacity: 1 }}
              whileHover={{ x: 0 }}
              exit={{ x: 100, opacity: 0 }}
              className="bg-primary text-white rounded-l-2xl shadow-2xl flex border-l border-t border-b border-white/20 backdrop-blur-md overflow-hidden transition-all duration-300 relative group/widget"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEmergencyWidget(false);
                }}
                className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded-lg opacity-0 group-hover/widget:opacity-100 transition-opacity cursor-pointer z-50"
                title="Schließen"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 py-6 flex flex-col items-center justify-center gap-4 cursor-pointer">
                <Phone className="w-6 h-6 animate-bounce" />
                <span className="[writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-widest text-[10px]">Notdienst</span>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-xl border-l border-white/10 space-y-4 min-w-[240px]">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60">365 Tage Hilfe</div>
                  <div className="text-xl font-bold font-display">24h Notdienst</div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Wasserbruch? Heizungsausfall? <br />Wir sind sofort und immer für Sie da. <br />Auch an Feiertagen.
                </p>
                <a href={`tel:${CONTACT.phoneLink}`} className="flex items-center justify-center gap-3 bg-white text-primary py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  <Phone className="w-5 h-5" /> {CONTACT.phone}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Navbar heroScrollProgress={heroScrollProgress} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/heroimage.png"
            alt="Handwerker bei der Arbeit - Meisterbetrieb Kirschbaum Düsseldorf"
            className="w-full h-full object-cover opacity-80"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white" />
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
              <span>Seit 1890 · Meisterbetrieb in 5. Generation</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight leading-[0.95]">
              Ihr Bad. Ihr Zuhause. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Unser Handwerk.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
              Badplanung, Heizsysteme und Klimatechnik – von Meisterhand in {LOCATION}. Seit 1890.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full md:w-auto bg-accent text-white px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl cursor-pointer">
                Projekt anfragen
              </button>
              <button className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop Layout - static centered grid */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <TrustLogos />
          </div>

          {/* Mobile/Tablet Layout - infinite horizontal scroll */}
          <div className="lg:hidden relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex gap-16 items-center whitespace-nowrap py-4"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <TrustLogos />
              <TrustLogos />
              <TrustLogos />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 130, suffix: "+", label: "Jahre Erfahrung" },
              { value: 5, suffix: ".", label: "Generation" },
              { value: 500, suffix: "+", label: "Zufriedene Kunden" },
              { value: 365, suffix: "", label: "Tage erreichbar" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center space-y-2"
              >
                <div className="text-5xl md:text-7xl font-display font-bold text-white">
                  <AnimatedNumber value={stat.value} />{stat.suffix}
                </div>
                <div className="text-white/60 font-medium text-xs md:text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Quiz Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight tracking-tight">
              Planen Sie Ihr <br /> Projekt in 60 Sekunden.
            </h2>
            <p className="text-xl text-primary/80 leading-relaxed font-light">
              Nutzen Sie unseren interaktiven Planer, um direkt eine erste Einschätzung und Förderberatung für Ihr neues Bad oder Ihre Heizung zu erhalten.
            </p>

            <ul className="space-y-4">
              {[
                "Individuelle Förderberatung inklusive",
                "Direkter Draht zum Meister",
                "Unverbindlich & Kostenfrei"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-medium text-primary">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
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
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">Vom tropfenden Wasserhahn bis zum komplexen Smart-Home-Heizsystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bad & Sanitär",
                desc: "Wir verwandeln Ihr Badezimmer in eine Wellness-Oase. Von der 3D-Planung bis zur schlüsselfertigen Übergabe – zum Festpreis.",
                icon: <Droplets className="w-8 h-8" />,
                img: "/badsanitaer.png"
              },
              {
                title: "Heizung & Energie",
                desc: "Zukunftssichere Heizsysteme: Wärmepumpen, Solarthermie oder Brennwerttechnik. Inklusive Förderberatung – wir kümmern uns um Ihre Fördermittel.",
                icon: <Flame className="w-8 h-8" />,
                img: "/heizungenergie.png"
              },
              {
                title: "Klima & Lüftung",
                desc: "Perfektes Raumklima zu jeder Jahreszeit. Beratung, Montage und Wartung aus einer Hand – für Ihr Zuhause und Gewerbe.",
                icon: <Wind className="w-8 h-8" />,
                img: "/klimalueftung.png"
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 cursor-pointer active:scale-[0.98] transition-all hover:shadow-2xl"
                onClick={() => {
                  const id = service.title.toLowerCase().includes('bad') ? 'badsanierung' :
                    service.title.toLowerCase().includes('heizung') ? 'heizung' : 'notdienst';
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-accent shadow-lg -mt-16 relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  <p className="text-primary/80 leading-relaxed">{service.desc}</p>
                  <button className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all pt-2 cursor-pointer hover:opacity-80 active:scale-95">
                    Mehr erfahren <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              Unser Prozess
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">So arbeiten wir</h2>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">Transparent, zuverlässig und immer an Ihrer Seite – von der ersten Idee bis zur fertigen Umsetzung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Beratung", desc: "Persönliches Erstgespräch – wir hören zu und verstehen Ihre Wünsche.", icon: <MessageSquareQuote className="w-7 h-7" /> },
              { step: 2, title: "Planung", desc: "Individuelle Lösung & Förderberatung. Sie erhalten ein transparentes Festpreisangebot.", icon: <ClipboardCheck className="w-7 h-7" /> },
              { step: 3, title: "Umsetzung", desc: "Fachgerechte Ausführung durch unser eigenes Meister-Team. Sauber und termingerecht.", icon: <Wrench className="w-7 h-7" /> },
              { step: 4, title: "Übergabe", desc: "Saubere Abnahme, Einweisung und langfristige Betreuung durch unseren Kundendienst.", icon: <Handshake className="w-7 h-7" /> },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent" />
                )}
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg mx-auto mb-6 border border-gray-100">
                  {item.icon}
                </div>
                <div className="text-accent font-bold text-sm mb-2">Schritt {item.step}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-widest">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              Google Bewertungen
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">Das sagen unsere Kunden</h2>
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-primary">4.7</span>
              <span className="text-primary/60">/ 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Herr Kirschbaum und sein Team haben unsere komplette Badsanierung durchgeführt. Von der Beratung bis zur Fertigstellung war alles top – sauber, pünktlich und genau wie besprochen. Absolute Empfehlung!",
                name: "Thomas M.",
                project: "Badsanierung"
              },
              {
                text: "Schneller und zuverlässiger Service bei der Heizungswartung. Das Team war freundlich, kompetent und hat alles ordentlich hinterlassen. Wir fühlen uns bestens betreut und kommen immer wieder gerne zurück.",
                name: "Sandra K.",
                project: "Heizungswartung"
              },
              {
                text: "Notdienst am Wochenende – innerhalb einer Stunde war jemand da und hat das Problem schnell gelöst. So einen zuverlässigen Handwerksbetrieb findet man selten. Vielen Dank an das gesamte Team!",
                name: "Michael R.",
                project: "Notdienst"
              }
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-primary/80 leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm">{review.name}</div>
                    <div className="text-primary/50 text-xs">{review.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://maps.app.goo.gl/Veu4TMt3dUhRbAmH6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              Alle Bewertungen auf Google ansehen <ArrowRight className="w-4 h-4" />
            </a>
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
            <a href={`tel:${CONTACT.phoneLink}`} className="flex items-center gap-3 text-white text-2xl font-bold hover:text-accent transition-colors">
              <Phone className="w-8 h-8" /> {CONTACT.phone}
            </a>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white text-2xl font-bold hover:text-accent transition-colors">
              <Mail className="w-8 h-8" /> {CONTACT.email}
            </a>
          </div>
          <button className="bg-accent text-white px-12 py-6 rounded-lg font-bold text-xl hover:scale-105 active:scale-95 transition-transform shadow-2xl cursor-pointer">
            Jetzt Termin vereinbaren
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-gray-100" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/Kirschbaum-Logo_transparent.png"
                alt="Kirschbaum Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary/60 leading-relaxed">
              Ihr zertifizierter Meisterbetrieb für Sanitär, Heizung und Klima in Düsseldorf und Umgebung.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Leistungen</h4>
            <ul className="space-y-4 text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">Badplanung</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Heizungswartung</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Wärmepumpen</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Klimatechnik</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Kontakt</h4>
            <ul className="space-y-4 text-primary/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>{CONTACT.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center text-primary/40 text-sm">
          © {new Date().getFullYear()} {COMPANY_NAME} SHK {LOCATION}. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
