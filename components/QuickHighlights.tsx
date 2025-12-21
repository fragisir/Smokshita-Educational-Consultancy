"use client";

import React from "react";
import { BookOpen, FileCheck, Globe2, Users } from "lucide-react";

export default function QuickHighlights() {
  const highlights = [
    {
      icon: <BookOpen size={40} className="text-blue-600" />,
      title: "Japanese Language Classes",
      desc: "JLPT N5 & N4 Classes Available",
    },
    {
      icon: <FileCheck size={40} className="text-blue-600" />,
      title: "Visa & Documentation",
      desc: "Complete support for visa application",
    },
    {
      icon: <Globe2 size={40} className="text-blue-600" />,
      title: "Country-specific Counseling",
      desc: "Expert guidance for your dream destination",
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: "Experienced Counselors",
      desc: "Verified & trusted education experts",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 -mt-10 relative z-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border-b-4 border-blue-600"
            >
              <div className="mb-4 bg-blue-50 p-4 rounded-full">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
