import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt Performance Optimization:
        // By using Framer Motion's `animate` function directly on the DOM node's `textContent`,
        // we completely bypass React's state management (useState/setDisplay).
        // This eliminates 60+ unnecessary React re-renders per second during the animation cycle,
        // significantly reducing main thread blocking and CPU usage, especially since multiple
        // AnimatedNumber components render simultaneously on the Home page.
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

    // Render initial state '0' immediately to prevent visual regressions before animation starts
    return <span ref={ref}>0</span>;
};
