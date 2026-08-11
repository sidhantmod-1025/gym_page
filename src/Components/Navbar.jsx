import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Services", "services"],
    ["Pricing", "pricing"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-black tracking-wider"
        >
          IRON<span className="text-orange-500">CORE</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">

          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-semibold text-gray-300 transition hover:text-orange-500"
            >
              {name}
            </a>
          ))}

        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-orange-500 px-6 py-3 font-bold transition hover:scale-105 hover:bg-orange-600 lg:block"
        >
          Join Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            {links.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-300 transition hover:text-orange-500"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center font-bold"
            >
              Join Now
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;