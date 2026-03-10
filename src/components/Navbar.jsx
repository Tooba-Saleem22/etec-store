import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll-based hide/show
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white pt-1 transition-transform duration-300 z-50 font-sans ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Brand */}
          <Link to="/" className="font-medium text-3xl ml-10">
            etec
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-[18px] leading-[23px] font-light text-gray-800">
            {["Home", "All Products", "About Us", "FAQ", "Contact"].map(
              (link, idx) => (
                <Link
                  key={idx}
                  to={
                    link === "Home"
                      ? "/"
                      : link === "All Products"
                        ? "/products"
                        : link === "About Us"
                          ? "/about"
                          : link === "FAQ"
                            ? "/faq"
                            : "/contact"
                  }
                  className="hover:text-black transition-transform transform hover:scale-105"
                >
                  {link}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <div className="w-6 h-1 bg-gray-800 mb-1 rounded"></div>
            <div className="w-6 h-1 bg-gray-800 mb-1 rounded"></div>
            <div className="w-6 h-1 bg-gray-800 rounded"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 font-sans ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-2xl font-bold">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-start p-6 space-y-6 text-[18px] font-light">
          {["Home", "All Products", "About Us", "FAQ", "Contact"].map(
            (link, idx) => (
              <Link
                key={idx}
                to={
                  link === "Home"
                    ? "/"
                    : link === "All Products"
                      ? "/products"
                      : link === "About Us"
                        ? "/about"
                        : link === "FAQ"
                          ? "/faq"
                          : "/contact"
                }
                onClick={toggleMobileMenu}
                className="hover:text-black transition-transform transform hover:scale-105"
              >
                {link}
              </Link>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
