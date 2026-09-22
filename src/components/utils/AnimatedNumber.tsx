import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance Optimization
        // By animating the textContent directly on the DOM node instead of using
        // React useState, we completely eliminate React re-renders during the animation.
        // Previously, the 2000ms animation caused ~125 re-renders (one every 16ms)
        // per AnimatedNumber instance. Now it causes 0 re-renders, significantly
        // reducing main thread blocking and making the animation smoother.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(v) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(v).toString();
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
