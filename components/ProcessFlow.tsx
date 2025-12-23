"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Send, Plane } from "lucide-react";

const steps = [
  {
    title: "Initial Counseling",
    desc: "Speak with our expert counselors to identify your goals and choose the best study destination tailored to your career path.",
    image: "/images/process/step1.png",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    title: "Admission & Documentation",
    desc: "Our team helps you prepare all necessary documents and handles the university application process to secure your offer letter.",
    image: "/images/process/step2.png",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-indigo-600",
  },
  {
    title: "Visa Processing & Success",
    desc: "We provide comprehensive visa mock interviews and documentation support to ensure your visa is approved on the first attempt.",
    image: "/images/process/step3.png",
    icon: <Send className="w-6 h-6" />,
    color: "bg-emerald-600",
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Seamless Process</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-outfit">
              How It Works: Your Journey to Success
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We've simplified the complex study abroad process into three easy steps. Here's how we help you reach your goals.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[180px] left-[10%] right-[10%] h-1 bg-gray-100 -z-10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className={`absolute top-0 right-0 ${step.color} text-white font-bold px-4 py-2 rounded-bl-3xl z-10 shadow-lg`}>
                  Step 0{index + 1}
                </div>

                {/* Image Card */}
                <div className="relative h-[250px] w-full rounded-3xl overflow-hidden shadow-2xl mb-8 group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Icon & Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className={`${step.color} p-4 rounded-2xl text-white shadow-xl mb-6 transform -mt-12 relative z-20 group-hover:rotate-6 transition-transform`}>
                    {step.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">{step.title}</h4>
                  <p className="text-gray-600 text-[16px] leading-[1.7] font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-8 py-4 rounded-3xl font-bold hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100 shadow-sm">
            <Plane className="w-5 h-5" />
            <span>Ready to start your application?</span>
            <span className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Let's Go</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
