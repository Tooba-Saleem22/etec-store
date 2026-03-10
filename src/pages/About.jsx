import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaShieldAlt, FaCreditCard } from "react-icons/fa";
import Newsletter from "../sections/Newsletter";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white text-black pt-32 font-sans min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
      variants={staggerContainer}
    >
      {/* Top Section: Text right */}
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start gap-12">
        <motion.div className="flex-1 md:order-2" variants={slideUp}>
          <h1 className="text-4xl md:text-7xl font-small">
            Accessible excellence: <br />
            Perfect tech for everyone!
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mt-4">
            With over two decades of expertise, we've meticulously crafted{" "}
            <br />
            collections that epitomize enduring quality and technological
            innovation, catering to the diverse needs of our clients.
          </p>
        </motion.div>
      </div>

      {/* Centered Top Image */}
      <motion.div
        className="flex justify-center mb-6 md:mb-0"
        variants={slideUp}
      >
        <img
          src="/about1.jpg"
          alt="About ETEC"
          className="w-full max-w-[90%] h-[400px] md:h-[500px] rounded-lg shadow-lg object-cover mx-auto"
        />
      </motion.div>

      {/* Info Cards Section */}
      <motion.div
        className="bg-white rounded-xl mx-6 md:mx-14 py-6 mt-5 flex flex-col md:flex-row justify-between items-start gap-4"
        variants={slideUp}
      >
        <div className="flex flex-col md:flex-col items-start gap-2 md:gap-2 flex-1 text-left">
          <FaTruck className="text-4xl md:text-2xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl md:text-base">
              Free Shipping
            </h3>
            <p className="text-gray-700 text-lg md:text-sm">
              $24+ orders ship free
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-col items-start gap-3 md:gap-2 flex-1 text-left">
          <FaCreditCard className="text-4xl md:text-2xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl md:text-base">
              Secure Payments
            </h3>
            <p className="text-gray-700 text-lg md:text-sm">
              Trusted payment options
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-col items-start gap-3 md:gap-2 flex-1 text-left">
          <FaShieldAlt className="text-4xl md:text-2xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl md:text-base">
              45 Days Free Return
            </h3>
            <p className="text-gray-700 text-lg md:text-sm">
              Easy, risk-free returns
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3-Column Card Section */}
      <motion.div
        className="bg-white rounded-xl mx-4 md:mx-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={slideUp}
      >
        {/* Column 1 */}
        <div className="flex flex-col items-start text-left gap-4">
          <img
            src="/about2.avif"
            alt="Exclusive Range"
            className="w-full h-56 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-2">Exclusive Range</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Immerse yourself in our meticulously curated selection, backed by
            over 20 years of industry experience.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-start text-left gap-4">
          <img
            src="/about3.avif"
            alt="Enduring Innovation"
            className="w-full h-56 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-2">Enduring Innovation</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Our products transcend fleeting trends, embodying timeless
            innovation that ensures they remain relevant and cutting-edge for
            years.
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-start text-left gap-4">
          <img
            src="/about4.avif"
            alt="Ethical Sourcing"
            className="w-full h-56 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-2">Ethical Sourcing</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Shop with confidence knowing that our products are sourced from
            reputable factories worldwide, adhering to stringent compliance
            standards.
          </p>
        </div>
      </motion.div>

      {/* Premium Tech Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-12 mt-12"
        variants={slideUp}
      >
        {/* Left Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/about5.avif"
            alt="Premium Tech"
            className="w-full max-w-[90%] h-[350px] md:h-[450px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Premium Tech Selection
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Our pursuit of excellence involves extensive exploration of top-tier
            factories globally, ensuring our tech lineup mirrors the standards
            upheld by renowned brands. We forge strong partnerships with these
            facilities, prioritizing factors like sustainability and ethical
            production practices.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 rounded-3xl border border-black bg-transparent hover:scale-105 transition transform"
          >
            Check Our Store
          </button>
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <Newsletter />
    </motion.div>
  );
};

export default About;
