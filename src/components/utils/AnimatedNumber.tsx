import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt Optimization:
// What: Replaced setInterval + useState with motion's animate + DOM mutation.
// Why: The previous implementation triggered ~125 React re-renders per AnimatedNumber instance
//      (every 16ms for 2000ms). With 4 instances on the page, that's ~500 unnecessary re-renders.
// Impact: Reduces React re-renders from ~125 to exactly 0 during the animation.
// Measurement: Use React Profiler to verify zero renders on the AnimatedNumber component during scroll.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
