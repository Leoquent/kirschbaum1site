import React, { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'motion/react';

// ⚡ Bolt: Animation Optimization
// What: Replaced React state/setInterval with Framer Motion's useMotionValue.
// Why: The previous setInterval approach called setDisplay every 16ms, causing ~125 React re-renders per animated number over 2 seconds.
// Impact: Reduces React re-renders from ~125 to 1 (just the initial mount) per number, bypassing the React render cycle completely for the animation frames.
// Measurement: Use React DevTools Profiler to observe zero renders during the 2-second animation phase of the stats section.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2 });
            return () => controls.stop();
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};
