import { RevealOnScroll } from "../RevealOnScroll";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiDotnet, SiMongodb } from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "SQL", icon: <SiMongodb className="text-green-600" /> },
    { name: ".NET MVC", icon: <SiDotnet className="text-purple-500" /> },
  ];

  return (
    <section id="about" className="min-h-screen items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a BSc (Hons) Software Engineering Undergraduate with a passion for front-end development and UI/UX design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <div key={key} className="flex items-center space-x-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <div key={key} className="flex items-center space-x-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                      {skill.icon}
                      <span>{skill.name}</span>
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