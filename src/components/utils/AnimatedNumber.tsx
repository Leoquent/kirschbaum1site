import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Using animate to directly manipulate textContent bypasses React re-renders.
        // Prevents ~125 re-renders per AnimatedNumber instance during the 2s animation.
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
