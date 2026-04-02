import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt: Removed React state (useState) and manual interval mapping.
// Using Framer Motion's `animate` directly updates the DOM node (ref.current.textContent),
// which completely bypasses the React render cycle for every tick.
// Impact: Eliminates ~125 React re-renders per AnimatedNumber component over 2 seconds.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2, // framer motion uses seconds
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
