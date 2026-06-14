import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Performance optimization
        // What: Using Framer Motion's animate function to update DOM node directly.
        // Why: The previous implementation used setInterval and React state, causing ~125 re-renders
        //      per animated number component during its 2-second animation.
        // Impact: Reduces re-renders for the animated numbers from ~125 to 0 per animation,
        //         significantly reducing main thread blocking on page load.
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
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
