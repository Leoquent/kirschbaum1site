import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ BOLT OPTIMIZATION:
        // Replaced React state (useState) with direct DOM manipulation using Framer Motion.
        // This eliminates ~125 unnecessary React re-renders per counter (at 60fps for 2 seconds),
        // significantly reducing main thread blocking during the page load/scroll animation.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(current) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(current).toString();
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
