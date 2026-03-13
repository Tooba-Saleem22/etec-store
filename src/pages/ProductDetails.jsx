import React, { useState } from "react";
import Checkout from "../components/Checkout";

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

          <div>
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

            <button
              onClick={() => setShowCheckout(true)}
              className="w-full py-4 bg-black text-white rounded-3xl"
            >
              Buy Now
            </button>
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
