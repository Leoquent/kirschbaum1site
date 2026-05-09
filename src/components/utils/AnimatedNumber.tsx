import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Optimization:
        // Why: Using `useState` and `setInterval` causes a React re-render every 16ms (60 FPS),
        // causing unnecessary DOM reconciliation over the 2-second animation.
        // What: Replaced with `animate` from `motion/react` and direct DOM mutation.
        // Impact: Eliminates 120+ re-renders per AnimatedNumber component. Direct DOM update is significantly faster.
        // Measurement: Observe the animation smoothness; use React Profiler to see 0 re-renders during the 2s animation.
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        // Ensure cleanup to prevent memory leaks and stop the animation if unmounted
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
