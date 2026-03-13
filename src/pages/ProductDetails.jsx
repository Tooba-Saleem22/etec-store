import React, { useState } from "react";
import Checkout from "../components/Checkout";
import { FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <div className="container mx-auto px-6 md:px-14 py-32">
        <div className="flex flex-col md:flex-row gap-12">
          <img
            src={product.image}
            alt={product.name}
            className="w-[450px] rounded-xl shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <p className="text-3xl font-bold mb-6">${product.price}</p>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-4 py-2 border"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full py-4 bg-black text-white rounded-3xl mb-4 transform transition-transform duration-200 hover:scale-105"
            >
              Buy Now
            </button>

            {/* Delivery & Return Info */}
            <div className="text-center text-gray-500 text-sm leading-relaxed">
              <p>Estimate delivery times: 3-6 days (International)</p>
              <p>
                Return within 45 days of purchase. Duties & taxes are
                non-refundable.
              </p>
            </div>

            {/* Info section below Buy Now */}
            <div className="flex justify-between text-center md:mt-10 pt-4">
              <div className="flex-1 flex flex-col items-center">
                <FaShieldAlt className="text-2xl mb-1" />
                <span className="text-sm font-medium">Warranty</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <FaTruck className="text-2xl mb-1" />
                <span className="text-sm font-medium">Shipping & Delivery</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <FaHeadset className="text-2xl mb-1" />
                <span className="text-sm font-medium">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <Checkout
          product={product}
          quantity={quantity}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
};

export default ProductDetails;
