import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance Optimization
        // Why: Using `animate` on `ref.current.textContent` bypasses React's render cycle completely.
        // Impact: Eliminates ~125 re-renders per AnimatedNumber component during its 2-second animation
        // by avoiding useState updates every 16ms, leading to smoother scrolling and less CPU overhead.
        const controls = animate(0, value, {
            duration: 2, // framer-motion duration is in seconds
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
