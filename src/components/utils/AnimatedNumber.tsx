import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        /*
         * ⚡ Bolt Performance Optimization:
         * Replaced `setInterval` + `setState` with `motion/react`'s `animate` function.
         *
         * Why: The previous implementation triggered ~60 React re-renders per second
         * for 2 seconds (120 re-renders per AnimatedNumber component).
         *
         * Impact: By mutating `ref.current.textContent` directly, we bypass React's
         * rendering lifecycle entirely. This reduces re-renders from ~120 to 0 per
         * component, saving significant main-thread time during the animation sequence.
         */
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
