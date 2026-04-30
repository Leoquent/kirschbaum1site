import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        // ⚡ Bolt: Using framer-motion's animate to directly update the DOM node
        // Impact: Eliminates ~120 React re-renders per component during the 2-second animation
        // Measurement: Verify with React DevTools profiler (0 renders vs 120 renders)
        const controls = animate(0, value, {
            duration: 2, // in seconds
            ease: "linear",
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
