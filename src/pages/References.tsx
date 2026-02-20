import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '@/components/layout/Layout';
import { Star, MapPin, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '@/constants';

const projects = [
    {
        title: "Wellness-Bad Oberkassel",
        category: "Badsanierung",
        location: "Düsseldorf-Oberkassel",
        year: "2025",
        desc: "Komplette Kernsanierung eines 18m² Bads mit bodengleicher Regendusche, freistehender Badewanne und smarter Lichtsteuerung. Materialien: Großformat-Feinsteinzeug und Eichenholz-Waschtischplatte.",
        tags: ["Wellness", "Smart Home", "Barrierefreiheit"],
        img: getAssetPath("/badsanitaer.png"),
        duration: "6 Wochen",
    },
    {
        title: "Wärmepumpensystem Kaiserswerth",
        category: "Heizung & Energie",
        location: "Düsseldorf-Kaiserswerth",
        year: "2024",
        desc: "Umstellung von Öl-Heizung auf Luft-Wasser-Wärmepumpe inkl. Fußbodenheizung-Nachrüstung im Bestandsbau. Förderberatung und KfW-Antragstellung übernommen – über 40% Fördermittel gesichert.",
        tags: ["Wärmepumpe", "Fördermittel", "Energiewende"],
        img: getAssetPath("/heizungenergie.png"),
        duration: "4 Wochen",
    },
    {
        title: "Penthouse-Klimaanlage Medienhafen",
        category: "Klima & Lüftung",
        location: "Düsseldorf-Medienhafen",
        year: "2025",
        desc: "Multi-Split-Klimaanlage für 5-Zimmer-Penthouse mit zentraler Steuerung über Smartphone-App. Flüsterleise Innengeräte und energieeffiziente Inverter-Technologie.",
        tags: ["Multi-Split", "Smart Control", "Energieeffizient"],
        img: getAssetPath("/klimalueftung.png"),
        duration: "3 Wochen",
    },
    {
        title: "Barrierefreies Bad Bilk",
        category: "Badsanierung",
        location: "Düsseldorf-Bilk",
        year: "2024",
        desc: "Altersgerechter Badumbau mit schwellenloser Dusche, Stütz- und Haltegriffen sowie Anti-Rutsch-Fliesen. Volle KfW-Förderung beantragt und bewilligt.",
        tags: ["Barrierefrei", "KfW-Förderung", "Senioren"],
        img: getAssetPath("/badsanitaer.png"),
        duration: "5 Wochen",
    },
    {
        title: "Gasbrennwert-Modernisierung Pempelfort",
        category: "Heizung & Energie",
        location: "Düsseldorf-Pempelfort",
        year: "2024",
        desc: "Austausch einer 25 Jahre alten Heizungsanlage gegen moderne Gasbrennwert-Therme mit hydraulischem Abgleich. Energieeinsparung von ca. 30% erreicht.",
        tags: ["Brennwerttechnik", "Wartung", "Hydraulischer Abgleich"],
        img: getAssetPath("/heizungenergie.png"),
        duration: "2 Wochen",
    },
    {
        title: "Lüftungsanlage Bürokomplex Derendorf",
        category: "Klima & Lüftung",
        location: "Düsseldorf-Derendorf",
        year: "2025",
        desc: "Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung für ein Bürogebäude mit 12 Einheiten. Integration in das bestehende Gebäudeleitsystem.",
        tags: ["Lüftungsanlage", "Wärmerückgewinnung", "Gewerbe"],
        img: getAssetPath("/klimalueftung.png"),
        duration: "8 Wochen",
    },
];

const stats = [
    { value: "500+", label: "Abgeschlossene Projekte" },
    { value: "4.7", label: "Google Bewertung", suffix: "/5" },
    { value: "98%", label: "Weiterempfehlungsrate" },
    { value: "100%", label: "Terminquote" },
];

export const References = () => {
    return (
        <Layout isStatic={true}>
            {/* Hero */}
            <section className="pt-40 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6 mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                            <Award className="w-4 h-4" />
                            Unsere Arbeit spricht für sich
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary tracking-tight">Referenzen</h1>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            Jedes Projekt ist einzigartig – genau wie unsere Kunden. Hier finden Sie eine Auswahl unserer Arbeiten aus Düsseldorf und Umgebung.
                        </p>
                    </motion.div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                                    {stat.value}<span className="text-primary/30 text-xl">{stat.suffix || ''}</span>
                                </div>
                                <div className="text-sm text-primary/50 font-medium mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 2) * 0.15 }}
                                className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary/50">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary/50">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {project.location}
                                        <span className="mx-1">·</span>
                                        Dauer: {project.duration}
                                    </div>
                                    <p className="text-primary/70 leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-primary/5 rounded-full text-xs font-bold text-primary/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-widest">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            Kundenstimmen
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">Das sagen unsere Kunden</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { text: "Komplette Badsanierung – von der 3D-Planung bis zur letzten Fuge alles top. Das Team war pünktlich, sauber und hat unser Traumebad Realität werden lassen.", name: "Thomas M.", project: "Badsanierung Oberkassel", stars: 5 },
                            { text: "Heizungswartung und Beratung zum Wärmepumpen-Umstieg. Herr Kirschbaum hat sich persönlich Zeit genommen und alles verständlich erklärt. Absolute Empfehlung!", name: "Sandra K.", project: "Heizungsberatung", stars: 5 },
                            { text: "Notdienst am Sonntagabend – innerhalb von 45 Minuten war der Techniker da und hat den Rohrbruch professionell behoben. Dafür gibt es die volle Punktzahl.", name: "Michael R.", project: "24h Notdienst", stars: 5 },
                            { text: "Wir haben unsere Klimaanlage installieren lassen. Super leise, perfekte Kühlung. Die Jungs haben sogar die Kabelführung unsichtbar verlegt – echte Profis.", name: "Anna-Lena S.", project: "Klimaanlage Penthouse", stars: 5 },
                            { text: "Barrierefreier Badumbau für meine Eltern. Kirschbaum hat sich um die KfW-Förderung gekümmert und wir haben über 6.000€ Zuschuss bekommen. Perfekter Service.", name: "Jonas W.", project: "Barrierefreies Bad", stars: 5 },
                            { text: "Nach 20 Jahren endlich eine neue Heizung. Der hydraulische Abgleich hat dafür gesorgt, dass jetzt alle Heizkörper gleichmäßig warm werden. Hätten wir viel früher machen sollen!", name: "Petra L.", project: "Heizungstausch", stars: 5 },
                        ].map((review, i) => (
                            <motion.div
                                key={review.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.stars)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-primary/80 leading-relaxed mb-6">"{review.text}"</p>
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
                        <a href="https://maps.app.goo.gl/Veu4TMt3dUhRbAmH6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all text-lg">
                            Alle Bewertungen auf Google ansehen <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                        Ihr Projekt könnte das nächste sein.
                    </h2>
                    <p className="text-xl text-white/60">
                        Lassen Sie sich unverbindlich beraten – wir freuen uns auf Ihre Vision.
                    </p>
                    <Link to="/kontakt">
                        <button className="bg-accent text-white px-12 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl cursor-pointer mt-4">
                            Projekt anfragen
                        </button>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};
