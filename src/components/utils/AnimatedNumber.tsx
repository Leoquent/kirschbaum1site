import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && ref.current) {
            // ⚡ Bolt Performance Optimization:
            // Animate the DOM node directly to bypass React's render cycle.
            // This prevents ~60 state updates and re-renders per second during the animation.
            const controls = animate(0, value, {
                duration: 2,
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(latest).toString();
                    }
                }
            });
            return controls.stop;
        }
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
