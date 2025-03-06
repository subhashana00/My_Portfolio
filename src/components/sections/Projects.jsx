import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Virtual Try-On + E-commerce Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Virtual Try-On + E-commerce Website</h3>
              <p className="text-gray-400 mb-4">
                Developing a responsive Clothing E-commerce website using MERN stack, featuring account creation, product browsing, cart management, and secure checkout for users, and an admin panel for product and order management.
              </p>
              <div>
                {["React", "Node.js", "MongoDB", "Express"].map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project
                </a>
              </div>
            </div>

            {/* Restaurant Website (The Gallery Café) */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Restaurant Website (The Gallery Café)</h3>
              <p className="text-gray-400 mb-4">
                Developed a dynamic restaurant website with online table reservations, food ordering, and user registration. The admin panel includes tools for managing menus, reservations, and customer interactions, using MSSQL and Entity Framework for data storage.
              </p>
              <div>
                {["ASP.NET MVC", "MSSQL", "Entity Framework"].map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project
                </a>
              </div>
            </div>

            {/* Coffee Shop Mobile App UI Design */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Coffee Shop Mobile App UI Design</h3>
              <p className="text-gray-400 mb-4">
                Designed a mobile app UI for a coffee shop with features like user login, home screen, product categories, item details, cart, and delivery options, focused on a seamless user experience and intuitive navigation.
              </p>
              <div>
                {["Figma"].map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};