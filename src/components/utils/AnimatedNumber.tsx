import React, { useRef, useEffect } from 'react';
import { useInView } from 'motion/react';
import { animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Optimization: Bypass React's render cycle for high-frequency updates.
        // Using motion's `animate` to directly mutate the DOM node (`textContent`)
        // eliminates 100+ React re-renders during the 2000ms animation.
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
