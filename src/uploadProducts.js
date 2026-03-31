// uploadProducts.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import products from "./data/products"; // tumhara products.js

const uploadProducts = async () => {
  try {
    const productsCol = collection(db, "products");
    for (const product of products) {
      await addDoc(productsCol, product);
    }
    console.log("All products uploaded successfully!");
  } catch (error) {
    console.error("Error uploading products:", error);
  }
};

uploadProducts();
