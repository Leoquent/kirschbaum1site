import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
import { LOCATION, CONTACT } from '@/constants';
import { Link } from 'react-router-dom';

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
                        src="/heroimage.png"
                        alt="Handwerker bei der Arbeit - Meisterbetrieb Kirschbaum Düsseldorf"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            <span>Seit 1890 · Meisterbetrieb in 5. Generation</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight leading-[0.95]">
                            <span className="block md:inline">Ihr Bad. </span>
                            <span className="block md:inline">Ihr Zuhause. </span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Unser Handwerk.</span>
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
                                img: "/badsanitaer.png",
                                path: "/leistungen/bad"
                            },
                            {
                                title: "Heizung & Energie",
                                desc: "Zukunftssichere Heizsysteme: Wärmepumpen, Solarthermie oder Brennwerttechnik. Inklusive Förderberatung – wir kümmern uns um Ihre Fördermittel.",
                                icon: <Flame className="w-8 h-8" />,
                                img: "/heizungenergie.png",
                                path: "/leistungen/heizung"
                            },
                            {
                                title: "Klima & Lüftung",
                                desc: "Perfektes Raumklima zu jeder Jahreszeit. Beratung, Montage und Wartung aus einer Hand – für Ihr Zuhause und Gewerbe.",
                                icon: <Wind className="w-8 h-8" />,
                                img: "/klimalueftung.png",
                                path: "/leistungen/klima"
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-2xl"
                            >
                                <Link to={service.path} className="block cursor-pointer">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-accent shadow-lg -mt-16 relative z-10">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                                        <p className="text-primary/80 leading-relaxed">{service.desc}</p>
                                        <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all pt-2">
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

                    <div className="relative overflow-hidden px-4 md:px-0">
                        <motion.div
                            className="flex gap-8"
                            animate={{
                                x: [0, -100 * 3 + '%'], // Simplified infinite scroll logic placeholder or standard carousel
                            }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            style={{ width: 'max-content' }}
                        >
                            {[...Array(2)].flatMap(() => [
                                { text: "Komplette Badsanierung durchgeführt. Von Beratung bis Fertigstellung top. Sehr sauber gearbeitet.", name: "Thomas M.", project: "Badsanierung" },
                                { text: "Schneller Service bei Heizungswartung. Team freundlich und kompetent. Gerne wieder!", name: "Sandra K.", project: "Heizungswartung" },
                                { text: "Notdienst am Wochenende – innerhalb einer Stunde war jemand da. Problem sofort gelöst.", name: "Michael R.", project: "Notdienst" },
                                { text: "Sehr professionelle Beratung bei der neuen Wärmepumpe. Die Montage war pünktlich und sauber.", name: "Lars H.", project: "Heizungsbau" },
                                { text: "Top Service, super freundlich am Telefon und die Handwerker vor Ort wussten genau was sie tun.", name: "Melanie S.", project: "Sanitärtechnik" }
                            ]).map((review, i) => (
                                <div
                                    key={`${review.name}-${i}`}
                                    className="w-[300px] md:w-[400px] bg-gray-50 rounded-2xl p-8 border border-gray-100 shrink-0"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-primary/80 leading-relaxed mb-6 italic text-sm">"{review.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-primary text-xs">{review.name}</div>
                                            <div className="text-primary/50 text-[10px]">{review.project}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                            <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-primary/40 pointer-events-auto cursor-pointer hover:bg-white transition-colors">
                                <ChevronLeft className="w-6 h-6" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-primary/40 pointer-events-auto cursor-pointer hover:bg-white transition-colors">
                                <ChevronRight className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="https://maps.app.goo.gl/Veu4TMt3dUhRbAmH6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all text-lg">
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
