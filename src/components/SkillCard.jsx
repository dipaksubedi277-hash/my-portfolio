// props: skill = { name, level }
export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{skill.name}</h3>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      {/* The blue bar width comes from the skill level */}
      <div className="w-full bg-gray-200 rounded h-3">
        <div className="bg-indigo-600 h-3 rounded" style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  );
}
