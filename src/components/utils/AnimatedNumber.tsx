import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

/*
 * ⚡ Bolt: AnimatedNumber rendering performance optimization
 *
 * 💡 What: Replaced React state (useState) and setInterval with Framer Motion's `animate` function
 *         to directly manipulate the DOM textContent.
 * 🎯 Why: The previous implementation triggered ~125 React re-renders per number over a 2-second
 *         duration (60fps * 2s). This caused significant main thread blocking and jank when multiple
 *         numbers animated simultaneously on scroll.
 * 📊 Impact: Reduces React re-renders from ~125 down to 1 per component lifecycle.
 * 🔬 Measurement: Profile the Home page load in React DevTools. The AnimatedNumber component
 *         will no longer appear as "re-rendered" during the 2-second scroll animation.
 */
export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const controls = animate(0, value, {
            duration: 2, // Framer Motion uses seconds, not ms
            ease: "linear",
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

        // Ensure we stop the animation to prevent memory leaks if component unmounts early
        return () => controls.stop();
    }, [isInView, value]);

    // Initial render displays 0. The animate function takes over updating textContent
    return <span ref={ref}>0</span>;
};
