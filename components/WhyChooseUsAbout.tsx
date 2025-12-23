"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUsAbout() {
  const highlights = [
    {
      title: "Trusted Reputation",
      desc: "Built on years of successful student placements and positive feedback from parents and students alike."
    },
    {
      title: "Complete Transparency",
      desc: "No hidden costs or false promises. We provide clear, honest information about fees, visa chances, and university realities."
    },
    {
      title: "Experienced Counselors",
      desc: "Our team consists of experts who understand the nuances of international education systems and visa policies."
    },
    {
      title: "Student-First Approach",
      desc: "Your dreams and career goals are our top priority. We tailor our guidance according to your specific profile and interests."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 text-lg">
              We don't just process applications; we build futures through expert <span className="text-blue-600 font-semibold">education counseling</span>. Here is why students choose Smokshita for their global journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
