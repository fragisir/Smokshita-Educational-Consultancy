"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function CounselorMessage() {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 bg-white w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 bg-blue-400 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={48} className="text-blue-300 mx-auto mb-6 opacity-80" />
          
          <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
            "Every student has a unique dream. My goal is to understand your background and guide you toward the right country and course with honesty and care."
          </h2>

          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-blue-400 mb-4 rounded-full"></div>
            <h3 className="text-xl font-bold">Khadga Poudel</h3>
            <p className="text-blue-200">Counselor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
