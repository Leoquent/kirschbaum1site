import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // Use motion/react's animate to directly update DOM
        // This prevents ~60 React renders per second per counter
        const controls = animate(0, value, {
            duration: 2, // duration in seconds
            ease: "linear",
            onUpdate: (v) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            }
        });

        // Always clean up animation controls
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
