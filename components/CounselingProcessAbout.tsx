"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export default function CounselingProcessAbout() {
  const steps = [
    { title: "Free Consultation", desc: "Initial meeting to discuss your goals and answer your questions.", image: "/images/process/step1.png" },
    { title: "Profile Evaluation", desc: "Detailed analysis of your academic and financial background.", image: "/images/process/step2.png" },
    { title: "Country & Course Selection", desc: "Helping you choose the best-fit destination and study program.", image: "/images/process/step3.png" },
    { title: "Application & Documentation", desc: "Expert support in preparing and submitting your paperwork." },
    { title: "Visa Guidance", desc: "Intensive preparation for interviews and visa application filing." },
    { title: "Pre-departure Assistance", desc: "Final briefing on life and culture in your study destination." }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Counseling Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to turn your study abroad dreams into reality.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-right w-full">
                  <div className={`${idx % 2 === 0 ? '' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    {step.image && (
                      <div className={`relative h-48 w-full rounded-2xl overflow-hidden shadow-md border-2 border-white ${idx % 2 === 0 ? 'ml-auto md:w-64' : 'mr-auto md:w-64'}`}>
                        <Image src={step.image} alt={step.title} fill className="object-cover" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg relative z-10">
                  {idx + 1}
                </div>
                <div className="flex-1 w-full hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
