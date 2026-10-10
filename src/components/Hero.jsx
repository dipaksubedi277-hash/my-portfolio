import { Link } from "react-router-dom";
import { profile } from "../data/data";

export default function Hero() {
  // First letters of the name, used if there is no photo
  const initials = profile.name.split(" ").map((word) => word[0]).join("");

  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-indigo-700 font-semibold">Hello, I am</p>
        <h2 className="text-4xl font-bold mt-1">{profile.name}</h2>
        <h3 className="text-xl text-gray-600 mt-1">{profile.title}</h3>
        <p className="mt-4 text-gray-600">{profile.intro}</p>

        <div className="flex gap-3 mt-6 justify-center md:justify-start">
          <Link to="/projects" className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800">My Projects</Link>
          <Link to="/contact" className="border border-indigo-700 text-indigo-700 px-4 py-2 rounded hover:bg-indigo-50">Contact Me</Link>
          {profile.cv && (
            <a href={profile.cv} download className="border px-4 py-2 rounded hover:bg-gray-100">Download CV</a>
          )}
        </div>
      </div>

      {profile.photo ? (
        <img src={profile.photo} alt={profile.name} className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow" />
      ) : (
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-indigo-200 text-indigo-700 text-6xl font-bold flex items-center justify-center shadow">
          {initials}
        </div>
      )}
    </section>
  );
}
