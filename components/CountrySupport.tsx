"use client";

import React from "react";

export default function CountrySupport() {
  const countries = [
    { name: "Japan", flag: "🇯🇵", desc: "Language schools & universities with work opportunities." },
    { name: "Australia", flag: "🇦🇺", desc: "Top-ranked universities and vibrant student life." },
    { name: "Canada", flag: "🇨🇦", desc: "Quality education with post-study work permits." },
    { name: "USA", flag: "🇺🇸", desc: "Global leader in technology and innovation." },
    { name: "Korea", flag: "🇰🇷", desc: "Emerging destination for technology and culture." },
  ];

  return (
    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20 mx-4 md:mx-0">
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
  );
}
