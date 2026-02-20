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
    const [isExpanded, setIsExpanded] = useState(true);

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
                    <div className="fixed bottom-8 right-8 z-40 group/widget flex items-end">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            className="flex items-stretch bg-primary text-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                        >
                            {/* Toggle Strip */}
                            <div
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-12 py-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5 transition-colors border-r border-white/10"
                            >
                                <Phone className={`w-6 h-6 ${isExpanded ? '' : 'animate-bounce'}`} />
                                <span className="[writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-widest text-[10px]">
                                    {isExpanded ? 'Schließen' : 'Notdienst'}
                                </span>
                            </div>

                            {/* Content Section */}
                            <motion.div
                                initial={false}
                                animate={{
                                    width: isExpanded ? 'auto' : 0,
                                    opacity: isExpanded ? 1 : 0
                                }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden bg-white/10 backdrop-blur-xl flex"
                            >
                                <div className="p-6 space-y-4 min-w-[240px]">
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
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
