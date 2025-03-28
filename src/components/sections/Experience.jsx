import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const experiences = [
    {
      period: "Aug 2022 – Dec 2024",
      title: "Pharmacy Regulatory & IT Assistant",
      company: "Pharma Associates",
      location: "Colombo, Sri Lanka",
      description:
        "Assisted the National Medicines Regulatory Authority (NMRA) with drug licensing, approval, and document submission, ensuring compliance with regulations. Supported the Regulatory Department as an IT assistant, streamlining workflows through technical solutions.",
    },
    {
      period: "Jan 2025 – Present",
      title: "UI/UX Designer",
      company: "Fiverr",
      location: "Sri Lanka",
      description:
        "Designed user interfaces and prototypes for web and mobile applications. Conducted user research and usability testing to improve product designs.",
    },
    {
      period: "Jan 2025 – Present",
      title: "Frontend Developer Intern",
      company: "StarLit Global",
      location: "Remote, Sri Lanka",
      description:
        "Developed responsive web applications using React, HTML, CSS, and JavaScript. Collaborated with the design team to implement user interfaces and improve user experience.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-12 sm:py-20 bg-gray-100/5">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            Experience
          </h2>

          {/* Mobile View: Column Layout */}
          <div className="block sm:hidden space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-blue-500/10 border-l-4 border-blue-500 hover:-translate-y-1 transition-all"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-500">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-300">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-400">{exp.location}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Timeline Layout */}
          <div className="hidden sm:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center justify-between w-full`}
                  >
                    {/* Timeline Dot */}
                    <div className="relative w-6 h-6 bg-purple-500 rounded-full z-10">
                      <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping"></div>
                    </div>

                    {/* Experience Content */}
                    <div
                      className={`w-[45%] p-6 rounded-lg ${
                        index % 2 === 0
                          ? "bg-blue-500/10 border-l-4 border-blue-500"
                          : "bg-purple-500/10 border-r-4 border-purple-500"
                      } hover:-translate-y-1 transition-all`}
                    >
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-blue-500">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-300">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                        <p className="text-sm text-gray-400">{exp.period}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};