import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance optimization
        // Bypassing React state (useState) and instead directly updating the DOM node's textContent.
        // This eliminates unnecessary React re-renders that would otherwise occur 60 times per second
        // during the 2-second animation duration, significantly improving frontend performance.
        const controls = animate(0, value, {
            duration: 2,
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

        // Maintain React lifecycle hygiene
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
