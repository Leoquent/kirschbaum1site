import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Flame } from 'lucide-react';

export const TrustLogos = () => (
    <>
        <div className="flex items-center gap-3 shrink-0">
            <ShieldCheck className="w-10 h-10 text-primary/60" />
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-primary">SHK</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Innungsfachbetrieb</span>
            </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
            <Award className="w-10 h-10 text-primary/60" />
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-primary">MEISTER</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Handwerkskammer</span>
            </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
            <CheckCircle2 className="w-10 h-10 text-primary/60" />
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-primary">TÜV</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Zertifiziert</span>
            </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
            <Flame className="w-10 h-10 text-primary/60" />
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-primary">VIESSMANN</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">Premium Partner</span>
            </div>
        </div>
    </>
);
