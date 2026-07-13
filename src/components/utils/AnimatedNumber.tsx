import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
        useEffect(() => {
        if (!isInView || !ref.current) return;
        const controls = animate(0, value, {
            duration: 2, // 2 seconds
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

    return <span ref={ref} />;
};
