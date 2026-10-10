// props: project = one project object
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col">
      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded self-start">{project.type}</span>
      <h3 className="font-bold text-lg mt-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-1 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tools.map((tool) => (
          <span key={tool} className="text-xs bg-gray-100 px-2 py-1 rounded">{tool}</span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm font-semibold">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">GitHub</a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">Live Demo</a>
        )}
      </div>
    </div>
  );
}
