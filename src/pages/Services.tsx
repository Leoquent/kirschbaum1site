import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '@/components/layout/Layout';
import { Droplets, Flame, Wind, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
    const services = [
        {
            title: "Bad & Sanitär",
            desc: "Von der ersten 3D-Planung bis zum fertigen Traumbad. Wir koordinieren alle Gewerke für Sie.",
            icon: <Droplets className="w-12 h-12" />,
            img: "/badsanitaer.png",
            path: "/leistungen/bad",
            tags: ["Badsanierung", "Barrierefrei", "3D-Planung", "Wellness"]
        },
        {
            title: "Heizung & Energie",
            desc: "Nachhaltige Heizlösungen für die Zukunft. Wärmepumpen, Wartung und Notdienst.",
            icon: <Flame className="w-12 h-12" />,
            img: "/heizungenergie.png",
            path: "/leistungen/heizung",
            tags: ["Wärmepumpen", "Gasthermen", "Wartung", "Notdienst"]
        },
        {
            title: "Klima & Lüftung",
            desc: "Perfektes Klima in jedem Raum. Smarte Lüftungssysteme und moderne Klimatisierung.",
            icon: <Wind className="w-12 h-12" />,
            img: "/klimalueftung.png",
            path: "/leistungen/klima",
            tags: ["Klimaanlagen", "Wohnraumlüftung", "Luftreinigung"]
        }
    ];

    return (
        <Layout isStatic={true}>
            <section className="pt-40 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4 mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary tracking-tight">Unsere Leistungen</h1>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            Modernes Handwerk für Ihr Zuhause. Entdecken Sie unsere Kernkompetenzen.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                                            {service.icon}
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-display font-bold text-primary">{service.title}</h2>
                                            <p className="text-xl text-primary/70 leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="px-4 py-1.5 bg-primary/5 rounded-full text-sm font-bold text-primary/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={service.path}>
                                            <button className="flex items-center gap-3 text-accent font-bold text-lg group-hover:gap-5 transition-all">
                                                Details ansehen <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};
