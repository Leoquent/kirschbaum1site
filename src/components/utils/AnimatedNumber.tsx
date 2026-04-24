import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

// ⚡ Bolt: Removed React.useState to prevent 120+ unnecessary re-renders per animation instance.
// We use motion's animate to directly mutate the DOM node's textContent for O(0) React renders during animation.
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // Use Framer Motion's animate function.
        // Note: In Framer Motion v12, duration is in seconds.
        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        // Always return the cleanup function to stop the animation if the component unmounts
        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>0</span>;
};
