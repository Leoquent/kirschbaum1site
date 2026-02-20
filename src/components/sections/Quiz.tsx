import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Flame, Wind, ShieldCheck, Sparkles, Award, Phone, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Quiz = () => {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState<Record<number, string>>({});

    const steps = [
        {
            question: "Was planen Sie als Nächstes?",
            options: [
                { label: "Neues Traumbad", icon: <Droplets className="w-6 h-6" /> },
                { label: "Moderne Heizung", icon: <Flame className="w-6 h-6" /> },
                { label: "Klimatisierung", icon: <Wind className="w-6 h-6" /> },
                { label: "Wartung & Service", icon: <ShieldCheck className="w-6 h-6" /> }
            ]
        },
        {
            question: "Wie ist der aktuelle Stand?",
            options: [
                { label: "Neubau", icon: <Sparkles className="w-6 h-6" /> },
                { label: "Sanierung", icon: <Award className="w-6 h-6" /> },
                { label: "Akuter Defekt", icon: <Phone className="w-6 h-6" /> },
                { label: "Nur Beratung", icon: <Calculator className="w-6 h-6" /> }
            ]
        },
        {
            question: "Wann soll es losgehen?",
            options: [
                { label: "Sofort", icon: <ArrowRight className="w-6 h-6" /> },
                { label: "In 3-6 Monaten", icon: <ArrowRight className="w-6 h-6" /> },
                { label: "Nächstes Jahr", icon: <ArrowRight className="w-6 h-6" /> },
                { label: "Noch offen", icon: <ArrowRight className="w-6 h-6" /> }
            ]
        }
    ];

    const handleSelect = (option: string) => {
        setSelections({ ...selections, [step]: option });
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setStep(steps.length); // Completion
        }
    };

    return (
        <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((step) / steps.length) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                {step < steps.length ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <span className="text-accent font-bold text-sm uppercase tracking-widest">Schritt {step + 1} von {steps.length}</span>
                            <h3 className="text-3xl font-display font-bold text-primary tracking-tight">{steps[step].question}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {steps[step].options.map((opt) => (
                                <button
                                    key={opt.label}
                                    onClick={() => handleSelect(opt.label)}
                                    className="flex items-center gap-4 p-6 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 transition-all text-left group cursor-pointer active:scale-[0.98]"
                                >
                                    <div className="p-3 bg-gray-100 text-[#666666] group-hover:bg-accent group-hover:text-white transition-all duration-300 rounded-lg">
                                        {opt.icon}
                                    </div>
                                    <span className="font-semibold text-lg text-primary group-hover:text-accent transition-colors">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="complete"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-8 py-12"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-display font-bold text-primary">Fast geschafft!</h3>
                            <p className="text-xl md:text-2xl text-primary/95 max-w-md mx-auto font-medium">
                                Wir haben Ihre Auswahl erhalten. Hinterlassen Sie uns Ihre Kontaktdaten für ein unverbindliches Erstgespräch.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 max-w-sm mx-auto">
                            <input type="text" placeholder="Name" className="px-6 py-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent outline-none" />
                            <input type="email" placeholder="E-Mail Adresse" className="px-6 py-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent outline-none" />
                            <button className="bg-accent text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-accent/20 cursor-pointer">
                                Jetzt Angebot anfordern
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
