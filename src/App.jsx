import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
