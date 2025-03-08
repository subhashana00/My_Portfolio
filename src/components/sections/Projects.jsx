import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Virtual Try-On + E-commerce Website",
      description:
        "Developing a responsive Clothing E-commerce website using MERN stack, featuring account creation, product browsing, cart management, and secure checkout for users, and an admin panel for product and order management.",
      images: [
        "https://via.placeholder.com/600x400", // Replace with actual image paths
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      title: "Restaurant Website (The Gallery Café)",
      description:
        "Developed a dynamic restaurant website with online table reservations, food ordering, and user registration. The admin panel includes tools for managing menus, reservations, and customer interactions, using MSSQL and Entity Framework for data storage.",
      images: [
        "https://via.placeholder.com/600x400", // Replace with actual image paths
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["ASP.NET MVC", "MSSQL", "Entity Framework"],
      link: "#",
    },
    {
      title: "Coffee Shop Mobile App UI Design",
      description:
        "Designed a mobile app UI for a coffee shop with features like user login, home screen, product categories, item details, cart, and delivery options, focused on a seamless user experience and intuitive navigation.",
      images: [
        "https://via.placeholder.com/600x400", // Replace with actual image paths
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["Figma"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS.",
      images: [
        "https://via.placeholder.com/600x400", // Replace with actual image paths
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["React", "Tailwind CSS", "Figma"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-gray-900 overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            Featured Projects
          </h2>

          {/* Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1} // Default: 1 slide for mobile
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                // Responsive breakpoints
                640: {
                  slidesPerView: 1, // 1 slide for small screens
                },
                768: {
                  slidesPerView: 2, // 2 slides for tablets and desktops
                },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Nested Swiper for Project Images */}
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      className="mb-4 rounded-lg overflow-hidden"
                    >
                      {project.images.map((image, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={image}
                            alt={`${project.title} Image ${i + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full hover:bg-gray-900 transition">
              <FaChevronLeft className="text-white text-xl" />
            </div>
            <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full hover:bg-gray-900 transition">
              <FaChevronRight className="text-white text-xl" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};