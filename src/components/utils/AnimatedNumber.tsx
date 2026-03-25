import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // What: Using motion's animate to directly update the DOM node.
        // Why: The previous implementation used React state (useState) and setInterval,
        //      causing ~120 total React component re-renders during the 2-second animation.
        // Impact: Eliminates all React render cycles during the animation, improving main thread
        //         performance and preventing layout thrashing.
        // Measurement: React DevTools Profiler will show 1 render instead of ~120.
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
