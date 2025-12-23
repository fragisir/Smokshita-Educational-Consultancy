"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 skew-x-12 transform translate-x-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-md border border-blue-500/30 text-blue-200 text-sm font-semibold mb-6 tracking-wide uppercase">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Empowering Your Global <br />
            <span className="text-blue-400">Education Journey</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Smokshita International Education is a premium <span className="text-white font-semibold">study abroad consultancy</span> committed to bridging the gap between local talent and global opportunities. We provide expert <span className="text-white font-semibold">international education</span> support for students aspiring to study abroad, ensuring every step of their journey is guided by expertise and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
