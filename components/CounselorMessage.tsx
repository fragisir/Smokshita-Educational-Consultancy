"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function CounselorMessage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 skew-y-3 origin-top-left -z-10 transform -translate-y-24"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-[3rem] p-10 md:p-20 shadow-2xl relative"
          >
            <Quote size={80} className="text-blue-400/20 absolute top-10 left-10" />
            
            <div className="text-center relative z-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-loose text-white mb-12">
                "Every student has a unique dream. My goal is to understand your background and guide you toward the right country and course with honesty and care."
              </h2>

              <div className="flex flex-col items-center">
                <div className="w-12 h-1 bg-blue-400 mb-6 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white mb-1">Khadga Poudel</h3>
                <p className="text-blue-300 font-medium tracking-widest uppercase text-sm">Professional Counselor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
