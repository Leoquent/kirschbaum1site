import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedNumber } from '@/components/utils/AnimatedNumber';
import { LOCATION } from '@/constants';
import { History, Users, Heart, Target } from 'lucide-react';

export const About = () => {
    return (
        <Layout isStatic={true}>
            <section className="pt-40 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4 mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary tracking-tight">Tradition trifft Moderne</h1>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            Seit 1890 ist der Name Kirschbaum in {LOCATION} ein Synonym für erstklassiges Handwerk und zuverlässigen Service.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest">
                                Unsere Geschichte
                            </div>
                            <h2 className="text-4xl font-display font-bold text-primary">Vom Kupferschmied zum High-End Planer</h2>
                            <div className="space-y-6 text-primary/80 leading-relaxed text-lg">
                                <p>
                                    Was vor über 130 Jahren als kleiner Handwerksbetrieb begann, hat sich über fünf Generationen zu einem der führenden SHK-Meisterbetriebe in Düsseldorf entwickelt.
                                </p>
                                <p>
                                    Heute vereinen wir dieses jahrzehntelange Wissen mit modernster Technik, digitalen Planungsprozessen und nachhaltigen Energielösungen.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="space-y-2">
                                    <div className="text-4xl font-display font-bold text-primary">1890</div>
                                    <div className="text-sm text-primary/50 uppercase font-bold tracking-widest">Gegründet</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-display font-bold text-primary">5.</div>
                                    <div className="text-sm text-primary/50 uppercase font-bold tracking-widest">Generation</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl bg-gray-100 overflow-hidden shadow-2xl">
                                <img src="/heroimage.png" alt="Kirschbaum Historie" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-gray-100 max-w-[280px]">
                                <p className="text-primary font-medium italic">
                                    "Handwerk ist für uns mehr als nur Arbeit. Es ist eine Verpflichtung gegenüber unseren Kunden und unserer Tradition."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Verlässlichkeit", desc: "Ein Wort ist bei uns noch ein Wort. Wir halten Termine und Zusagen ein.", icon: <Target className="w-8 h-8" /> },
                            { title: "Teamgeist", desc: "Unsere Mitarbeiter sind das Herzstück. Wir fördern und fordern – füreinander.", icon: <Users className="w-8 h-8" /> },
                            { title: "Leidenschaft", desc: "Wir lieben technische Herausforderungen und perfekte Ergebnisse.", icon: <Heart className="w-8 h-8" /> },
                        ].map((val, i) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg mx-auto mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary">{val.title}</h3>
                                <p className="text-primary/70 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};
