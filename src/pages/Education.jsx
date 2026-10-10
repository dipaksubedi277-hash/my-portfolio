import EducationCard from "../components/EducationCard";
import { education } from "../data/data";

export default function Education() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
