import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance optimization
        // Bypassing React render cycle entirely by directly manipulating DOM textContent
        // using motion/react's animate. This prevents ~125 unnecessary renders per counter.
        // Duration must be in seconds for Framer Motion v12.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (v) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
