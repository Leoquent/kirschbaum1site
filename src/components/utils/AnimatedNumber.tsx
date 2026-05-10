import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // By using Framer Motion's animate function to directly update the DOM node
        // (ref.current.textContent), we bypass React's render cycle completely.
        // The previous implementation used setInterval + useState, which caused
        // ~125 React re-renders per animated component over the 2s duration.
        // This optimization drops React re-renders during the animation to 0
        // while preserving smooth 60fps rendering, significantly reducing main thread load.
        const controls = animate(0, value, {
            duration: 2,
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
