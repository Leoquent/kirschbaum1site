import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    // ⚡ Bolt: Using direct ref manipulation instead of useState
    // Why: Prevents ~60 React re-renders per second during animation
    // Impact: Significantly reduces main thread work and improves performance
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
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
