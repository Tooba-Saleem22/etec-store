import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import productsData from "../data/products"; // static frontend products

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 1️⃣ Check if product was passed from navigate state
    if (location.state?.product) {
      setProduct(location.state.product);
      return;
    }

    // 2️⃣ Try fetching from backend API (future dynamic data)
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setProduct(data);
            return;
          }
        }
      } catch (err) {
        console.log("Backend fetch failed, using frontend data", err);
      }

      // 3️⃣ Fallback to frontend static data
      const found = productsData.find((p) => String(p.id) === String(id));
      setProduct(found || null);
    };

    fetchProduct();
  }, [id, location.state]);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
