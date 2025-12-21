"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "Honest & Transparent Guidance",
    "Country-Specific Visa Knowledge",
    "Small Batch Language Classes",
    "One-to-One Counseling",
    "Support from Application to Departure",
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image/Visual Sde */}
          <div className="w-full md:w-1/2 relative">
             {/* Placeholder for visual or illustration */}
            <div className="bg-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 opacity-50"></div>
               {/* Abstract content or maybe an image if available, using simple shapes for now */}
               <div className="text-center relative z-10">
                 <div className="text-6xl font-bold text-blue-900 mb-2">100%</div>
                 <div className="text-xl text-blue-600 font-medium">Commitment</div>
               </div>
               {/* Decorative Circles */}
               <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            
            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-800 font-medium italic">
                "We do not believe in false promises. We guide students based on eligibility and long-term success."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
