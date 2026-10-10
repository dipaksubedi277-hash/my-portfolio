// props: item = { title, place, year, detail }
export default function EducationCard({ item }) {
  return (
    <div className="bg-white p-4 rounded shadow border-l-4 border-indigo-600">
      <p className="text-sm text-indigo-700 font-semibold">{item.year}</p>
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="text-gray-600">{item.place}</p>
      <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
    </div>
  );
}
