import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects, projectTypes } from "../data/data";

export default function Projects() {
  const [selected, setSelected] = useState("All");

  // Show all projects, or only the selected type
  const filtered = selected === "All" ? projects : projects.filter((p) => p.type === selected);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={`px-4 py-1 rounded border ${selected === type ? "bg-indigo-700 text-white" : "bg-white hover:bg-indigo-50"}`}
          >
            {type}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No projects in this type yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
