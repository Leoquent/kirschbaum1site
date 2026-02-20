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
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">Angaben gemäß § 5 TMG</h2>
            <p>Kurt Kirschbaum GmbH<br />Musterstraße 123<br />40213 Düsseldorf</p>
            <h2 className="text-xl font-bold text-primary">Vertreten durch:</h2>
            <p>Geschäftsführer: Max Mustermann</p>
            <h2 className="text-xl font-bold text-primary">Kontakt</h2>
            <p>Telefon: +49 (0) 211 1234567<br />E-Mail: info@kirschbaum-gmbh.de</p>
        </div>
    </LegalLayout>
);

export const Datenschutz = () => (
    <LegalLayout title="Datenschutz">
        <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
    </LegalLayout>
);

export const AGB = () => (
    <LegalLayout title="AGB">
        <p>Hier finden Sie unsere allgemeinen Geschäftsbedingungen. Stand: Februar 2026.</p>
    </LegalLayout>
);
