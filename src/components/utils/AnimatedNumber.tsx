import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        // ⚡ Bolt: Bypass React render cycle for high-frequency animation
        // 💡 What: Replaced useState with direct DOM manipulation via motion's animate
        // 🎯 Why: setInterval + setState caused 125+ re-renders per component during the 2s animation
        // 📊 Impact: Eliminates O(n) re-renders, reducing CPU overhead and jank
        // 🔬 Measurement: React Profiler will show 1 render instead of 125+ per counter

        const controls = animate(0, value, {
            duration: 2,
            ease: "linear",
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest).toString();
                }
            }
        });

        // Ensure we stop animation to prevent memory leaks if component unmounts early
        return () => controls.stop();
    }, [isInView, value]);

    // Render static '0' initially, motion updates the textContent directly
    return <span ref={ref}>0</span>;
};
