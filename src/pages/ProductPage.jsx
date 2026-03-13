import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
