import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Newsletter from "../sections/Newsletter";
import productsData from "../data/products";

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

  const [products, setProducts] = useState(productsData); // frontend products by default
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // FETCH PRODUCTS FROM BACKEND (optional, for future dynamic data)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) setProducts(data); // replace only if API has products
        }
      } catch (error) {
        console.log("Backend fetch failed, using frontend products", error);
      }
    };

    fetchProducts();
  }, []);

  // CATEGORY FROM OTHER PAGES
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(
        location.state.category === "All"
          ? "All Products"
          : location.state.category,
      );
    }
  }, [location.state]);

  // FILTER PRODUCTS
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(
          (p) =>
            p.category &&
            p.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div className="bg-white text-black pt-32 font-sans min-h-screen">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-3xl md:text-6xl font-light mb-2">Shop</h1>
        <p className="text-gray-700 text-xl font-light mb-8">
          Check out our full collection of products tailored to your needs
        </p>

        {/* CATEGORY BUTTONS */}
        <div className="flex gap-4 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-lg border border-black transition ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product } })
                }
                className="bg-[#f8f6f7] rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <div className="text-center p-4">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="font-bold mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Newsletter />
    </div>
  );
};

export default AllProducts;
