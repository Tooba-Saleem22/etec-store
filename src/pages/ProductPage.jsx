import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  const { id } = useParams(); // URL se id mil rahi hai

  const product = products.find(
    (p) => p.id === Number(id), // id match karwa rahe hain
  );

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
