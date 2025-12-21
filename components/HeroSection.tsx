"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6"
          >
            WELCOME TO SMOKSHITA EDUCATION
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6"
          >
            Experience the <br />
            Education <span className="text-green-500">Beyond <br /> Borders</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            We offer customized courses tailored to fit the need of the organization. We provide end-to-end support for your study abroad dreams.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="/contact" className="bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold px-8 py-3.5 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
              View More
            </a>
            <a href="/contact" className="flex items-center gap-2 border-2 border-blue-900 text-blue-900 text-lg font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors">
              Contact Us
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Images (Collage Style) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-green-200/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl -z-10" />

          {/* Main Image */}
          <div className="relative z-10 w-[85%] md:w-[70%] lg:w-[80%] aspect-square md:aspect-[4/3] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem] z-10" />
             {/* Using a placeholder for now, you will need to replace this or I can generate one */}
             {/* The user didn't give me the image file, so I'll try to use one from the public folder or a colored placeholder */}
            <div className="w-full h-full bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-2xl">
               <Image 
                 src="/images/hero-1.png" 
                 alt="Students" 
                 fill
                 className="object-cover"
               />
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-white p-4 rounded-xl shadow-xl z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                   <ArrowUpRight size={20} />
                </div>
                <div className="font-bold text-gray-900">98% Success</div>
              </div>
              <p className="text-xs text-gray-500">Visa approval rate for the last academic year.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

