"use client";

import React from "react";
import { Shield, Search, UserCircle2, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function CoreValues() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      desc: "We uphold the highest ethical standards in all our interactions and advice."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Transparency",
      desc: "Clear communication regarding applications, costs, and expectations at every step."
    },
    {
      icon: <UserCircle2 className="w-8 h-8" />,
      title: "Student-Focused Guidance",
      desc: "Personalized support tailored to individual aspirations and academic backgrounds."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Commitment",
      desc: "Dedication to seeing our students succeed through every challenge of the process."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      desc: "Providing top-tier counseling and documentation services to ensure the best outcomes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Our Core Values</h2>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="w-full md:w-[30%] lg:w-[18%] p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all cursor-default group"
            >
              <div className="mb-4 text-blue-600 group-hover:text-white flex justify-center">{v.icon}</div>
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
