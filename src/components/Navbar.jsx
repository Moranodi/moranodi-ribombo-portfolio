import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/achievements", label: "Achievements" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-darkbg shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="text-lighttext text-2xl font-bold uppercase tracking-[0.18em]"
        >
          MMR
        </NavLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-darkbg text-lighttext md:hidden"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((state) => !state)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="block h-0.5 w-6 bg-lighttext" />
          <span className="block h-0.5 w-6 bg-lighttext mt-1" />
          <span className="block h-0.5 w-6 bg-lighttext mt-1" />
        </button>

        <nav
          className={`absolute right-4 top-full mt-2 w-56 rounded-3xl border border-slate-200 bg-darkbg/95 p-4 shadow-soft backdrop-blur-sm transition-all duration-300 md:static md:mt-0 md:flex md:w-auto md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `inline-flex rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-lighttext/80 hover:bg-secondary hover:text-darkbg"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
