import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt: Direct DOM Manipulation for High-Frequency Animation
// What: Replaced useState interval with motion/react animate modifying ref.current.textContent directly.
// Why: The previous interval-based approach caused 60+ React state re-renders per second, blocking the main thread during scroll.
// Impact: Reduces re-renders for the AnimatedNumber component to 0 during animation, improving scroll performance and visual smoothness.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2, // framer motion uses seconds
            ease: "linear",
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            },
            onComplete() {
                if (ref.current) {
                    ref.current.textContent = value.toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
