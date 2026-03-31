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
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Content wrapper */}
      <div>
        <Routes>
          {/* Public site pages */}
          <Route
            path="/"
            element={
              <div className="pt-20 md:pt-2">
                <Home />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="pt-20 md:pt-2">
                <AllProducts />
              </div>
            }
          />
          <Route
            path="/product/:id"
            element={
              <div className="pt-20 md:pt-2">
                <ProductPage />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="pt-20 md:pt-2">
                <About />
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div className="pt-20 md:pt-2">
                <FAQ />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="pt-20 md:pt-2">
                <Contact />
              </div>
            }
          />
          {/* Admin dashboard route */}
          <Route
            path="/dashboard/*"
            element={
              // Adjust top padding according to navbar height
              <div className="pt-[99px]">
                <Dashboard />
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
