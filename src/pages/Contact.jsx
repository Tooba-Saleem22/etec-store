import React, { useState } from "react";
import { motion } from "framer-motion";
import Newsletter from "../sections/Newsletter";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="bg-white text-black pt-32 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading Section */}
      <div className="container mx-auto px-6 md:px-12 py-6 text-left">
        <h1 className="text-4xl md:text-6xl font-small mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We're here to assist you with any inquiries, feedback, or assistance
          you may
          <br /> need. Whether you have questions about products, orders, or
          general
          <br /> inquiries, our dedicated customer support team is ready to
          help.
        </p>
      </div>

      {/* Gray Box Section with Columns */}
      <div className="bg-[#f8f6f7] rounded-xl mx-6 md:mx-12 py-12 px-6 md:px-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Phone number</h2>
            <p className="text-gray-700 text-lg">+ 123 456 789</p>
            <p className="text-gray-700 text-sm md:text-base">
              Call our team directly. We will provide information, answer
              technical questions, or schedule an appointment.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-6">E-mail</h2>
            <p className="text-gray-700 text-lg">example@gmail.com</p>
            <p className="text-gray-700 text-sm md:text-base">
              Use email to provide information about the project. We will
              respond as soon as possible, providing comprehensive support.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              Drop us a message
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              We're always here to assist you at Etec. Our customer support team
              is dedicated to addressing your inquiries.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-transparent border hover:bg-black hover:text-white border-black rounded-3xl px-6 py-3 hover:scale-105 transition-transform mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </motion.div>
  );
};

export default Contact;
