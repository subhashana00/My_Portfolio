import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-gray-300 transition-colors duration-200"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl md:text-3xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-gray-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl md:text-3xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-gray-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </a>
      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl md:text-3xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-gray-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Skills
      </a>
      <a
        href="#experience"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl md:text-3xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-gray-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Experience
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl md:text-3xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-gray-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl md:text-3xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-gray-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </a>
    </div>
  );
};