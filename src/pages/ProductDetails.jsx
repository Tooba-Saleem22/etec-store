import React, { useState } from "react";
import { FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const totalPrice = product.price * quantity;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setShowCheckout(false);
  };

  return (
    <>
      <div className="container mx-auto px-6 md:px-14 py-32 font-satoshi">
        {/* PRODUCT SECTION */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* IMAGE */}
          <div className="md:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-[450px] rounded-xl shadow-lg"
            />
          </div>

          {/* DETAILS */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <p className="text-3xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mb-6">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>

              <span className="text-lg">{quantity}</span>

              <button
                className="px-4 py-2 border rounded"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* BUY BUTTON */}
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full py-4 bg-black text-white rounded-3xl mb-6 hover:opacity-90 font-medium"
            >
              Buy Now
            </button>

            {/* DELIVERY TEXT */}
            <p className="text-gray-400 text-sm mb-8">
              Estimate delivery times: 3-6 days (International)
              <br />
              Return within 45 days of purchase. Duties & taxes are
              non-refundable.
            </p>

            {/* ICON SECTION */}
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <FaShieldAlt />
                <span>Warranty</span>
              </div>

              <div className="flex items-center gap-2">
                <FaTruck />
                <span>Shipping</span>
              </div>

              <div className="flex items-center gap-2">
                <FaHeadset />
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="bg-[#f8f6f7] rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-gray-600 text-sm">$24+ orders ship free</p>
            </div>

            <div>
              <h3 className="font-semibold">Secure Payments</h3>
              <p className="text-gray-600 text-sm">Trusted payment options</p>
            </div>

            <div>
              <h3 className="font-semibold">45 Days Free Return</h3>
              <p className="text-gray-600 text-sm">Easy, risk-free returns</p>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Related Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-[#f8f6f7] rounded-xl p-4 cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />

                <h4 className="font-medium">{item.name}</h4>
                <p className="font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHECKOUT POPUP */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-6">
          <div className="bg-white rounded-xl p-8 w-full max-w-4xl grid md:grid-cols-2 gap-10">
            {/* FORM */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Customer Details</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg"
                />

                <button className="bg-black text-white py-3 rounded-3xl mt-4">
                  Place Order
                </button>
              </form>
            </div>

            {/* ORDER SUMMARY */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="bg-gray-100 p-6 rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />

                <h3 className="font-semibold">{product.name}</h3>

                <p className="text-gray-600">Price: ${product.price}</p>

                <p className="text-gray-600">Quantity: {quantity}</p>

                <hr className="my-4" />

                <p className="text-xl font-bold">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => setShowCheckout(false)}
                className="mt-4 text-sm text-gray-500 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
