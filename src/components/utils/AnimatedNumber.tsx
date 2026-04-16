import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // By using `animate` with `onUpdate` to directly modify the DOM node's `textContent`,
        // we completely bypass React's render cycle.
        // Previously, `useState` and `setInterval` triggered ~60 re-renders per second
        // per AnimatedNumber instance, which could severely impact performance with multiple instances.
        const controls = animate(0, value, {
            duration: 2, // framer-motion uses seconds
            ease: "linear",
            onUpdate(currentValue) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(currentValue).toString();
                }
            }
        });

        // Always return a cleanup function to prevent memory leaks and regressions
        // when the component unmounts during an active animation.
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
