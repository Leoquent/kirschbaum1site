import React, { useState } from 'react';
import { motion, AnimatePresence, useTransform, MotionValue } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

const NAV_LINKS = [
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Karriere', href: '/karriere' },
];

// =============================================
// STATIC NAVBAR – used on all pages except Home
// =============================================
const StaticNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/90 backdrop-blur-xl shadow-sm"
            aria-label="Hauptnavigation"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-4 shrink-0">
                    <img
                        src="/Kirschbaum-Logo_transparent.png"
                        alt="Kirschbaum Logo"
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} to={link.href} className="text-sm font-bold text-primary transition-colors hover:text-accent">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link to="/kontakt" className="shrink-0">
                        <button className="bg-accent text-white p-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer whitespace-nowrap">
                            <span className="hidden md:inline">Kontakt aufnehmen</span>
                            <Mail className="w-5 h-5 md:hidden" />
                        </button>
                    </Link>

                    <button
                        className="md:hidden p-2 text-primary focus-visible:ring-2 focus-visible:ring-accent rounded-lg shrink-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} to={link.href} className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold cursor-pointer active:scale-95 transition-transform">
                                Kontakt aufnehmen
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// ===================================================
// DYNAMIC NAVBAR – only used on Home with scroll data
// ===================================================
const DynamicNavbar = ({ heroScrollProgress }: { heroScrollProgress: MotionValue<number> }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const backgroundColor = useTransform(heroScrollProgress, [0, 0.2], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);
    const backdropBlur = useTransform(heroScrollProgress, [0, 0.2], ["blur(0px)", "blur(16px)"]);
    const shadowOpacity = useTransform(heroScrollProgress, [0, 0.2], ["0 0 #0000", "0 1px 2px 0 rgb(0 0 0 / 0.05)"]);
    const logoFilter = useTransform(heroScrollProgress, [0, 0.15], ["brightness(0) invert(1)", "brightness(1) invert(0)"]);
    const linkColor = useTransform(heroScrollProgress, [0, 0.15], ["#FFFFFF", "#2B53A0"]);

    return (
        <motion.nav
            style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow: shadowOpacity }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4"
            aria-label="Hauptnavigation"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-4 shrink-0">
                    <motion.img
                        src="/Kirschbaum-Logo_transparent.png"
                        alt="Kirschbaum Logo"
                        style={{ filter: logoFilter }}
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <motion.div key={link.name} style={{ color: linkColor }}>
                                <Link to={link.href} className="text-sm font-bold transition-colors hover:text-accent drop-shadow-sm">
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <Link to="/kontakt" className="shrink-0">
                        <button className="bg-accent text-white p-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer whitespace-nowrap">
                            <span className="hidden md:inline">Kontakt aufnehmen</span>
                            <Mail className="w-5 h-5 md:hidden" />
                        </button>
                    </Link>

                    <motion.button
                        className="md:hidden p-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg shrink-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                        style={{ color: linkColor }}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} to={link.href} className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold cursor-pointer active:scale-95 transition-transform">
                                Kontakt aufnehmen
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

// =============================================
// EXPORTED NAVBAR – decides which version to use
// =============================================
interface NavbarProps {
    heroScrollProgress?: MotionValue<number>;
    isStatic?: boolean;
}

export const Navbar = ({ heroScrollProgress, isStatic = false }: NavbarProps) => {
    if (heroScrollProgress && !isStatic) {
        return <DynamicNavbar heroScrollProgress={heroScrollProgress} />;
    }
    return <StaticNavbar />;
};
