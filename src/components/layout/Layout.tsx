import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CONTACT } from '@/constants';

interface LayoutProps {
    children: React.ReactNode;
    heroScrollProgress?: any;
    isStatic?: boolean;
}

export const Layout = ({ children, heroScrollProgress, isStatic = false }: LayoutProps) => {
    const [showEmergencyWidget, setShowEmergencyWidget] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowEmergencyWidget(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar heroScrollProgress={heroScrollProgress} isStatic={isStatic} />

            <main>{children}</main>

            <Footer />

            {/* Emergency Widget */}
            <AnimatePresence>
                {showEmergencyWidget && (
                    <div className="fixed bottom-8 right-8 z-40 group/widget">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            className="flex items-stretch bg-primary text-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
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
        </div>
    );
};
