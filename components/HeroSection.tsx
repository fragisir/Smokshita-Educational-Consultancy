"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CAROUSEL_SLIDES = [
  {
    image: "/images/hero-1.png",
    title: "Students Group Study",
    description: "Collaborative learning environment for academic excellence."
  },
  {
    image: "/images/hero-2.png",
    title: "Expert Counseling",
    description: "One-on-one guidance to shape your future career path."
  },
  {
    image: "/images/hero-3.png",
    title: "Visa Consultation",
    description: "Professional assistance with documentation and visa process."
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1500&auto=format&fit=crop",
    title: "Language Classes",
    description: "Intensive training for IELTS, PTE, and Japanese language."
  },
  {
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1500&auto=format&fit=crop",
    title: "Global Journey",
    description: "Your gateway to top international universities worldwide."
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content - Restored Previous UI Style */}
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
            Education <span className="text-blue-600">Beyond <br /> Borders</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            We provide end-to-end support for your study abroad dreams with customized guidance and expert visa assistance.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* One CTA button only as requested */}
            <a href="/contact" className="bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold px-8 py-3.5 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 flex items-center gap-2">
              Get Started Now
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Images (Restored Carousel Layout with added Text/Overlay) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />

          {/* Slider Container */}
          <div className="relative z-10 w-full max-w-[500px] lg:max-w-none aspect-square lg:h-full lg:w-[90%] group">
            <div className="w-full h-full bg-gray-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentIndex}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.7, ease: "easeInOut" }}
                   className="absolute inset-0"
                 >
                   <div className="absolute inset-0">
                     <Image 
                       src={CAROUSEL_SLIDES[currentIndex].image} 
                       alt={CAROUSEL_SLIDES[currentIndex].title} 
                       fill
                       className="object-cover"
                       priority
                     />
                   </div>
                   
                   {/* Slight dark overlay (45%) */}
                   <div className="absolute inset-0 bg-black/45" />

                   {/* White text for readability - Centered */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                       {CAROUSEL_SLIDES[currentIndex].title}
                     </h3>
                     <p className="text-white/90 text-sm md:text-base max-w-[280px]">
                       {CAROUSEL_SLIDES[currentIndex].description}
                     </p>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {CAROUSEL_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Floating Badge (restored from previous UI) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white p-4 rounded-2xl shadow-2xl z-20 max-w-[180px] hidden sm:block border-l-4 border-green-500"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                   <ArrowUpRight size={18} />
                </div>
                <div className="font-bold text-green-700 text-sm">98% Success</div>
              </div>
              <p className="text-[10px] text-green-600 font-semibold uppercase tracking-wider">Verified Visa Approval Rate.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
