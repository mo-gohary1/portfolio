import { motion } from "framer-motion";
import ProjectList from "../../components/project/ProjectList";

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
        >
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">All Projects</h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    Here is a collection of my work. Each project represents a unique challenge and solution.
                </p>
            </div>

            <ProjectList />
        </motion.section>
    );
};

export default Projects;
