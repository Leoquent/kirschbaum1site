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
    const [isExpanded, setIsExpanded] = useState(false);

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
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-32 right-0 z-40 flex items-stretch"
                    >
                        <div className="flex items-stretch bg-primary text-white rounded-l-2xl shadow-2xl overflow-hidden border-y border-l border-white/20">
                            {/* Toggle Strip - Always on the edge */}
                            <div
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-12 py-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <Phone className={`w-5 h-5 ${isExpanded ? '' : 'animate-bounce'}`} />
                                <span className="[writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-[0.2em] text-[11px] whitespace-nowrap">
                                    {isExpanded ? 'Einklappen' : 'Notdienst'}
                                </span>
                            </div>

                            {/* Content Section - Slides out from the right edge to the left */}
                            <motion.div
                                initial={false}
                                animate={{
                                    width: isExpanded ? 'auto' : 0,
                                    opacity: isExpanded ? 1 : 0
                                }}
                                className="overflow-hidden flex bg-white/10 backdrop-blur-xl border-l border-white/10 relative"
                            >
                                <div className="p-6 space-y-4 min-w-[260px] relative">
                                    {/* Close Button (Completely hide) */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowEmergencyWidget(false);
                                        }}
                                        className="absolute top-2 right-2 p-1 bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
                                        title="Ganz schließen"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    <div className="space-y-1">
                                        <div className="text-xl font-bold font-display leading-none">365 Tage Hilfe</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Notdienst von 06:00 - 22:00 Uhr</div>
                                    </div>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        Wasserbruch? Heizungsausfall? <br />Wir sind für Sie da. <br />Auch an Feiertagen.
                                    </p>
                                    <a href={`tel:${CONTACT.phoneLink}`} className="flex items-center justify-center gap-3 bg-white text-primary py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm">
                                        <Phone className="w-4 h-4" strokeWidth={3} /> {CONTACT.phone}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
