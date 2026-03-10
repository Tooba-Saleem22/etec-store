import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const featuredItems = [
  {
    id: 1,
    name: "Headphones",
    image: "/headphone e11.avif",
    category: "Headphones",
  },
  { id: 2, name: "eWatches", image: "/ewatch sf4.avif", category: "Watches" },
  {
    id: 3,
    name: "eDisplays",
    image: "/eDisplay XG.avif",
    category: "Displays",
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className="container mx-auto px-6 md:px-12 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-light mb-12 text-center md:text-left"
        variants={slideUp}
      >
        Featured Products
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredItems.map((item) => (
          <motion.div
            key={item.id}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() =>
              navigate("/products", { state: { category: item.category } })
            }
            variants={slideUp}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />

            <h3 className="text-left mt-4 text-lg md:text-xl font-light">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
