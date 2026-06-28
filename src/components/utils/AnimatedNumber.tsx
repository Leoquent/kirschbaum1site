import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    // ⚡ Bolt: Using direct DOM manipulation (ref.current.textContent) instead of React state
    // Why: setInterval with setState causes ~125 React re-renders over 2 seconds (1 per 16ms)
    // Impact: Reduces re-renders from ~125 to exactly 0 during the animation cycle
    // Measurement: React DevTools Profiler confirms no re-renders during animation
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // Use Framer Motion's animate for smooth hardware-accelerated interpolation
        // and direct DOM update to bypass React's render phase
        const controls = animate(0, value, {
            duration: 2, // framer-motion uses seconds
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

        // Cleanup to prevent memory leaks if component unmounts
        return () => controls.stop();
    }, [isInView, value]);

    // Initial state is 0, handled directly in DOM afterwards
    return <span ref={ref}>0</span>;
};
