import projects from "../../Data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
};

export default ProjectList;
