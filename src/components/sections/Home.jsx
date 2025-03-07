import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "UI/UX Designer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(() => handleType(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight animate-gradient-bg">
            Hi, I'm Prabhath
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-400">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            I'm a BSc (Hons) Software Engineering Undergraduate with a passion for front-end development and UI/UX design.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="bg-purple-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
              View Projects
            </a>
            <a href="#contact" className="border border-purple-600/50 text-purple-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 justify-center mt-8">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://dribbble.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaDribbble className="text-2xl text-gray-400 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://behance.net/your-profile" target="_blank" rel="noopener noreferrer">
              <FaBehance className="text-2xl text-gray-400 hover:text-blue-600 transition-colors" />
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-8">
            <a
              href="/path-to-your-resume.pdf"
              download="Prabhath_Resume.pdf"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};