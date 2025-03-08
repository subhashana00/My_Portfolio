import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from assets
import gallerycafe1 from "../../assets/gallerycafe1.png";
import gallerycafe2 from "../../assets/gallerycafe2.png";
import gallerycafe3 from "../../assets/gallerycafe3.png";

export const Projects = () => {
  const [filter, setFilter] = useState("*"); // Default filter: show all

  const projects = [
    {
      id: 1,
      title: "Virtual Try-On + E-commerce Website",
      category: "filter-web",
      description:
        "Developing a responsive Clothing E-commerce website using MERN stack, featuring account creation, product browsing, cart management, and secure checkout for users, and an admin panel for product and order management.",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      id: 2,
      title: "Restaurant Website (The Gallery Café)",
      category: "filter-web",
      description:
        "Developed a dynamic restaurant website with online table reservations, food ordering, and user registration. The admin panel includes tools for managing menus, reservations, and customer interactions, using MSSQL and Entity Framework for data storage.",
      images: [gallerycafe1, gallerycafe2, gallerycafe3], // Use imported images
      technologies: ["ASP.NET MVC", "MSSQL", "Entity Framework"],
      link: "#",
    },
    {
      id: 3,
      title: "Coffee Shop Mobile App UI Design",
      category: "filter-uiux",
      description:
        "Designed a mobile app UI for a coffee shop with features like user login, home screen, product categories, item details, cart, and delivery options, focused on a seamless user experience and intuitive navigation.",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["Figma"],
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "filter-web",
      description:
        "Designed and developed a personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS.",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["React", "Tailwind CSS", "Figma"],
      link: "#",
    },
    {
      id: 5,
      title: "Task Management App",
      category: "filter-app",
      description:
        "Developed a task management app with features like task creation, deadlines, and progress tracking. Built with React Native and Firebase.",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["React Native", "Firebase"],
      link: "#",
    },
    {
      id: 6,
      title: "E-Learning Platform",
      category: "filter-web",
      description:
        "Created an e-learning platform with course management, user progress tracking, and payment integration. Built with Django and React.",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      technologies: ["Django", "React", "PostgreSQL"],
      link: "#",
    },
  ];

  const filteredProjects =
    filter === "*"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="portfolio section py-12 sm:py-20 bg-gray-900">
      <RevealOnScroll>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg">
              Featured Projects
            </h2>
          </div>

          {/* Portfolio Filters */}
          <ul
            className="portfolio-filters flex flex-wrap justify-center gap-2 sm:gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li
              className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base transition-colors ${
                filter === "*"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("*")}
            >
              All
            </li>
            <li
              className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base transition-colors ${
                filter === "filter-uiux"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("filter-uiux")}
            >
              UI/UX
            </li>
            <li
              className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base transition-colors ${
                filter === "filter-web"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("filter-web")}
            >
              Web
            </li>
            <li
              className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base transition-colors ${
                filter === "filter-app"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("filter-app")}
            >
              App
            </li>
          </ul>

          {/* Portfolio Items */}
          <div className="mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="200">
            {/* Swiper Carousel for Mobile */}
            <div className="block sm:hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="portfolio-item relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      {/* Nested Swiper for Images */}
                      <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="rounded-lg overflow-hidden"
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

                      {/* Project Info */}
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-white">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 mt-2 text-sm">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, key) => (
                            <span
                              key={key}
                              className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-md transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Project Link */}
                        <div className="mt-4">
                          <a
                            href={project.link}
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full hover:bg-gray-900 transition">
                <FaChevronLeft className="text-white text-xl" />
              </div>
              <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full hover:bg-gray-900 transition">
                <FaChevronRight className="text-white text-xl" />
              </div>
            </div>

            {/* Grid Layout for Desktop */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="portfolio-item relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Nested Swiper for Images */}
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="rounded-lg overflow-hidden"
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

                  {/* Project Info */}
                  <div className="p-4">
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-md transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="mt-4">
                      <a
                        href={project.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};