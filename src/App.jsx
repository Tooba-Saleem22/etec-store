import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Content starts below navbar */}
      <div className="pt-20 md:pt-2">
        <Routes>
          {/* Public site pages */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin dashboard routes */}
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
