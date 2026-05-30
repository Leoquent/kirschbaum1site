import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Use motion's animate for direct DOM manipulation to prevent React re-renders on every frame.
        // This bypasses the React render cycle entirely, saving ~125 re-renders per animation (2000ms / 16ms).
        const controls = animate(0, value, {
            duration: 2, // framer motion uses seconds
            ease: "linear",
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            },
            onComplete() {
                if (ref.current) {
                    ref.current.textContent = value.toString();
                }
            }
        });

        // ⚡ Bolt: Ensure cleanup of the animation when unmounted to prevent memory leaks
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
