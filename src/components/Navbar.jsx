import { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/education", label: "Education" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-indigo-700 text-white relative">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{profile.name}</h1>

        {/* Menu button (mobile only) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>

        {/* Links: always on desktop, toggled on mobile */}
        <ul className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-indigo-700 p-4 md:p-0 z-10`}>
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "font-bold underline" : "hover:underline")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
