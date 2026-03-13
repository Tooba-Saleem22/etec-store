import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Checkout = ({ product, quantity, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const totalPrice = product.price * quantity;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      productName: product.name,
      price: product.price,
      quantity: quantity,
      total: totalPrice,
      ...formData,
    };

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert("Order Placed Successfully!");
        onClose();
        setFormData({
          name: "",
          email: "",
          address: "",
          city: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Server error, try again later");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4 py-6">
      <div
        className="
          relative
          bg-white 
          w-full 
          max-w-full 
          sm:max-w-md
          md:max-w-4xl
          max-h-[90vh] 
          sm:max-h-[80vh]
          overflow-y-auto 
          rounded-xl 
          p-5 md:p-8 
          grid md:grid-cols-2 gap-6 md:gap-10
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl z-10"
        >
          <FaTimes />
        </button>

        {/* LEFT - FORM */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Customer Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 md:gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              value={formData.address}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 rounded-3xl mt-4 w-full"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="bg-gray-100 p-4 md:p-6 rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 md:h-44 object-cover rounded mb-3"
            />

            <h3 className="font-semibold">{product.name}</h3>

            <p className="text-gray-600">Price: ${product.price}</p>

            <p className="text-gray-600">Quantity: {quantity}</p>

            <hr className="my-3 md:my-4" />

            <p className="text-lg md:text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-500 underline md:hidden"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
