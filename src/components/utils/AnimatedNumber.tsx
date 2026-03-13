import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        // ⚡ Bolt Performance Optimization:
        // Why: High-frequency state updates via setInterval caused ~125 React re-renders per animation.
        // What: Replaced with motion/react's `animate` function to directly update the DOM node's textContent.
        // Impact: Reduces React render cycle triggers to 0 during the animation while remaining visually identical.
        const controls = animate(0, value, {
            duration: 2,
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
