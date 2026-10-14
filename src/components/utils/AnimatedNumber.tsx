import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        // ⚡ Bolt Performance Optimization:
        // Strategy: Direct DOM manipulation via Framer Motion's animate to update textContent,
        // bypassing React's state management (useState).
        // Impact: Eliminating unnecessary React re-renders (~125 per component during the 2s duration),
        // reducing main thread work and ensuring smooth animations.
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
