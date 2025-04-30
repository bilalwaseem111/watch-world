"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./shop.css"; // Ensure this file is inside the same folder or in `public` or `styles`

// Dynamically import BookingForm to avoid SSR issues
const BookingForm = dynamic(() => import("@/components/BookingForm"), {
  ssr: false,
});

const products = [
  {
    id: 1,
    company: "Nike Watch",
    description: "Sporty elegance, crafted for champions.",
    price: "$120",
    imageUrl: "/gold.jpg",
  },
  {
    id: 2,
    company: "Adidas Watch",
    description: "Endurance meets stylish sophistication.",
    price: "$110",
    imageUrl: "/silver.jpg",
  },
  {
    id: 3,
    company: "Apple Watch",
    description: "Smart tech. Sleek design. Perfect balance.",
    price: "$399",
    imageUrl: "/new3.png",
  },
  {
    id: 4,
    company: "Samsung Watch",
    description: "Experience innovation on your wrist.",
    price: "$799",
    imageUrl: "/watchnew4.png",
  },
  {
    id: 5,
    company: "Sony Watch",
    description: "Timeless technology for modern life.",
    price: "$250",
    imageUrl: "/watch5.jpg",
  },
  {
    id: 6,
    company: "Canon Watch",
    description: "Moments in motion, precision in time.",
    price: "$999",
    imageUrl: "/watch6.jpg",
  },
  {
    id: 7,
    company: "Dell Watch",
    description: "Designed to endure. Built to inspire.",
    price: "$850",
    imageUrl: "/watch7.jpg",
  },
  {
    id: 8,
    company: "Lenovo Watch",
    description: "Minimalist design. Maximum performance.",
    price: "$750",
    imageUrl: "/watch8.jpg",
  },
  {
    id: 9,
    company: "Gucci Watch",
    description: "Luxury for every iconic moment.",
    price: "$2200",
    imageUrl: "/watchnew9.png",
  },
  {
    id: 10,
    company: "Rolex Watch",
    description: "A legacy of prestige and precision.",
    price: "$15000",
    imageUrl: "/watch10.jpg",
  },
  {
    id: 11,
    company: "Puma Watch",
    description: "Energy and endurance, captured in time.",
    price: "$95",
    imageUrl: "/watch11.jpg",
  },
  {
    id: 12,
    company: "Asus Watch",
    description: "Explore the world with precision.",
    price: "$1350",
    imageUrl: "/watch12.jpg",
  },
  {
    id: 13,
    company: "Microsoft Watch",
    description: "Where innovation meets sophistication.",
    price: "$999",
    imageUrl: "/watch13.jpg",
  },
  {
    id: 14,
    company: "HP Watch",
    description: "Professional elegance, timeless durability.",
    price: "$699",
    imageUrl: "/watch14.jpg",
  },
  {
    id: 15,
    company: "Zara Watch",
    description: "Trend-driven fashion for your wrist.",
    price: "$80",
    imageUrl: "/watch15.jpg",
  },
  {
    id: 16,
    company: "H&M Watch",
    description: "Everyday essentials redefined for today.",
    price: "$45",
    imageUrl: "/watch16.jpg",
  },
  {
    id: 17,
    company: "Bose Watch",
    description: "The sound of time, elegantly tuned.",
    price: "$199",
    imageUrl: "/watchnew17.png",
  },
  {
    id: 18,
    company: "Under Armour Watch",
    description: "Powerful performance, bold resilience.",
    price: "$60",
    imageUrl: "/watchnew18.png",
  },
  {
    id: 19,
    company: "LG Watch",
    description: "Sharper visuals. Smarter performance.",
    price: "$1799",
    imageUrl: "/watchnew19.png",
  },
  {
    id: 20,
    company: "Panasonic Watch",
    description: "Innovation crafted for explorers.",
    price: "$799",
    imageUrl: "/watch20.jpg",
  },
  {
    id: 21,
    company: "Oppo Watch",
    description: "Sleek tech for the bold and stylish.",
    price: "$350",
    imageUrl: "/watch21.jpg",
  },
  {
    id: 22,
    company: "Vivo Watch",
    description: "Bright, bold, crafted for you.",
    price: "$300",
    imageUrl: "/watch22.jpg",
  },
  {
    id: 23,
    company: "OnePlus Watch",
    description: "Seamless style, flawless tech.",
    price: "$650",
    imageUrl: "/watchnew23.png",
  },
  {
    id: 24,
    company: "Reebok Watch",
    description: "Born from endurance, built for you.",
    price: "$85",
    imageUrl: "/watch24.jpg",
  },
  {
    id: 25,
    company: "North Face Watch",
    description: "Ready for every environment.",
    price: "$180",
    imageUrl: "/watch25.jpg",
  },
  {
    id: 26,
    company: "Fossil Watch",
    description: "American tradition in every tick.",
    price: "$150",
    imageUrl: "/watch26.jpg",
  },
  {
    id: 27,
    company: "Timberland Watch",
    description: "Adventure-ready, earth-rooted design.",
    price: "$200",
    imageUrl: "/watchnew27.png",
  },
  {
    id: 28,
    company: "Chanel Watch",
    description: "Redefining timeless luxury.",
    price: "$300",
    imageUrl: "/watch28.jpg",
  },
  {
    id: 29,
    company: "Givenchy Watch",
    description: "Haute couture on your wrist.",
    price: "$500",
    imageUrl: "/watch29.jpg",
  },
  {
    id: 30,
    company: "Versace Watch",
    description: "Opulence designed for impact.",
    price: "$1000",
    imageUrl: "/watch30.jpg",
  },
  {
    id: 31,
    company: "Cartier Watch",
    description: "Exquisite craftsmanship, timeless elegance.",
    price: "$5000",
    imageUrl: "/watch31.png",
  },
  {
    id: 32,
    company: "Bvlgari Watch",
    description: "Luxury meets precision with every tick.",
    price: "$4500",
    imageUrl: "/watch32.png",
  },
  {
    id: 33,
    company: "Tag Heuer Watch",
    description: "Engineered for champions, designed for you.",
    price: "$2000",
    imageUrl: "/watch33.png",
  },
  {
    id: 34,
    company: "Omega Watch",
    description: "Precision at its finest, elegance in every moment.",
    price: "$4000",
    imageUrl: "/watch34.png",
  },
  {
    id: 35,
    company: "Patek Philippe Watch",
    description: "Sophistication with a legacy of tradition.",
    price: "$15000",
    imageUrl: "/watch35.png",
  },
  {
    id: 36,
    company: "Hublot Watch",
    description: "Fusion of innovation and luxury.",
    price: "$7000",
    imageUrl: "/watch36.png",
  },
  {
    id: 37,
    company: "Audemars Piguet Watch",
    description: "Unmatched artistry in every detail.",
    price: "$12000",
    imageUrl: "/watch37.png",
  },
  {
    id: 38,
    company: "Breitling Watch",
    description: "Crafted for the adventurous spirit.",
    price: "$3500",
    imageUrl: "/watch38.png",
  },
  {
    id: 39,
    company: "IWC Schaffhausen Watch",
    description: "Precision, elegance, and timeless style.",
    price: "$8000",
    imageUrl: "/watch39.png",
  },
  {
    id: 40,
    company: "Jaeger-LeCoultre Watch",
    description: "Innovation meets heritage in every design.",
    price: "$6000",
    imageUrl: "/watch40.png",
  },
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedProduct(null);
  };

  return (
    <div className="shop-container">
      <h1 className="shop-heading">Our Premium Watches</h1>
      <div className="cards-grid">
        {products.map((product) => (
          <div key={product.id} className="cards">
            <h2 className="company-name">{product.company}</h2>
            <div className="image-container">
              <Image
                src={product.imageUrl}
                alt={product.company}
                width={200}
                height={200}
                className="card-image"
                priority
              />
            </div>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="buy-now-btn" onClick={() => handleBuyNow(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div className="backs-to-home-container">
        <Link href="/">
          <button className="backs-to-home-button">Back to Home</button>
        </Link>
      </div>

      {showBookingForm && selectedProduct && (
        <BookingForm product={selectedProduct} onClose={closeBookingForm} />
      )}
    </div>
  );
}
