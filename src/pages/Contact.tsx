import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout } from '@/components/layout/Layout';
import { CONTACT } from '@/constants';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Layout isStatic={true}>
            <section className="pt-40 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-display font-bold text-primary tracking-tight">Kontakt</h1>
                                <p className="text-xl text-primary/60 leading-relaxed max-w-lg">
                                    Haben Sie ein Projekt im Kopf oder brauchen Sie schnelle Hilfe? Wir freuen uns auf Ihre Nachricht.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-1">Telefon</div>
                                        <a href={`tel:${CONTACT.phoneLink}`} className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                                            {CONTACT.phone}
                                        </a>
                                        <p className="text-primary/50 text-sm mt-1">Mo-Fr: 08:00 - 17:00 Uhr</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-1">E-Mail</div>
                                        <a href={`mailto:${CONTACT.email}`} className="text-2xl font-bold text-primary hover:text-accent transition-colors underline decoration-primary/20 underline-offset-8">
                                            {CONTACT.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-1">Standort</div>
                                        <div className="text-2xl font-bold text-primary">
                                            {CONTACT.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-bold text-primary">Nachricht gesendet!</h3>
                                        <p className="text-primary/60">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-accent font-bold hover:underline"
                                    >
                                        Eine weitere Nachricht senden
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/60 ml-1">Name</label>
                                            <input required type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none bg-white transition-all" placeholder="Ihr Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/60 ml-1">E-Mail</label>
                                            <input required type="email" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none bg-white transition-all" placeholder="ihre@mail.de" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary/60 ml-1">Betreff</label>
                                        <select className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none bg-white transition-all appearance-none cursor-pointer">
                                            <option>Badsanierung</option>
                                            <option>Heizung & Energie</option>
                                            <option>Wartungsanfrage</option>
                                            <option>Sonstiges</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary/60 ml-1">Nachricht</label>
                                        <textarea required rows={5} className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none bg-white transition-all resize-none" placeholder="Beschreiben Sie Ihr Anliegen..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-primary/95 active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3">
                                        <Send className="w-5 h-5" /> Nachricht abschicken
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
