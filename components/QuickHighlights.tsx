"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QuickHighlights() {
  const highlights = [
    {
      icon: "/images/icons/visa-success.png",
      title: "High Visa Success Rate",
      desc: "Proven track record of visa approvals",
      bgImage: "/images/hero-1.png",
    },
    {
      icon: "/images/icons/success-years.png",
      title: "20th Year of Success",
      desc: "Two decades of trusted excellence",
      bgImage: "/images/hero-3.png",
    },
    {
      icon: "/images/icons/certified.png",
      title: "Certified Career Counselors",
      desc: "Expert QEAC & ISANA certified guidance",
      bgImage: "/images/hero-2.png",
    },
    {
      icon: "/images/icons/visa-expert.png",
      title: "Visa Expert Team",
      desc: "Professional documentation support",
      bgImage: "/images/website-prototype.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 -mt-20 relative z-30 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border-b-4 border-blue-600 group overflow-hidden h-full"
            >
              {/* Soft Background Image for Each Card */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                <Image 
                  src={item.bgImage} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                  priority={index < 4}
                />
              </div>

              {/* Icon Container (PNG Image) */}
              <div className="relative z-10 mb-6 bg-blue-50 p-5 rounded-2xl group-hover:bg-blue-600 transition-all duration-300 transform group-hover:rotate-6 shadow-sm w-20 h-20 flex items-center justify-center">
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain brightness-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full -mr-12 -mt-12 group-hover:bg-blue-100 transition-colors duration-300 -z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
