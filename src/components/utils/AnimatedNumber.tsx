import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance optimization
        // Bypassing React's render cycle using direct DOM manipulation.
        // Impact: Eliminates ~125 re-renders per counter during the 2-second animation.
        const controls = animate(0, value, {
            duration: 2, // duration in seconds
            ease: "linear",
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            },
            onComplete() {
                if (ref.current) {
                    ref.current.textContent = value.toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
