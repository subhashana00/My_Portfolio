import { RevealOnScroll } from "../RevealOnScroll";
import aboutGif from "../../assets/1709674661110-1.gif"; 

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Waves */}
        <div className="absolute w-[350px] h-[350px] -top-10 -right-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[54%_46%_42%_58%_/_60%_58%_42%_40%] animate-vawe"></div>
        <div className="absolute w-[350px] h-[350px] -bottom-10 -left-15 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[54%_46%_42%_58%_/_60%_58%_42%_40%] animate-vawe"></div>

        {/* Dots */}
        <div className="absolute inset-0">
          <span className="absolute w-[75px] h-[75px] top-[10%] left-[calc(100%-360px)] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[38%_62%_55%_45%_/_32%_53%_47%_68%] animate-vawe"></span>
          <span className="absolute w-[50px] h-[50px] top-[15px] left-[180px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[38%_62%_33%_67%_/_60%_53%_47%_40%] animate-vawe transform rotate-90"></span>
          <span className="absolute w-[80px] h-[80px] right-[180px] bottom-[20px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[38%_62%_55%_45%_/_52%_53%_47%_48%] animate-vawe "></span>
          <span className="absolute w-[20px] h-[20px] bottom-[50px] left-[240px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[38%_62%_55%_45%_/_52%_53%_47%_48%] animate-vawe "></span>
          <span className="absolute w-[25px] h-[25px] right-[280px] bottom-[80px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[38%_62%_55%_45%_/_52%_53%_47%_48%] animate-vawe "></span>
          <span className="absolute w-[25px] h-[25px] top-[6%] left-[calc(100%-400px)] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[38%_62%_55%_45%_/_52%_53%_47%_48%] animate-vawe "></span>
        </div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent animate-gradient-bg text-center">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side: GIF */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                <img
                  src={aboutGif}
                  alt="About Me GIF"
                  className="w-full max-w-md rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* About Me Card */}
              <div className="glass rounded-xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  I am a BSc (Hons) Software Engineering Undergraduate with a passion for front-end development and UI/UX design. I am currently pursuing a Higher Diploma in Computing and Software Engineering to enhance my expertise in programming and software development. My goal is to become a proficient full-stack developer while delivering innovative and user-focused solutions.
                </p>
              </div>

              {/* Education Card */}
              <div className="glass rounded-xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_4px_20px_rgba(147,51,234,0.2)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-200">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>BSc (Hons) Software Engineering</strong> - ICBT Campus (Awarded by Cardiff Metropolitan University) - Expected Completion: Aug 2027
                  </li>
                  <li>
                    Relevant Coursework: Software Development, Web Development, Database Management, UI/UX Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};