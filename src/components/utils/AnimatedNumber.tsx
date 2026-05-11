import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // Replaced useState and setInterval with motion's `animate` function.
        // This directly manipulates the DOM (`ref.current.textContent`) and bypasses
        // React's render cycle completely, avoiding ~60 re-renders per second
        // while the animation runs, improving performance significantly.
        const controls = animate(0, value, {
            duration: 2, // framer-motion v12 uses seconds
            ease: "linear",
            onUpdate(currentValue) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(currentValue).toString();
                }
            },
            onComplete() {
                if (ref.current) {
                    // Ensure exact final value is displayed, especially for decimal inputs like 4.7
                    ref.current.textContent = value.toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
