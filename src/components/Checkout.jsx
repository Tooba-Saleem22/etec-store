import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Checkout = ({ product, quantity, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const totalPrice = product.price * quantity;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4 py-6">
      {/* POPUP */}
      <div
        className="
          relative
          bg-white 
          w-full 
          max-w-full 
          sm:max-w-md   /* mobile width smaller */
          md:max-w-4xl  /* desktop width normal */
          max-h-[90vh] 
          sm:max-h-[80vh] /* mobile height smaller */
          overflow-y-auto 
          rounded-xl 
          p-5 md:p-8 
          grid md:grid-cols-2 gap-6 md:gap-10
        "
      >
        {/* CROSS BUTTON */}
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
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-3xl mt-4 w-full"
            >
              Place Order
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

          {/* mobile cancel */}
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
