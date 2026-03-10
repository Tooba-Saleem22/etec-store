// public\eDisplay XG.avif,
// public\edisplay xs.avif,
// public\edosplay exl.avif,
// public\ewatch sf4.avif,
// public\ewatch white sf.avif
// public\ewtach.avif
// public\headphone 23c.avif
// public\headphone 122.avif
// public\headphone e11.avif
// public\headphone w96.avif
// public\headphones or-27n.avif
// public\iphone 15black.avif
// public\iphone 15red.avif
// public\phone.avif

const products = [
  // ----------------- Headphones -----------------
  {
    id: 1,
    name: "Headphone 23C",
    category: "Headphones",
    image: "/headphone 23c.avif",
    price: 129.99,
    description: "High-quality sound with comfortable fit and noise isolation.",
    qualities: ["Bluetooth 5.0", "Over-ear", "20hr battery life"],
  },
  {
    id: 2,
    name: "Headphone 122",
    category: "Headphones",
    image: "/headphone 122.avif",
    price: 99.99,
    description: "Compact design with premium audio clarity for everyday use.",
    qualities: ["Wired & Wireless", "Lightweight", "Built-in mic"],
  },
  {
    id: 3,
    name: "Headphone E11",
    category: "Headphones",
    image: "/headphone e11.avif",
    price: 149.99,
    description: "Powerful bass and sleek design perfect for gaming and music.",
    qualities: ["Over-ear", "Noise-cancelling", "Bluetooth 5.2"],
  },
  {
    id: 4,
    name: "Headphone W96",
    category: "Headphones",
    image: "/headphone w96.avif",
    price: 79.99,
    description:
      "Affordable headphones with clear sound and lightweight build.",
    qualities: ["Wired", "On-ear", "Adjustable headband"],
  },
  {
    id: 5,
    name: "Headphones OR-27N",
    category: "Headphones",
    image: "/headphones or-27n.avif",
    price: 189.99,
    description: "Premium headphones with studio-level audio quality.",
    qualities: ["Over-ear", "Noise Isolation", "Wireless"],
  },

  // ----------------- Displays -----------------
  {
    id: 6,
    name: "eDisplay XG",
    category: "Displays",
    image: "/eDisplay XG.avif",
    price: 649.99,
    description:
      "High-resolution display with vibrant colors and ultra-wide viewing angles.",
    qualities: ["4K UHD", "27-inch", "HDR10"],
  },
  {
    id: 7,
    name: "eDisplay XS",
    category: "Displays",
    image: "/edisplay xs.avif",
    price: 399.99,
    description: "Compact display ideal for workstations and home use.",
    qualities: ["Full HD", "21.5-inch", "IPS Panel"],
  },
  {
    id: 8,
    name: "eDisplay EXL",
    category: "Displays",
    image: "/edosplay exl.avif",
    price: 549.99,
    description:
      "Premium display with sharp image quality and adjustable stand.",
    qualities: ["QHD", "24-inch", "Adjustable Tilt"],
  },

  // ----------------- Watches -----------------
  {
    id: 9,
    name: "eWatch SF4",
    category: "Watches",
    image: "/ewatch sf4.avif",
    price: 349.99,
    description: "Smartwatch with health tracking and notifications.",
    qualities: ["Heart rate monitor", "GPS", "Water-resistant"],
  },
  {
    id: 10,
    name: "eWatch White SF",
    category: "Watches",
    image: "/ewatch white sf.avif",
    price: 399.99,
    description:
      "Elegant smartwatch with premium finish and customizable straps.",
    qualities: ["Sleep tracking", "Notifications", "Fitness apps"],
  },
  {
    id: 11,
    name: "eWatch",
    category: "Watches",
    image: "/ewtach.avif",
    price: 299.99,
    description:
      "Entry-level smartwatch with essential features and long battery life.",
    qualities: ["Step tracker", "Call alerts", "Lightweight"],
  },
  {
    id: 12,
    name: "iPhone 15 Black",
    category: "Phones",
    image: "/iphone 15black.avif",
    price: 999.99,
    description:
      "Latest smartphone with sleek design and powerful performance.",
    qualities: ["iOS", "Face ID", "128GB storage"],
  },
  {
    id: 13,
    name: "iPhone 15 Red",
    category: "Phones",
    image: "/iphone 15red.avif",
    price: 999.99,
    description:
      "Red edition iPhone 15 with premium camera and smooth display.",
    qualities: ["iOS", "Face ID", "256GB storage"],
  },
  {
    id: 14,
    name: "Phone",
    category: "Phones",
    image: "/phone.avif",
    price: 599.99,
    description:
      "Stylish smartphone with high-resolution display and fast charging.",
    qualities: ["Android", "Dual SIM", "Fast Charging"],
  },
];

export default products;
