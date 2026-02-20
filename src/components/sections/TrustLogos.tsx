import React from 'react';
import { motion } from 'motion/react';

type Partner = { name: string; logo: string };

const PARTNERS: Partner[] = [
    { name: 'Viessmann', logo: '/logos/partners/Viessmann-logo.svg.png' },
    { name: 'Hansa', logo: '/logos/partners/Hansa.svg.png' },
    { name: 'Hansgrohe', logo: '/logos/partners/Hansgrohe-Logo.svg.png' },
    { name: 'Geberit', logo: '/logos/partners/Geberit-Logo.svg.png' },
    { name: 'Kermi', logo: '/logos/partners/Kermi_logo.svg.png' },
    { name: 'Keuco', logo: '/logos/partners/Keuco_logo.svg.png' },
    { name: 'Grohe', logo: '/logos/partners/grohelogo.png' },
    { name: 'SHK Innung', logo: '/logos/partners/header-logo.svg' },
    { name: 'Badpunkt', logo: '/logos/partners/logo-badpunkt.svg' },
    { name: 'Lumina', logo: '/logos/partners/lumina_Claim_4c-small.png' },
    { name: 'Mitsubishi', logo: '/logos/partners/mitsubishilogo.svg' },
    { name: 'Tago', logo: '/logos/partners/tago-logo.svg' },
    { name: 'Vaillant', logo: '/logos/partners/vaillantlogo.svg' },
    { name: 'Weisshaupt', logo: '/logos/partners/weisshauptlogo.svg' },
    { name: 'Wilo', logo: '/logos/partners/wilologo.png' },
];

const INFINITE_PARTNERS = [...PARTNERS, ...PARTNERS];

export const TrustLogos = () => {
    return (
        <div className="relative w-full bg-white py-12">
            <div className="text-center mb-12">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Gutes Handwerk braucht gute Partner</h3>
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
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {INFINITE_PARTNERS.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex items-center justify-center shrink-0 w-48 px-8"
                            >
                                <motion.img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-10 w-auto object-contain transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
