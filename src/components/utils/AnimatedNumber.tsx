import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    // ⚡ Bolt: Removed state variable `display` and `setInterval` to eliminate React re-renders.
    // Direct DOM manipulation via Framer Motion's `animate` is faster and smoother.
    useEffect(() => {
        if (!isInView || !ref.current) return;
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            },
        });
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
