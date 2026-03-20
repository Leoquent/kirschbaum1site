import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    // ⚡ Bolt Optimization:
    // Replaced `useState` and `setInterval` with `motion/react`'s `animate` function
    // and a direct DOM ref update. This completely eliminates ~125 React re-renders
    // per counter component over the 2-second animation duration, dramatically
    // reducing main thread blocking and CPU usage during the critical initial page load.
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
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
