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
        // Impact: Eliminates ~125 React re-renders per component during the 2s animation,
        // significantly reducing main thread block time during mount/scroll.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (v) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
