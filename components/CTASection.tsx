"use client";

import React from "react";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your <br /><span className="text-blue-400">Study Abroad Journey?</span></h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Your global education dreams are just one step away. Join thousands of successful students who have trusted us with their careers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:smokshita.education@gmail.com" 
              className="px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
            >
              Email Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+977123456789" 
              className="px-10 py-4 bg-transparent border-2 border-white/30 hover:border-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Call Us
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <p className="mt-12 text-blue-200/80 italic font-light text-lg">
            "Your dream is our priority. Let's make it happen together."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
