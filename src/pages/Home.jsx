import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturedProducts from "../sections/FeaturedProducts";
import CategoriesSection from "../sections/CategoriesSection";
import Newsletter from "../sections/Newsletter";

const Home = () => {
  const navigate = useNavigate();

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-hidden font-sans">
      {/* HERO SECTION */}
      <motion.section
        className="container mx-auto px-6 md:px-14 pt-32 pb-20 flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <div className="flex-1 w-full text-left">
          {/* HEADING */}
          <motion.h1
            className="text-black mb-6 text-3xl sm:text-4xl md:text-6xl font-medium leading-tight"
            variants={slideUp}
          >
            Elevate your lifestyle <br className="hidden md:block" />
            with premium essentials.
          </motion.h1>

          {/* TEXT + BUTTON */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-6"
            variants={slideUp}
          >
            <p className="text-black max-w-lg text-base sm:text-lg md:text-xl">
              Elevate your daily routine with our meticulously selected premium
              goods and curated essentials.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="w-full md:w-auto md:ml-auto px-8 py-4 border border-black text-black rounded-3xl hover:bg-black hover:text-white transition transform hover:scale-105 duration-200"
            >
              Browse All Products
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* CATEGORIES */}
      <CategoriesSection />

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
};

export default Home;
