import React, { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Use useMotionValue to track the value without triggering re-renders
    const count = useMotionValue(0);
    // Transform to integer for display
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2 });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};
