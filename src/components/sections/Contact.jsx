import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import contactImage from "../../assets/5124556.jpg"; // Import your image
import toast from 'react-hot-toast';

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
    console.log("Form submitted!");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log("Email sent successfully:", result);
        toast.success("Message Sent!", {
          style: {
            background: '#9333ea', 
            color: '#fff', 
          },
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Oops! Something went wrong. Please try again.", {
          style: {
            background: '#FF5252', 
            color: '#fff', 
          },
        });
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
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg text-center">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Left Side: Contact Form */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
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
                {/* Centered Button */}
                <div className="form-group flex justify-center">
                  <button type="submit" className="contact-btn">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};