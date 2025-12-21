"use client";

import React from "react";
import { GraduationCap, FileText, School, Plane } from "lucide-react";

export default function Services() {
  const coreServices = [
    { icon: <GraduationCap size={32} />, title: "Study Abroad Counseling", desc: "Expert guidance to choose the right career path." },
    { icon: <FileText size={32} />, title: "Documentation & Visa", desc: "Hassle-free document preparation and visa assistance." },
    { icon: <School size={32} />, title: "University Selection", desc: "Find the best universities and language schools tailored to you." },
    { icon: <Plane size={32} />, title: "Pre-Departure Guidance", desc: "Briefing on culture, accommodation, and travel readiness." },
  ];

  const countries = [
    { name: "Japan", flag: "🇯🇵", desc: "Language schools & universities with work opportunities." },
    { name: "Australia", flag: "🇦🇺", desc: "Top-ranked universities and vibrant student life." },
    { name: "Canada", flag: "🇨🇦", desc: "Quality education with post-study work permits." },
    { name: "USA", flag: "🇺🇸", desc: "Global leader in technology and innovation." },
    { name: "Korea", flag: "🇰🇷", desc: "Emerging destination for technology and culture." },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        
        {/* Core Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive support at every step of your journey abroad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Country Wise */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Support Study In</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each country has different visa rules. Our counselors provide country-specific guidance to increase approval chances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 cursor-default border border-gray-100">
                <div className="text-6xl mb-4 transform transition hover:scale-110 inline-block">{country.flag}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{country.name}</h3>
                <p className="text-sm text-gray-500">{country.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
