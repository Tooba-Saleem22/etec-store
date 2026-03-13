import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Checkout from "../components/Checkout";
import productsData from "../data/products"; // aapke static products

const ProductDetails = () => {
  const { id } = useParams(); // URL se id
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    // Try to fetch from backend first (optional)
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          // agar backend fail ho jaye, fallback to static
          const staticProduct = productsData.find((p) => p.id === parseInt(id));
          setProduct(staticProduct || null);
        }
      } catch (err) {
        // backend error: fallback to static
        const staticProduct = productsData.find((p) => p.id === parseInt(id));
        setProduct(staticProduct || null);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="pt-32 text-center">Loading product...</p>;

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
