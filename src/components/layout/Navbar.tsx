import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT } from '@/constants';

interface NavbarProps {
    heroScrollProgress?: any;
    isStatic?: boolean;
}

export const Navbar = ({ heroScrollProgress, isStatic = false }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // If we have heroScrollProgress (Home page), use it for transitions
    // Otherwise, if isStatic or not Home, use solid/blur background
    const backgroundColor = useTransform(
        heroScrollProgress || { scrollYProgress: { current: isStatic ? 1 : 0 } },
        [0, 0.2],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
    );

    const backdropBlur = useTransform(
        heroScrollProgress || { scrollYProgress: { current: isStatic ? 1 : 0 } },
        [0, 0.2],
        ["blur(0px)", "blur(16px)"]
    );

    const shadowOpacity = useTransform(
        heroScrollProgress || { scrollYProgress: { current: isStatic ? 1 : 0 } },
        [0, 0.2],
        ["0 0 #0000", "0 1px 2px 0 rgb(0 0 0 / 0.05)"]
    );

    const logoFilter = useTransform(
        heroScrollProgress || { scrollYProgress: { current: isStatic ? 1 : 0 } },
        [0, 0.15],
        ["brightness(0) invert(1)", "brightness(1) invert(0)"]
    );

    const linkColor = useTransform(
        heroScrollProgress || { scrollYProgress: { current: isStatic ? 1 : 0 } },
        [0, 0.15],
        ["#FFFFFF", "#2B53A0"]
    );

    // Fallback for static pages without scroll animation
    const staticStyles = isStatic || !isHome ? {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropBlur: "blur(16px)",
        shadowOpacity: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        linkColor: "#2B53A0",
        logoFilter: "brightness(1) invert(0)"
    } : null;

    const navLinks = [
        { name: 'Leistungen', href: '/leistungen' },
        { name: 'Über uns', href: '/ueber-uns' },
        { name: 'Referenzen', href: '/#referenzen' },
        { name: 'Karriere', href: '/karriere' },
    ];

    return (
        <motion.nav
            style={{
                backgroundColor: staticStyles?.backgroundColor || backgroundColor,
                backdropFilter: staticStyles?.backdropBlur || backdropBlur,
                boxShadow: staticStyles?.shadowOpacity || shadowOpacity
            }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4"
            aria-label="Hauptnavigation"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-4">
                        <motion.img
                            src="/Kirschbaum-Logo_transparent.png"
                            alt="Kirschbaum Logo"
                            style={{ filter: staticStyles?.logoFilter || logoFilter }}
                            className="h-16 w-auto"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.div key={link.name} style={{ color: staticStyles?.linkColor || linkColor }}>
                                <Link
                                    to={link.href}
                                    className="text-sm font-bold transition-colors hover:text-accent drop-shadow-sm"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <Link to="/kontakt">
                        <button className="bg-accent text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer whitespace-nowrap">
                            Kontakt aufnehmen
                        </button>
                    </Link>

                    <button
                        className="md:hidden p-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                        aria-expanded={isMobileMenuOpen}
                        style={{ color: staticStyles?.linkColor || linkColor }}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-lg font-bold text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
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
