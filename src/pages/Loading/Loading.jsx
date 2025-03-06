import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function Loading() {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 });
        return () => controls.stop();
    }, []);

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen transition-al"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <motion.pre className="text-orange-400 text-6xl">
                {rounded}
            </motion.pre>
        </motion.div>
    );
}
