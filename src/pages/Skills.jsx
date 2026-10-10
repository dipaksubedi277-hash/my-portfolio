import SkillCard from "../components/SkillCard";
import { skills } from "../data/data";

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
