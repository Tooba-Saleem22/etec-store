import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate("/products", { state: { category } });
  };

  // Individual slide-up animation
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Parent stagger container
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      className="container mx-auto px-6 md:px-12 my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Heading + Description */}
      <motion.div className="text-left mb-12" variants={slideUp}>
        <h2 className="text-4xl font-light mb-4 font-satoshi">
          Browse by Categories
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-satoshi">
          Explore our diverse range of categories tailored <br /> to meet your
          specific needs and interests.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* All Products */}
        <motion.div
          className="bg-[#f8f6f7] rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:-translate-y-1 transition duration-200 transform"
          variants={slideUp}
        >
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-2 text-black font-satoshi">
              All Products
            </h3>
            <p className="text-black mb-4 font-satoshi">
              Discover endless possibilities with our All Products category.
              Shop now for everything you need in one convenient place.
            </p>
            <button
              onClick={() => handleClick("All Products")}
              className="px-5 py-2 border border-black text-black bg-transparent rounded-3xl hover:bg-black hover:text-white transition transform hover:scale-105 duration-200 font-satoshi"
            >
              Browse All Products
            </button>
          </div>
          <img
            src="https://framerusercontent.com/images/yD047Kl5EbewEFW5RyrRcTsrA.png"
            alt="All Products"
            className="w-full h-96 object-cover mt-4"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div className="flex flex-col gap-6" variants={slideUp}>
          {/* Displays */}
          <motion.div
            className="bg-[#f8f6f7] rounded-lg shadow-lg p-6 flex flex-col md:flex-row-reverse items-center gap-4 cursor-pointer hover:scale-105 hover:-translate-y-1 transition duration-200 transform"
            onClick={() => handleClick("Displays")}
            variants={slideUp}
          >
            <img
              src="/edosplay exl.avif"
              alt="Displays"
              className="w-full md:w-48 h-96 object-cover rounded-lg"
            />
            <div className="text-left md:text-left flex-1">
              <h4 className="text-xl font-medium mb-2 font-satoshi">
                Displays
              </h4>
              <p className="text-gray-700 mb-2 font-satoshi">
                Experience crystal-clear clarity and vibrant visuals with our
                Displays.
              </p>
              <button
                onClick={() => handleClick("Displays")}
                className="px-4 py-1 border border-black text-black bg-transparent rounded-3xl hover:bg-black hover:text-white transition transform hover:scale-105 duration-200 text-sm font-satoshi"
              >
                Check Displays
              </button>
            </div>
          </motion.div>

          {/* Headphones & Phones */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Headphones */}
            <motion.div
              className="bg-[#f8f6f7] rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 hover:-translate-y-1 transition duration-200 transform flex-1"
              onClick={() => handleClick("Headphones")}
              variants={slideUp}
            >
              <img
                src="/headphone 122.avif"
                alt="Headphones"
                className="w-40 h-48 object-cover rounded-lg mb-3"
              />
              <button
                onClick={() => handleClick("Headphones")}
                className="px-4 py-1 border border-black text-black bg-transparent rounded-3xl hover:bg-black hover:text-white transition transform hover:scale-105 duration-200 text-sm font-satoshi"
              >
                Headphones
              </button>
            </motion.div>

            {/* Phones */}
            <motion.div
              className="bg-[#f8f6f7] rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 hover:-translate-y-1 transition duration-200 transform flex-1"
              onClick={() => handleClick("Watches")}
              variants={slideUp}
            >
              <img
                src="/iphone 15black.avif"
                alt="Phones"
                className="w-40 h-48 object-cover rounded-lg mb-3"
              />
              <button
                onClick={() => handleClick("Watches")}
                className="px-4 py-1 border border-black text-black bg-transparent rounded-3xl hover:bg-black hover:text-white transition transform hover:scale-105 duration-200 text-sm font-satoshi"
              >
                Phones
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoriesSection;
