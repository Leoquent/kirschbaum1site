import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance Optimization
        // Using framer-motion's animate function to update DOM node textContent directly.
        // This bypasses React's render cycle completely, avoiding 125+ re-renders
        // per number counter during the 2000ms animation period.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        return controls.stop;
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
