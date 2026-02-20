import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, LOCATION, CONTACT } from '@/constants';

export const Footer = () => {
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
                    <p className="text-primary/60 leading-relaxed">
                        Ihr zertifizierter Meisterbetrieb für Sanitär, Heizung und Klima in Düsseldorf und Umgebung.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-6">Leistungen</h4>
                    <ul className="space-y-4 text-primary/60">
                        <li><Link to="/leistungen/bad" className="hover:text-accent transition-colors">Badplanung</Link></li>
                        <li><Link to="/leistungen/heizung" className="hover:text-accent transition-colors">Heizungswartung</Link></li>
                        <li><Link to="/leistungen/heizung" className="hover:text-accent transition-colors">Wärmepumpen</Link></li>
                        <li><Link to="/leistungen/klima" className="hover:text-accent transition-colors">Klimatechnik</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-6">Kontakt</h4>
                    <ul className="space-y-4 text-primary/60">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 shrink-0 text-accent" />
                            <span>{CONTACT.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 shrink-0 text-accent" />
                            <span>{CONTACT.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 shrink-0 text-accent" />
                            <span>{CONTACT.email}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-6">Rechtliches</h4>
                    <ul className="space-y-4 text-primary/60">
                        <li><Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
                        <li><Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
                        <li><Link to="/agb" className="hover:text-accent transition-colors">AGB</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-20 text-center text-primary/40 text-sm">
                © {new Date().getFullYear()} {COMPANY_NAME} SHK {LOCATION}. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
};
