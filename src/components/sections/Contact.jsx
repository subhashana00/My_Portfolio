import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaFacebook, FaDribbble, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_o4t2jbe";
  const TEMPLATE_ID = "template_3w9nmqj";
  const PUBLIC_KEY = "JjZ4RiVAm-flMX0_n";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log form data for debugging

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // Log the error for debugging
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Contact Form */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                      placeholder="Name*"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                      placeholder="Email*"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Message*"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn-border-slide w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Contact Information */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
              <div className="contact-add-head">
                <h3 className="text-2xl font-bold text-blue-400">Prabhath Subhashana</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2">UI/UX Designer & Developer</p>
              </div>
              <div className="contact-add-info mt-8">
                <div className="single-contact-add-info">
                  <h3 className="text-gray-400 font-medium">Phone</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">+94 77 123 4567</p>
                </div>
                <div className="single-contact-add-info mt-6">
                  <h3 className="text-gray-400 font-medium">Email</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">prabhath@example.com</p>
                </div>
                <div className="single-contact-add-info mt-6">
                  <h3 className="text-gray-400 font-medium">Website</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">www.prabhath.com</p>
                </div>
              </div>
              <div className="hm-foot-icon mt-8">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FaFacebook className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FaDribbble className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FaTwitter className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FaInstagram className="text-xl" />
                    </a>
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