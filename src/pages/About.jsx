import { profile } from "../data/data";

export default function About() {
  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      {profile.about.map((text, index) => (
        <p key={index} className="mb-3 text-gray-700">{text}</p>
      ))}
      <ul className="mt-4 text-sm text-gray-600">
        <li>Location: {profile.location}</li>
        <li>Email: {profile.email}</li>
        <li>Phone: {profile.phone}</li>
      </ul>
    </div>
  );
}
