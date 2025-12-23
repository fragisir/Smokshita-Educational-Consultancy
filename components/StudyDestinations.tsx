"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StudyDestinations() {
  const destinations = [
    { name: "Japan", flag: "🇯🇵", image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1500&auto=format&fit=crop" },
    { name: "Australia", flag: "🇦🇺", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1500&auto=format&fit=crop" },
    { name: "Canada", flag: "🇨🇦", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1500&auto=format&fit=crop" },
    { name: "USA", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1500&auto=format&fit=crop" },
    { name: "South Korea", flag: "🇰🇷", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1500&auto=format&fit=crop" },
    { name: "Europe", flag: "🇪🇺", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1500&auto=format&fit=crop" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Study Destinations</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600">Explore premium educational opportunities in the world's most popular study destinations.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((dest, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg"
            >
              <Image 
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-2xl mb-1">{dest.flag}</span>
                <h3 className="text-white font-bold text-lg">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
