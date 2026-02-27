import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        // Performance Optimization: Direct DOM update
        // We bypass React's render cycle completely by updating the textContent directly.
        // Previously: setInterval + useState triggered ~60 renders per second for each counter.
        // Now: 0 re-renders during the 2-second animation, significantly reducing main thread load.
        // Expected impact: Eliminates ~240 unnecessary re-renders (4 counters * 60fps) during scroll.
        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
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
