"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessCommitment() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Student Success Commitment</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Smokshita International Education, our commitment goes beyond just obtaining a visa. we focus on your long-term success. We provide <span className="text-blue-600 font-semibold">realistic guidance</span> based on your profile and the current international education landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Honest assessment of academic and financial eligibility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Continuous support from application until you settle in your destination.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Dedicated to finding the best <span className="font-semibold">student visa guidance</span> path for you.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 relative">
               <div className="aspect-square bg-blue-600 rounded-2xl rotate-3 absolute inset-0 opacity-10"></div>
               <div className="relative z-10 p-4">
                 <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                 <div className="text-gray-600 font-medium">Dedication to Student Excellence and Success</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
