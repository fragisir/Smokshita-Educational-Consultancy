"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveResources() {
  return (
    <div className="bg-white py-16 space-y-20">
      <EligibilityChecker />
      <CountryComparison />
      <FAQSection />
    </div>
  );
}

export function EligibilityChecker() {
  return (
    <section className="container mx-auto px-4" id="eligibility">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Check Your Eligibility</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Not sure which country is right for you? Use our quick assessment tool to see if you qualify for Japan, Australia, Canada, or USA.
            </p>
            <ul className="space-y-2 mb-8 text-blue-100">
              <li className="flex items-center gap-2"><CheckCircle size={20} /> Instant Assessment</li>
              <li className="flex items-center gap-2"><CheckCircle size={20} /> Free Consultation Call</li>
            </ul>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Quick Eligibility Check</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Country</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50">
                  <option>Select Country</option>
                  <option>Japan</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>USA</option>
                  <option>Korea</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50">
                  <option>Select Education</option>
                  <option>+2 (High School)</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                Check Eligibility Now
              </button>
            </form>
          </div>
        </div>
        
        {/* Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

export function CountryComparison() {
  const data = [
    { country: "Japan", lang: "Japanese", work: "28 hrs/week", visa: "Student Visa" },
    { country: "Australia", lang: "English", work: "48 hrs/fortnight", visa: "Subclass 500" },
    { country: "Canada", lang: "English", work: "20 hrs/week", visa: "Study Permit" },
    { country: "USA", lang: "English", work: "On-campus only", visa: "F1 Visa" },
    { country: "Korea", lang: "Korean", work: "20 hrs/week", visa: "D-2 / D-4" },
  ];

  return (
    <section className="container mx-auto px-4" id="comparison">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Country Comparison</h2>
        <p className="text-gray-600">Compare key features to decide your destination.</p>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="w-full text-left bg-white">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="p-4 border-b">Country</th>
              <th className="p-4 border-b">Language</th>
              <th className="p-4 border-b">Work Rights (Part-time)</th>
              <th className="p-4 border-b">Visa Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-gray-800">{row.country}</td>
                <td className="p-4 text-gray-600">{row.lang}</td>
                <td className="p-4 text-gray-600">{row.work}</td>
                <td className="p-4 text-gray-600">{row.visa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    { q: "How long does the Japan visa process take?", a: "Typically, the COE takes 2-3 months, and the visa issuance takes another week." },
    { q: "Can I work while studying?", a: "Yes, most countries allow part-time work. Japan allows 28 hours/week, Australia 48 hours/fortnight." },
    { q: "What level of Japanese is required for student visa?", a: "A minimum of 150 hours of study or JLPT N5 equivalent level is recommended for high success rates." },
    { q: "Do you support with documentation?", a: "Yes, we handle all documentation including translation, financial verification, and SOP writing." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="container mx-auto px-4 max-w-3xl" id="faq">
      <div className="text-center mb-10">
        <HelpCircle size={48} className="mx-auto text-blue-600 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">Common queries from our students.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <span className="font-bold text-gray-800">{faq.q}</span>
              {activeIndex === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-blue-50 px-5 pb-5 pt-0 overflow-hidden"
                >
                  <p className="text-gray-700 pt-2">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
