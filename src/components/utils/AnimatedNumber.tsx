import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Use motion's animate function to bypass React re-renders.
        // Instead of setting state every 16ms (causing ~125 re-renders per component),
        // we directly update the DOM node's textContent for O(1) render cost.
        // Using duration: 2 as Framer Motion v12 expects duration in seconds.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(currentValue) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(currentValue).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
