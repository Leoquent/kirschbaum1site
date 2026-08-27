import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Optimization: Use Framer Motion's animate + direct DOM mutation.
        // This eliminates ~120 React re-renders per component over the 2-second duration
        // by bypassing the React state cycle for high-frequency updates.
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

        return () => controls.stop();
    }, [isInView, value]);

    // Render static initial state; DOM is updated manually outside of React
    return <span ref={ref}>0</span>;
};
