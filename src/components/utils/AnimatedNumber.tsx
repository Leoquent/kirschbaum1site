import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    // ⚡ Bolt Optimization:
    // What: Using Framer Motion's `animate` function to directly update the DOM node's `textContent`.
    // Why: We were previously using React's `useState` alongside `setInterval` to drive the animation.
    //      This triggered a React re-render every 16ms for the duration of the animation, which was highly inefficient.
    // Impact: Eliminating unnecessary React re-renders, significantly reducing main thread overhead and improving overall performance during the animation scroll.
    useEffect(() => {
        if (!isInView || !ref.current) return;

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
