import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setEmail(""); // input clear ho jaye
      } else {
        setMessage(data.message || "Subscription failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again later");
    }
  };

  return (
    <motion.section
      className="py-10 px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto bg-[#f8f6f7] rounded-2xl px-8 py-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-4"
          variants={slideUp}
        >
          Subscribe to our email <br /> newsletter and get 15% off
        </motion.h2>
        <motion.p className="text-gray-700 mb-8" variants={slideUp}>
          Be the first to know about the latest in tech trends, exclusive
          offers, and exciting product launches by subscribing to our
          newsletter.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
          variants={slideUp}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full border border-black bg-transparent rounded-3xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-black text-white rounded-3xl hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </motion.div>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </div>
    </motion.section>
  );
};

export default Newsletter;
