import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Optimization:
        // Replaced React `useState` and `setInterval` with Framer Motion's `animate` function.
        // What: Directly mutate the DOM element's textContent instead of triggering state updates.
        // Why: The previous implementation triggered ~60 React re-renders per second per component
        //      during the 2-second animation. With 4 counters, that was ~480 unnecessary re-renders.
        // Impact: Eliminates all re-renders during the animation, freeing up the main thread
        //         and improving overall application responsiveness during scroll.
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(currentValue) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(currentValue).toString();
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
