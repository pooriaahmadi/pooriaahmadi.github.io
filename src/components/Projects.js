import "../static/Projects.css";
import Project from "./Project";
const Projects = ({ projects }) => {
	return (
		<div className="projects">
			<h1>{projects.length} PROJECTS</h1>
			{projects.map((project) => (
				<Project projectObject={project} key={project.id} />
			))}
		</div>
	);
};

export default Projects;
