import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, animate } from 'motion/react';
import {
    ShieldCheck,
    Droplets,
    Flame,
    Wind,
    ChevronRight,
    CheckCircle2,
    Star,
    ArrowRight,
    MessageSquareQuote,
    ClipboardCheck,
    Wrench,
    Handshake,
    Phone,
    Mail,
    ChevronLeft
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { TrustLogos } from '@/components/sections/TrustLogos';
import { Quiz } from '@/components/sections/Quiz';
import { AnimatedNumber } from '@/components/utils/AnimatedNumber';
import { COMPANY_NAME, LOCATION, CONTACT, GOOGLE_MAPS_LINK, getAssetPath } from '@/constants';
import { Link } from 'react-router-dom';

const ReviewSlider = () => {
    // Curated list of 8 diverse real reviews EXCLUSIVELY from Google
    const reviews = [
        {
            text: "Woran erkennt man die richtig guten Handwerker? Wenn Sie auch 'in der Not' bereit stehen. Heizung am Wochenende ausgefallen... und wer kommt am gleichen Tag? Die Jungs von Kirschbaum. Freundlich, schnell, kompetent!",
            name: "Dominik Meyenburg",
            project: "Notdienst",
            rating: 5
        },
        {
            text: "Toller Service bei der Wartung unserer Heizungsanlage. Das Team war professionell, pünktlich und sehr gründlich. Unsere Wärmepumpe wurde effizienter eingestellt. Wir werden die Firma definitiv wieder beauftragen.",
            name: "Naji Almahmoud",
            project: "Wärmepumpen",
            rating: 5
        },
        {
            text: "Ein dickes Dankeschön für die schnelle und sehr gute Arbeit. Mitarbeiter zuverlässig und stets freundlich. Faire Preise. Wartung und Reparatur von Weishaupt. Als Kunde fühlt man sich gut betreut.",
            name: "Elke Reggentin",
            project: "Reparatur",
            rating: 5
        },
        {
            text: "Absolut empfehlenswert! Die Sanierung des Bades in unserer Ferienwohnung hat, trotz der weiten Entfernung und des engen Zeitplanes, hervorragend geklappt! Sehr saubere Arbeit.",
            name: "P. Wohlschläger",
            project: "Badsanierung",
            rating: 5
        },
        {
            text: "Kirschbaum-Techniker haben heute unsere Fußbodenheizung wegen unzulänglicher Wärmeabgabe überprüft und Problem zügig gelöst! Machen auch für Laien einen absolut professionellen Eindruck.",
            name: "Manfred Schneider",
            project: "Fußbodenheizung",
            rating: 5
        },
        {
            text: "Ich kann die Firma Kirschbaum wirklich nur weiterempfehlen. Alle Arbeiten waren bisher immer tadellos in Ordnung. In 'Notfällen' wird einem wirklich sehr schnell geholfen.",
            name: "Sandra Esser",
            project: "Notfall-Service",
            rating: 5
        },
        {
            text: "Sanitärunternehmen meines Vertrauens seit 2017. Tolles Team. Immer hilfsbereit, zuverlässig, kompetent und schnell. Kann die Firma unbedingt empfehlen.",
            name: "Heike Hassel",
            project: "Sanitärtechnik",
            rating: 5
        },
        {
            text: "Meine Gastherme wurde von der Fa. Kirschbaum gewartet, die ich nur weiter empfehlen kann!! Eine nette Ansprechpartnerin bei der Terminplanung am Telefon war bereits sehr freundlich.",
            name: "Lu Neu",
            project: "Heizungswartung",
            rating: 5
        }
    ];

    // Clone for infinite effect
    const displayReviews = [...reviews, ...reviews, ...reviews];
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [cardWidth, setCardWidth] = useState(482); // Default Desktop: Card(450) + Gap(32)

    useEffect(() => {
        const calculateWidth = () => {
            const width = window.innerWidth < 768 ? 332 : 482;
            setCardWidth(width);
            // Center the "middle" set of reviews initially
            x.set(-width * reviews.length);
        };
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, [reviews.length, x]);

    // Handle Infinite Jump
    useEffect(() => {
        const threshold = cardWidth * reviews.length;
        const unsubscribe = x.on("change", (latest) => {
            if (latest <= -threshold * 2) {
                x.set(latest + threshold);
            } else if (latest >= -threshold * 0.5) {
                x.set(latest - threshold);
            }
        });
        return () => unsubscribe();
    }, [cardWidth, reviews.length, x]);

    const handleNext = () => {
        const currentX = x.get();
        animate(x, currentX - cardWidth, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
    };

    const handlePrev = () => {
        const currentX = x.get();
        animate(x, currentX + cardWidth, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
    };

    return (
        <div className="relative pt-10 pb-16">
            <div className="relative group/slider overflow-visible">
                {/* Navigation Arrows - Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-4 z-20">
                    <button
                        onClick={handlePrev}
                        className="p-5 rounded-full border border-primary/10 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white transition-all cursor-pointer group"
                        aria-label="Vorherige Rezension"
                    >
                        <ChevronLeft className="w-6 h-6 text-primary group-hover:text-accent group-hover:-translate-x-0.5 transition-all" />
                    </button>
                </div>
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                    <button
                        onClick={handleNext}
                        className="p-5 rounded-full border border-primary/10 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white transition-all cursor-pointer group"
                        aria-label="Nächste Rezension"
                    >
                        <ChevronRight className="w-6 h-6 text-primary group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </button>
                </div>

                {/* Soft fade edges */}
                <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden px-4 md:px-0" ref={containerRef}>
                    <motion.div
                        drag="x"
                        style={{ x }}
                        className="flex gap-8 cursor-grab active:cursor-grabbing"
                        dragElastic={0.05}
                    >
                        {displayReviews.map((review, i) => (
                            <motion.div
                                key={`${review.name}-${i}`}
                                className="w-[300px] md:w-[450px] bg-white rounded-3xl p-8 border border-gray-100 shrink-0 hover:border-accent/30 transition-all group shadow-sm hover:shadow-xl relative overflow-hidden"
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star
                                            key={j}
                                            className={`w-4 h-4 ${j < (review.rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-primary/90 leading-relaxed mb-8 italic text-lg font-light line-clamp-4">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <div className="font-bold text-primary text-base">{review.name}</div>
                                        <div className="text-primary/40 text-xs uppercase tracking-widest font-bold">{review.project}</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale group-hover:grayscale-0 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Mobile Navigation Only */}
            <div className="flex lg:hidden justify-center gap-6 mt-12 px-4">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-xl border border-primary/10 bg-white shadow-sm transition-all"
                >
                    <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                    onClick={handleNext}
                    className="p-4 rounded-xl border border-primary/10 bg-white shadow-sm transition-all"
                >
                    <ChevronRight className="w-5 h-5 text-primary" />
                </button>
            </div>
        </div>
    );
};

export const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Layout heroScrollProgress={scrollYProgress}>
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img
                        src={getAssetPath("/heroimage.png")}
                        alt={`Handwerker bei der Arbeit - Meisterbetrieb ${COMPANY_NAME} ${LOCATION}`}
                        className="w-full h-full object-cover opacity-80"
                        loading="eager"
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
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                            <span>Meisterbetrieb seit 1890</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight leading-[0.9] md:leading-[0.95]">
                            <span className="block">Ihr Bad.</span>
                            <span className="block">Ihr Zuhause.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Unser Handwerk.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
                            Badplanung, Heizsysteme und Klimatechnik – von Meisterhand in {LOCATION}. Seit 1890.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
                            <Link to="/kontakt" className="w-full md:w-auto">
                                <button className="w-full bg-accent text-white px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl cursor-pointer">
                                    Projekt anfragen
                                </button>
                            </Link>
                            <Link to="/leistungen" className="w-full md:w-auto">
                                <button className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                                    Unsere Leistungen
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-primary/60"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-text-primary/40 to-transparent" />
                </motion.div>
            </section>

            {/* Trust & Logos Section */}
            <section className="py-10 bg-white overflow-hidden border-b border-gray-100">
                <TrustLogos />
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
                            { value: 365, suffix: "", label: "Tage im Einsatz" },
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
            </section >

            {/* Services Section */}
            < section id="leistungen" className="py-32 bg-white" >
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
                                img: getAssetPath("/badsanitaer.png"),
                                path: "/leistungen/bad"
                            },
                            {
                                title: "Heizung & Energie",
                                desc: "Zukunftssichere Heizsysteme: Wärmepumpen, Solarthermie oder Brennwerttechnik. Inklusive Förderberatung – wir kümmern uns um Ihre Fördermittel.",
                                icon: <Flame className="w-8 h-8" />,
                                img: getAssetPath("/heizungenergie.png"),
                                path: "/leistungen/heizung"
                            },
                            {
                                title: "Klima & Lüftung",
                                desc: "Perfektes Raumklima zu jeder Jahreszeit. Beratung, Montage und Wartung aus einer Hand – für Ihr Zuhause und Gewerbe.",
                                icon: <Wind className="w-8 h-8" />,
                                img: getAssetPath("/klimalueftung.png"),
                                path: "/leistungen/klima"
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-2xl flex flex-col"
                            >
                                <Link to={service.path} className="flex flex-col h-full cursor-pointer">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-accent shadow-lg -mt-16 relative z-10 mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                        <p className="text-primary/80 leading-relaxed mb-6">{service.desc}</p>
                                        <div className="mt-auto flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all pt-2">
                                            Mehr erfahren <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Process Section */}
            < section className="py-32 bg-gray-50 relative overflow-hidden" >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center space-y-4 mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                            Unser Prozess
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">So arbeiten wir</h2>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">Transparent, zuverlässig und immer an Ihrer Seite.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: 1, title: "Beratung", desc: "Persönliches Erstgespräch – wir hören zu.", icon: <MessageSquareQuote className="w-7 h-7" /> },
                            { step: 2, title: "Planung", desc: "Individuelle Lösung & Förderberatung.", icon: <ClipboardCheck className="w-7 h-7" /> },
                            { step: 3, title: "Umsetzung", desc: "Fachgerechte Ausführung durch unser Team.", icon: <Wrench className="w-7 h-7" /> },
                            { step: 4, title: "Übergabe", desc: "Saubere Abnahme & Einweisung.", icon: <Handshake className="w-7 h-7" /> },
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
            </section >

            {/* Google Reviews Section */}
            < section className="py-24 bg-white border-t border-gray-100" >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center space-y-8 mb-20">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
                            <div className="flex items-center gap-1.5">
                                <span className="text-primary font-bold text-sm">4.7</span>
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </div>
                            <div className="w-px h-4 bg-primary/20" />
                            <span className="text-primary text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                                500+ Projekte
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">Das sagen unsere Kunden</h2>
                    </div>

                    <ReviewSlider />


                    <div className="text-center mt-12">
                        <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all text-lg">
                            Alle Rezensionen auf Google ansehen <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </section >

            {/* Call to Action */}
            < section className="py-32 bg-primary relative overflow-hidden" >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight leading-none">
                        Bereit für Ihr <br /> nächstes Projekt?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href={`tel:${CONTACT.phoneLink}`} className="flex items-center gap-3 text-white text-2xl font-bold hover:text-accent transition-colors">
                            <Phone className="w-8 h-8" /> {CONTACT.phone}
                        </a>
                        <div className="hidden md:block w-px h-12 bg-white/20" />
                        <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white text-2xl font-bold hover:text-accent transition-colors">
                            <Mail className="w-8 h-8" /> {CONTACT.email}
                        </a>
                    </div>
                    <Link to="/kontakt">
                        <button className="bg-accent text-white px-12 py-6 rounded-lg font-bold text-xl hover:scale-105 active:scale-95 transition-transform shadow-2xl cursor-pointer">
                            Jetzt Termin vereinbaren
                        </button>
                    </Link>
                </div>
            </section >
        </Layout >
    );
};
