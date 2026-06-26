import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt Optimization:
// What: Replaced React state updates with Framer Motion's `animate` function directly mutating the DOM node.
// Why: The previous implementation used `setInterval` and React state to increment the number,
// causing high-frequency re-renders (every 16ms) during the entire 2s animation.
// Impact: Eliminates ~125 unnecessary React component re-renders per number animation, saving main thread time.
// Measurement: Profile React renders via DevTools; observe 0 re-renders during counting vs 125 previously.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
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
