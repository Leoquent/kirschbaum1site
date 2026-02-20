import React from 'react';
import { motion } from 'motion/react';

type Partner = { name: string; logo: string };

const PARTNERS: Partner[] = [
    { name: 'Viessmann', logo: '/logos/partners/Viessmann.png' },
    { name: 'Hansa', logo: '/logos/partners/Hansa.png' },
    { name: 'Hansgrohe', logo: '/logos/partners/Hansgrohe.png' },
    { name: 'Geberit', logo: '/logos/partners/Geberit.png' },
    { name: 'Kermi', logo: '/logos/partners/Kermi.png' },
    { name: 'Keuco', logo: '/logos/partners/Keuco.png' },
    { name: 'Grohe', logo: '/logos/partners/Grohe.png' },
    { name: 'SHK Innung', logo: '/logos/partners/SHK_Innung.png' },
    { name: 'Badpunkt', logo: '/logos/partners/Badpunkt.png' },
    { name: 'Lumina', logo: '/logos/partners/Lumina.png' },
    { name: 'Mitsubishi', logo: '/logos/partners/Mitsubishi.png' },
    { name: 'Tago', logo: '/logos/partners/Tago.png' },
    { name: 'Vaillant', logo: '/logos/partners/Vaillant.png' },
    { name: 'Weisshaupt', logo: '/logos/partners/Weisshaupt.png' },
    { name: 'Wilo', logo: '/logos/partners/Wilo.png' },
];

const INFINITE_PARTNERS = [...PARTNERS, ...PARTNERS];

export const TrustLogos = () => {
    return (
        <div className="relative w-full bg-white py-10">
            <div className="text-center mb-10">
                <h3 className="text-[#58585a] text-sm font-bold uppercase tracking-[0.25em]">Gutes Handwerk braucht gute Partner</h3>
            </div>

            <div className="relative overflow-hidden">
                {/* Soft fade gradients at the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex">
                    <motion.div
                        className="flex items-center shrink-0"
                        animate={{
                            x: [0, '-50%'],
                        }}
                        transition={{
                            duration: 60,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {INFINITE_PARTNERS.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex items-center justify-center shrink-0 w-44 px-8"
                            >
                                <motion.img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-9 w-auto object-contain transition-all duration-300 filter grayscale brightness-50 opacity-60 hover:grayscale-0 hover:opacity-100 hover:brightness-100"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
