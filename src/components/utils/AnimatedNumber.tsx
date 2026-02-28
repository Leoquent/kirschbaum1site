import React, { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useMotionValue(0);
    const roundedValue = useTransform(motionValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (!isInView) return;

        // ⚡ Bolt: Use framer-motion's animate() directly on a MotionValue.
        // Why: The previous implementation used setInterval to update React state
        // 60 times per second, causing massive re-renders.
        // Impact: Bypasses the React render cycle completely during the animation,
        // reducing CPU usage and layout thrashing.
        const controls = animate(motionValue, value, {
            duration: 2,
            ease: "easeOut",
        });

        return () => controls.stop();
    }, [isInView, motionValue, value]);

    return <motion.span ref={ref}>{roundedValue}</motion.span>;
};
