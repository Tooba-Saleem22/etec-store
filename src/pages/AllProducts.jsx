import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import Newsletter from "../sections/Newsletter";

const categories = [
  "All Products",
  "Headphones",
  "Displays",
  "Watches",
  "Phones",
];

const AllProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Agar FeaturedProducts se category pass hui ho
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Framer Motion variants
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
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
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <motion.h1
          className="text-3xl md:text-6xl font-light mb-2"
          variants={slideUp}
        >
          Shop
        </motion.h1>
        <motion.p
          className="text-gray-700 text-xl font-light mb-8"
          variants={slideUp}
        >
          Check out our full collection of products tailored to your needs
        </motion.p>

        {/* Categories */}
        <motion.div className="flex gap-4 flex-wrap mb-10" variants={slideUp}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-lg border border-black font-medium text-base transition ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-[#f8f6f7] rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 flex flex-col items-center text-center"
              onClick={() => navigate(`/product/${product.id}`)}
              variants={slideUp}
            >
              <img
                src={product.image} // public/images/... path use karo
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-medium">{product.name}</h3>
              <p className="font-bold mt-1">${product.price.toFixed(2)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </motion.div>
  );
};

export default AllProducts;
