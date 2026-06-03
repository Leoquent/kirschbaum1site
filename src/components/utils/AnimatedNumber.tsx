import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt Optimization:
// What: Replaced useState/setInterval with motion's animate + DOM mutation
// Why: Prevent React re-renders 60 times a second per animated number
// Impact: Eliminates ~120 renders per component during the 2s animation
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2, // framer-motion uses seconds
            ease: "linear",
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
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
