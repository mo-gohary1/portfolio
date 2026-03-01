import { useParams, Link } from "react-router-dom";
import projects from "../../Data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-4">Project not found</h2>
      <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );

  return (
    <section className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-2 mb-4">
          ← Back to Projects
        </Link>
        <h1 className="text-4xl font-bold">{project.title}</h1>
      </div>

      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="text-blue-500 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(project.challenges || project.solution) && (
            <div className="grid gap-6">
              {project.challenges && (
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">The Challenge</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
                </div>
              )}
              {project.solution && (
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/20">
                  <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">The Solution</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <h3 className="font-bold mb-3 text-gray-900 dark:text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={project.live}
                target="_blank"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg font-medium text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
