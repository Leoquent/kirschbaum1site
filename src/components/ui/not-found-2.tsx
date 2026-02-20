import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { COMPANY_NAME } from "@/constants";

export function NotFoundComponent() {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-primary px-6 text-white text-center">
            {/* Massive Background 404 Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-display font-black text-[25rem] md:text-[45rem] leading-none text-white whitespace-nowrap"
                >
                    404
                </motion.h1>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl px-4">
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="font-display font-extrabold text-5xl md:text-8xl tracking-tight leading-tight">
                            Rohrbruch in <br /> der <span className="text-accent">Leitung?</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <p className="text-white/90 text-xl md:text-2xl font-sans font-bold leading-relaxed">
                            Die gewünschte Seite ist wohl abgesoffen. <br className="hidden md:block" />
                            Ob sie je wieder auftaucht?
                        </p>
                        <p className="text-white/70 text-lg md:text-xl font-sans font-medium">
                            Aber keine Panik. Wir bringen Sie wieder an die Oberfläche.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
                >
                    <Button
                        asChild
                        className="rounded-lg px-10 py-6 h-auto bg-white text-primary hover:bg-white/90 text-xl font-bold shadow-2xl transition-all hover:scale-105"
                    >
                        <Link to="/">
                            <HomeIcon className="size-6 mr-3" />
                            Zur Startseite
                        </Link>
                    </Button>

                    <Button
                        onClick={() => navigate(-1)}
                        variant="outline"
                        className="rounded-lg px-10 py-6 h-auto border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-xl font-bold transition-all hover:scale-105"
                    >
                        <ArrowLeft className="size-6 mr-3" />
                        Zurück
                    </Button>
                </motion.div>
            </div>

            {/* Technical Detail Elements */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
                <div className="h-px w-12 bg-white/10" />
                <span>{COMPANY_NAME} SHK &middot; Meisterbetrieb</span>
                <div className="h-px w-12 bg-white/10" />
            </div>
        </div>
    );
}
