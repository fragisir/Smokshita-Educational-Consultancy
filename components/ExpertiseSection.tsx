"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, FileCheck, MapPin, UserCheck, ArrowRight } from "lucide-react";

const expertiseData = [
  {
    title: "Japanese Language Classes",
    subtitle: "JLPT N5 & N4 CLASSES AVAILABLE",
    description: "Master the Japanese language with our certified instructors. We provide intensive coaching for JLPT N5 and N4 levels, ensuring you are well-prepared for your life and studies in Japan.",
    icon: <BookOpen className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-600 to-blue-800",
    shadow: "shadow-blue-200",
    linkText: "View Class Schedule"
  },
  {
    title: "Visa & Documentation",
    subtitle: "COMPLETE SUPPORT FOR VISA",
    description: "Documentation is the backbone of a successful visa. Our experts meticulously handle every file, ensuring 100% compliance with embassy requirements to maximize your approval chances.",
    icon: <FileCheck className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    color: "from-emerald-600 to-emerald-800",
    shadow: "shadow-emerald-200",
    linkText: "Visa Check-list"
  },
  {
    title: "Country-specific Counseling",
    subtitle: "EXPERT GUIDANCE FOR ALL DESTINATIONS",
    description: "Every country has its nuances. Whether it's the academic culture in USA or work-study balance in Australia, we provide deep insights tailored to your specific destination choice.",
    icon: <MapPin className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    color: "from-indigo-600 to-indigo-800",
    shadow: "shadow-indigo-200",
    linkText: "Choose Destination"
  },
  {
    title: "Experienced Counselors",
    subtitle: "VERIFIED & TRUSTED EXPERTS",
    description: "Our counselors are not just advisors; they are mentors. With years of experience and deep industry knowledge, we guide you towards a brighter and stable future abroad.",
    icon: <UserCheck className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    color: "from-purple-600 to-purple-800",
    shadow: "shadow-purple-200",
    linkText: "Email Us"
  }
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Specialized Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 font-outfit">
              Empowering Your Global <br />
              <span className="text-blue-600">Education Ambitions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer specialized services designed to simplify the complex world of international education, ensuring you have the best tools for success.
            </p>
          </motion.div>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 lg:flex"
            >
              {/* Image Column */}
              <div className="relative h-64 lg:h-auto lg:w-2/5 overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-20 group-hover:opacity-10 transition-opacity`} />
              </div>

              {/* Content Column */}
              <div className="p-8 lg:p-10 lg:w-3/5 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg ${item.shadow}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-1 font-outfit">{item.title}</h3>
                <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider">{item.subtitle}</p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mt-auto">
                   <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-blue-600 transition-colors group/btn">
                     {item.linkText} <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
