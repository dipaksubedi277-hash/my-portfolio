import { profile } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center">
      <div className="flex justify-center gap-4 mb-2">
        {profile.social.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="hover:text-white underline">
            {item.name}
          </a>
        ))}
      </div>
      <p className="text-sm">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
