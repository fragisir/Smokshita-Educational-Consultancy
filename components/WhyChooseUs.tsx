"use client";

import React from "react";
import { 
  CheckCircle, 
  ShieldCheck, 
  Globe, 
  Users, 
  UserCircle, 
  Languages, 
  FileText, 
  History, 
  PlaneTakeoff, 
  Compass, 
  CreditCard 
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Honest & Transparent Guidance",
      desc: "Clear and ethical pathways for your future.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Country-Specific Knowledge",
      desc: "In-depth visa and embassy policies for all major destinations.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Experienced & Ethical Counselors",
      desc: "Qualified experts providing professional education counseling.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "One-to-One Personalized Counseling",
      desc: "Individual attention tailored to your specific profile.",
      icon: <UserCircle className="w-6 h-6" />
    },
    {
      title: "Small Batch Language Classes",
      desc: "JLPT N5 & N4 prep with personalized learning focus.",
      icon: <Languages className="w-6 h-6" />
    },
    {
      title: "Accurate Support",
      desc: "Precise document check and application management.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Up-to-date Policies",
      desc: "Staying ahead of ever-changing immigration and embassy rules.",
      icon: <History className="w-6 h-6" />
    },
    {
      title: "End-to-End Support",
      desc: "Guidance from initial application to final departure.",
      icon: <PlaneTakeoff className="w-6 h-6" />
    },
    {
      title: "Pre-departure & Settlement",
      desc: "Briefings and assistance to help you settle abroad.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "Clear Fee Structure",
      desc: "Affordable solutions with absolutely no hidden charges.",
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        
        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Professional Excellence</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit leading-tight">
              Why Students Trust <br />
              <span className="text-blue-600">Smokshita International</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              At Smokshita, we prioritize <span className="text-blue-700 font-semibold">honesty, transparency, and long-term student success</span>. We understand that your study abroad journey is more than just a visa—it’s the foundation of your future.
            </p>
          </motion.div>
        </div>

        {/* Highlighted Commitment */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-blue-900 border-l-8 border-blue-400 p-8 rounded-2xl shadow-2xl mb-20 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/10 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-blue-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">100% Commitment to Ethical Counseling</h3>
              <p className="text-blue-100/80 leading-relaxed font-medium">
                Our foundation is built on integrity. We ensure every piece of advice is accurate, ethical, and tailored to your success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card-based Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group h-full flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Trust Statement / Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-10 rounded-[3rem] shadow-lg border border-gray-50 text-center relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Our Promise
          </div>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-gray-800 mb-8 pt-4">
            "We do not believe in false promises. We guide students based on eligibility and long-term success."
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
            - Smokshita Ethics Council
          </p>
        </motion.div>

      </div>
    </section>
  );
}
