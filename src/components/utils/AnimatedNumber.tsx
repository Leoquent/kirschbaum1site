import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt Performance Optimization:
// Bypassed React state and render cycle for high-frequency number animation.
// Using Framer Motion's `animate` to directly update `textContent` avoids ~60 re-renders
// per second per component while maintaining smooth 2-second animation.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

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
