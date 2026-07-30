import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // By using Framer Motion's `animate` directly on the DOM node (`ref.current`),
        // we bypass the React render cycle entirely. Previously, `useState` and `setInterval`
        // caused ~120 expensive React re-renders per counter (every 16ms over 2 seconds).
        // This direct manipulation is significantly faster and reduces CPU load while
        // maintaining a smooth 60fps animation.
        const controls = animate(0, value, {
            duration: 2, // 2 seconds
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

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
