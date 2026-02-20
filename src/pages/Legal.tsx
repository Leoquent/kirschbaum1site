import React from 'react';
import { Layout } from '@/components/layout/Layout';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Layout isStatic={true}>
        <section className="pt-40 pb-32 bg-white">
            <div className="max-w-3xl mx-auto px-6 space-y-8">
                <h1 className="text-5xl font-display font-bold text-primary">{title}</h1>
                <div className="prose prose-primary max-w-none text-primary/70 leading-relaxed space-y-6">
                    {children}
                </div>
            </div>
        </section>
    </Layout>
);

export const Impressum = () => (
    <LegalLayout title="Impressum">
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">Angaben gemäß § 5 TMG</h2>
                <p>
                    Kurt Kirschbaum GmbH<br />
                    Wilhelm-Tell-Straße 23<br />
                    40219 Düsseldorf
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">Vertreten durch:</h2>
                <p>Geschäftsführer: Marcel Stoeck</p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">Kontakt</h2>
                <p>
                    Telefon: 0211 391635<br />
                    E-Mail: info@kirschbaum-gmbh.de
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">Registereintrag</h2>
                <p>
                    Eintragung im Handelsregister.<br />
                    Registergericht: Amtsgericht Düsseldorf<br />
                    Registernummer: HRB 13698
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                    DE119431113
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>
                    Berufsbezeichnung: Gas- und Wasserinstallateurmeister sowie Heizungs- und Lüftungsbauermeister<br />
                    Zuständige Kammer: Handwerksrolle der HWK Düsseldorf<br />
                    Kammernummer: 108 65 61
                </p>
            </div>
        </div>
    </LegalLayout>
);

export const Datenschutz = () => (
    <LegalLayout title="Datenschutz">
        <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <h2 className="text-xl font-bold text-primary mt-8">Datenerfassung auf unserer Website</h2>
        <p>Die Datenerarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
    </LegalLayout>
);

export const AGB = () => (
    <LegalLayout title="AGB">
        <p>Hier finden Sie unsere allgemeinen Geschäftsbedingungen. Stand: Februar 2026.</p>
        <p>Bei Interesse an unseren detaillierten Geschäftsbedingungen für spezifische Projekte wenden Sie sich bitte direkt an uns.</p>
    </LegalLayout>
);
