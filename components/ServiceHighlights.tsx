"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, BookOpen, PenTool, Globe, ArrowRight } from "lucide-react";

const serviceCards = [
  {
    title: "Visa and Flight Ticket Booking",
    description: "You can directly contact us by filling up the form. Our team will get back to you with your visa inquiry.",
    icon: <Plane size={32} className="text-white" />,
    color: "bg-green-500",
    image: "/images/service-visa.jpg", // Placeholder
  },
  {
    title: "Study Abroad",
    description: "Open your mind to a whole new world, experience world-class education, and develop a global perspective.",
    icon: <Globe size={32} className="text-white" />,
    color: "bg-blue-600",
    image: "/images/service-study.jpg", // Placeholder
  },
  {
    title: "Test Preparation",
    description: "IELTS, PTE, TOEFL training to get admission in top universities overseas.",
    icon: <PenTool size={32} className="text-white" />,
    color: "bg-green-500",
    image: "/images/service-test.jpg", // Placeholder
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            We Help you to reach Your Dream <br />
            <span className="text-green-500">Anywhere In The World</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 max-w-2xl mx-auto"
          >
            Expand your horizons, immerse yourself in diverse cultures, and gain a world-class education that transcends boundaries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Card Header (Icon + Shape) */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl shadow-md ${card.color}`}>
                  {card.icon}
                </div>
                {/* Decorative shape */}
                <div className="w-20 h-20 bg-gray-50 rounded-full -mr-6 -mt-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 mb-6 flex-grow">{card.description}</p>
              
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight size={18} className="ml-1" />
              </a>
              
              {/* Small bottom decoration mimicking the image */}
              <div className="mt-8 h-2 w-full bg-gradient-to-r from-gray-100 to-white rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
