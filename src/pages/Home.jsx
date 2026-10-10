import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { skills, projects } from "../data/data";

export default function Home() {
  return (
    <div>
      <Hero />

      <h2 className="text-2xl font-bold mt-6 mb-3">My Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.slice(0, 3).map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      <Link to="/skills" className="inline-block mt-3 text-indigo-700 hover:underline">See all skills</Link>

      <h2 className="text-2xl font-bold mt-8 mb-3">Featured Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link to="/projects" className="inline-block mt-3 text-indigo-700 hover:underline">See all projects</Link>
    </div>
  );
}
