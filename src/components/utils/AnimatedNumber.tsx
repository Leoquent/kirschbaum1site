import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Optimization:
        // By using Framer Motion's `animate` with direct DOM manipulation (`ref.current.textContent`),
        // we bypass React's render cycle completely. The previous implementation used `useState` and `setInterval`
        // which caused ~60 expensive re-renders per second per counter. This change eliminates those re-renders,
        // significantly reducing main thread blocking during the animation phase.
        const controls = animate(0, value, {
            duration: 2,
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

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
