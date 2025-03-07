import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaDribbble, FaBehance, FaFolderOpen } from "react-icons/fa";
import profileImage from "../../assets/profile.png";
import { socialLinks, resumeLink } from "../../../config";

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-900 p-4 sm:p-6"
    >
      <RevealOnScroll>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left lg:w-1/2 z-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight animate-gradient-bg">
              Hi, I'm Prabhath
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 font-mono">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              I'm a BSc (Hons) Software Engineering Undergraduate with a passion
              for front-end development and UI/UX design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={resumeLink}
                download="Prabhath_Resume.pdf"
                className="bg-purple-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border border-purple-600/50 text-purple-600 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600/10 hover:text-gray"
              >
                Contact Me
              </a>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start mt-6 sm:mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="text-xl sm:text-2xl text-gray-400 hover:text-blue-500 transition-colors" />
                </a>
              ))}
              <a href="#projects" className="relative group" aria-label="View Projects">
                <FaFolderOpen className="text-xl sm:text-2xl text-gray-400 hover:text-yellow-500 transition-colors" />
                <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                  View Projects
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Avatar Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 rounded-full border-[4px] sm:border-[6px] border-transparent border-t-purple-500 border-b-purple-500 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border-[4px] sm:border-[6px] border-transparent border-l-purple-500 border-r-purple-500 animate-spin-reverse"></div>
              <div className="avatar w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-purple-500 relative z-10">
                <img
                  src={profileImage}
                  alt="Prabhath Subhashana"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};