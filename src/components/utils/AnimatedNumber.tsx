import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Use motion's animate to directly update the DOM node
        // This eliminates ~120 React re-renders per number animation (60fps * 2s)
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        // Ensure we stop animation on unmount to prevent memory leaks
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
