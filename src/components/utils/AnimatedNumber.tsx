import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // Performance Optimization:
        // We use framer-motion's animate function to directly update the DOM node's textContent.
        // This completely bypasses React's render cycle (which was previously triggered every 16ms using useState).
        // It prevents unnecessary continuous re-renders of the component and preserves a smooth 60fps animation.
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
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
