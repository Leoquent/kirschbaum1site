import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // By using `animate` with `onUpdate` to directly modify `ref.current.textContent`,
        // we bypass React's render cycle completely. This eliminates ~125 unnecessary
        // component re-renders per animation (2000ms / 16ms), significantly reducing
        // main thread blocking during scroll.
        const controls = animate(0, value, {
            duration: 2, // framer-motion duration is in seconds
            ease: "linear",
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
