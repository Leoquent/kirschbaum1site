import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // Using framer-motion's animate to directly update the DOM element.
        // This completely bypasses React's render cycle, saving ~120 re-renders
        // per counter component during the 2-second animation.
        const controls = animate(0, value, {
            duration: 2, // framer-motion uses seconds
            ease: "linear",
            onUpdate: (current) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(current).toString();
                }
            }
        });

        // Ensure we stop the animation when component unmounts to prevent memory leaks
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
