import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            {/* Orb 1 - Fast Intense Blue */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blue-600/60 rounded-full blur-xl mix-blend-multiply dark:mix-blend-screen"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Orb 2 - Fast Intense Purple */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-purple-600/60 rounded-full blur-xl mix-blend-multiply dark:mix-blend-screen"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Orb 3 - Fast Intense Pink */}
            <motion.div
                className="absolute top-[40%] left-[40%] w-[60vh] h-[60vh] bg-pink-600/60 rounded-full blur-xl mix-blend-multiply dark:mix-blend-screen"
                animate={{
                    x: [-50, 50, -50],
                    y: [-50, 50, -50],
                    rotate: [0, 180, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
