import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // Replaced React state (useState) and setInterval with motion's animate
        // to directly update the DOM node's textContent.
        // Impact: Eliminates 60+ React re-renders per second per AnimatedNumber instance during animation,
        // significantly reducing main thread blocking and React reconciliation overhead.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        return controls.stop;
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
