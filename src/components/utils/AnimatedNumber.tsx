import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // By using `animate` to directly update `textContent`, we bypass React's render cycle
        // completely for high-frequency animations, preventing ~125 unnecessary re-renders per mount.
        const controls = animate(0, value, {
            duration: 2, // Framer Motion v12 uses seconds
            ease: "linear",
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};