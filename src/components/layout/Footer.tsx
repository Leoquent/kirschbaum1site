import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, LOCATION, CONTACT } from '@/constants';

interface FooterProps {
    onOpenEmergency?: () => void;
}

export const Footer = ({ onOpenEmergency }: FooterProps) => {
    return (
        <footer className="bg-white py-20 border-t border-gray-100" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <img
                            src="/Kirschbaum-Logo_transparent.png"
                            alt="Kirschbaum Logo"
                            className="h-12 w-auto"
                        />
                    </div>
                    <p className="text-primary/60 leading-relaxed italic">
                        "Tradition trifft Innovation – Ihr Meisterbetrieb in Düsseldorf seit 1890."
                    </p>
                    <div className="pt-2">
                        <div className="flex items-center gap-2 text-primary font-bold mb-2">
                            <Clock className="w-4 h-4 text-accent" /> Geschäftszeiten
                        </div>
                        <p className="text-primary/60 text-sm">
                            Mo-Do: 07:30-17:00 Uhr<br />
                            Freitag: 07:30-15:00 Uhr
                        </p>
                        <button
                            onClick={onOpenEmergency}
                            className="text-accent font-bold text-[10px] mt-4 uppercase tracking-[0.15em] hover:text-primary transition-all cursor-pointer flex items-center gap-2 bg-accent/5 px-2.5 py-2 rounded-lg border border-accent/10 w-fit group"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="group-hover:translate-x-0.5 transition-transform italic">24h Notdienst erreichbar</span>
                        </button>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-6">Leistungen</h4>
                    <ul className="space-y-4 text-primary/60">
                        <li><Link to="/leistungen/bad" className="hover:text-accent transition-colors">Badplanung & Sanitär</Link></li>
                        <li><Link to="/leistungen/heizung" className="hover:text-accent transition-colors">Heizung & Energie</Link></li>
                        <li><Link to="/leistungen/klima" className="hover:text-accent transition-colors">Klima & Lüftung</Link></li>
                        <li><Link to="/referenzen" className="hover:text-accent transition-colors">Referenzen</Link></li>
                        <li><Link to="/karriere" className="hover:text-accent transition-colors">Karriere</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-6">Anschrift</h4>
                    <ul className="space-y-4 text-primary/60">
                        <li className="flex items-start gap-3 text-sm">
                            <MapPin className="w-5 h-5 shrink-0 text-accent" />
                            <span>
                                Kurt Kirschbaum GmbH<br />
                                Wilhelm-Tell-Straße 23<br />
                                40219 Düsseldorf
                            </span>
                        </li>
                    </ul>
                    <h4 className="font-bold text-primary mt-8 mb-6">Kontakt</h4>
                    <ul className="space-y-4 text-primary/60">
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 shrink-0 text-accent" />
                            <a href={`tel:${CONTACT.phoneLink}`} className="hover:text-primary transition-colors">{CONTACT.phone}</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 shrink-0 text-accent" />
                            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">{CONTACT.email}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-6">Rechtliches</h4>
                    <ul className="space-y-4 text-primary/60 text-sm">
                        <li><Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
                        <li><Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
                        <li><Link to="/agb" className="hover:text-accent transition-colors">AGB</Link></li>
                    </ul>
                    <div className="mt-12 flex justify-center md:justify-start">
                        <img
                            src="/innung.png"
                            alt="Innung SHK"
                            className="h-16 w-auto object-contain opacity-90 transition-all hover:opacity-100 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-20 text-center text-primary/40 text-xs">
                © {new Date().getFullYear()} Kurt Kirschbaum GmbH. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
};
