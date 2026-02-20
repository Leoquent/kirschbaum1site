import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'motion/react';

type Partner = { name: string; logo: string };

const PARTNERS: Partner[] = [
    { name: 'Viessmann', logo: '/logos/partners/Viessmann-logo.svg.png' },
    { name: 'SHK Innung', logo: '/logos/partners/header-logo.svg' },
    { name: 'Badpunkt', logo: '/logos/partners/logo-badpunkt.svg' },
    { name: 'Mitsubishi Electric', logo: '/logos/partners/mitsubishilogo.svg' },
    { name: 'Vaillant', logo: '/logos/partners/vaillantlogo.svg' },
    { name: 'Wilo', logo: '/logos/partners/wilologo.png' },
];

const INFINITE_PARTNERS = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

const LogoItem: React.FC<{ partner: Partner }> = ({ partner }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [grayscale, setGrayscale] = useState(100);
    const [opacity, setOpacity] = useState(0.3);

    useAnimationFrame(() => {
        if (!itemRef.current) return;

        const rect = itemRef.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const itemCenterX = rect.left + rect.width / 2;

        // Calculate distance from center (normalized 0 to 1)
        const maxDist = window.innerWidth / 1.5;
        const dist = Math.abs(centerX - itemCenterX);
        const normalizedDist = Math.min(dist / maxDist, 1);

        // Calculate effects: 0% grayscale at center, 100% at edges
        // 1.0 opacity at center, 0.3 at edges
        const g = Math.pow(normalizedDist, 0.5) * 100;
        const o = 1 - (normalizedDist * 0.7);

        setGrayscale(g);
        setOpacity(o);
    });

    return (
        <div
            ref={itemRef}
            className="group relative flex items-center justify-center shrink-0 w-48 px-4"
        >
            <motion.img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300"
                style={{
                    filter: `grayscale(${grayscale}%)`,
                    opacity: opacity,
                }}
                whileHover={{
                    filter: 'grayscale(0%)',
                    opacity: 1,
                    scale: 1.1,
                }}
            />
        </div>
    );
};

export const TrustLogos = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white py-12">
            {/* Soft fade gradients at the edges */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex items-center shrink-0"
                    animate={{
                        x: [0, '-50%'],
                    }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {INFINITE_PARTNERS.map((partner, index) => (
                        <LogoItem key={`${partner.name}-${index}`} partner={partner} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
