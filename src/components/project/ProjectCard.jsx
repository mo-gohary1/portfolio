import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";

const ProjectCard = ({ project, index }) => {
  return (
    <TiltCard className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-800 flex flex-col"
      >
        <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex gap-2">
              {project.tech && project.tech.slice(0, 3).map(t => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-400">
                  {t}
                </span>
              ))}
            </div>
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              View →
            </Link>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};

export default ProjectCard;
