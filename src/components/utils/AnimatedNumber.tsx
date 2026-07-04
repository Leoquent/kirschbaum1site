import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        // ⚡ Bolt Optimization: Bypass React state to prevent expensive re-renders (every 16ms)
        // Expected Impact: Eliminates ~125 re-renders per component during the 2-second animation.
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate(currentValue) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(currentValue).toString();
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
