import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";

export const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "ReactJS", icon: FaReact },
    { name: "Figma", icon: FaFigma },
  ];

  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "SQL", icon: FaDatabase },
    { name: ".NET MVC", icon: FaMicrosoft },
  ];

  return (
    <section id="skill" className="min-h-screen flex items-center justify-center py-12 sm:py-20 bg-gray-900">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            Skills
          </h2>

          <div className="glass rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Frontend Skills */}
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-500">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {frontendSkills.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-300"
                    >
                      <tech.icon className="text-2xl sm:text-4xl text-blue-500 group-hover:text-blue-400 transition-colors" />
                      <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-500">Backend</h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {backendSkills.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 hover:shadow-[0_4px_12px_rgba(147,51,234,0.3)] transition-all duration-300"
                    >
                      <tech.icon className="text-2xl sm:text-4xl text-purple-500 group-hover:text-purple-400 transition-colors" />
                      <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};