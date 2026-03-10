import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f6f7] py-10 px-6 md:px-12 font-satoshi">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Column 1 - Logo + Text + Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">ETEC</h3>

          <p className="text-gray-700">
            Selling premium products, designed to elevate your everyday
            experience.
          </p>

          <div className="border-t border-gray-300 w-32"></div>

          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Column 2 - Pages */}
        <div className="text-center">
          <div className="grid grid-cols-2 gap-y-2 text-gray-700 justify-items-center">
            <p className="cursor-pointer hover:text-black">Home</p>
            <p className="cursor-pointer hover:text-black">Shop</p>
            <p className="cursor-pointer hover:text-black">About</p>
            <p className="cursor-pointer hover:text-black">Blog</p>
            <p className="cursor-pointer hover:text-black">Support</p>
            <p className="cursor-pointer hover:text-black">FAQ</p>
            <p className="cursor-pointer hover:text-black">Contact</p>
            <p className="cursor-pointer hover:text-black">Product</p>
            <p className="cursor-pointer hover:text-black">404</p>
          </div>
        </div>

        {/* Column 3 - Map */}
        <div className="flex justify-center">
          <div className="relative w-72 rounded-lg overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48 border-0"
              loading="lazy"
              style={{ filter: "grayscale(80%) brightness(105%)" }}
            ></iframe>

            <div className="absolute bottom-3 left-3 bg-white px-3 py-1 text-sm rounded shadow">
              Our Location
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
