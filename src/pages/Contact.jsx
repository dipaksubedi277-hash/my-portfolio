import ContactForm from "../components/ContactForm";
import { profile } from "../data/data";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded shadow">
          <p className="mb-2"><b>Email:</b> {profile.email}</p>
          <p className="mb-2"><b>Phone:</b> {profile.phone}</p>
          <p className="mb-4"><b>Location:</b> {profile.location}</p>
          <div className="flex flex-col gap-1">
            {profile.social.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
