import { motion } from "framer-motion";
import {
    Code,
    Database,
    Layout,
    Server,
    Smartphone,
    Globe,
    Cpu,
    Layers,
    Box,
    Terminal
} from "lucide-react";

const techStack = [
    { name: "React", icon: Code },
    { name: "JavaScript", icon: Terminal },
    { name: "Tailwind CSS", icon: Layout },
    { name: "Framer Motion", icon: Layers },
    { name: "Vite", icon: Box },
    { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Smartphone }, // Using Smartphone as a placeholder for responsive design
    { name: "Git", icon: Cpu },
    { name: "API Integration", icon: Database },
];

const TechMarquee = () => {
    return (
        <div className="relative flex overflow-hidden py-10 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            {/* Gradient Masks for smooth fade in/out */}
            <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />

            {/* Marquee Container */}
            <motion.div
                className="flex gap-16 items-center whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20, // Adjust speed here
                }}
                style={{ width: "max-content" }} // Ensure it takes up necessary width
            >
                {/* Duplicate list 2 times to ensure seamless loop */}
                {[...techStack, ...techStack].map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 group cursor-default"
                    >
                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                            <tech.icon
                                size={28}
                                className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                            />
                        </div>
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
