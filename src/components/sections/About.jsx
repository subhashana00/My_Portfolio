import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "ReactJS", "Figma"];
  const backendSkills = ["Node.js", "Python", "Java", "SQL", ".NET MVC"];

  return (
    <section id="about" className="min-h-screen items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a BSc (Hons) Software Engineering Undergraduate with a passion for front-end development and UI/UX design. I am currently pursuing a Higher Diploma in Computing and Software Engineering to enhance my expertise in programming and software development. My goal is to become a proficient full-stack developer while delivering innovative and user-focused solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BSc (Hons) Software Engineering</strong> - ICBT Campus (Awarded by Cardiff Metropolitan University) - Expected Completion: Aug 2027
                </li>
                <li>
                  Relevant Coursework: Software Development, Web Development, Database Management, UI/UX Design
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Pharmacy Regulatory & IT Assistant at Pharma Associates (Aug 2022 – Dec 2024)
                  </h4>
                  <p>
                    Assisted the National Medicines Regulatory Authority (NMRA) with drug licensing, approval, and document submission, ensuring compliance with regulations. Supported the Regulatory Department as an IT assistant, streamlining workflows through technical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};