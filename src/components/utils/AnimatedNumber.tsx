import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt Performance Optimization:
// Removed `useState` and `setInterval` to prevent ~125 re-renders per component
// during the 2-second animation. Instead, we use Framer Motion's `animate` function
// to directly update the DOM node (`ref.current.textContent`), bypassing the React
// render cycle entirely for a much smoother, jank-free animation on the main thread.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2, // framer motion uses seconds, not ms
            ease: "linear",
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        // Maintain React lifecycle hygiene to prevent regressions and memory leaks
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
