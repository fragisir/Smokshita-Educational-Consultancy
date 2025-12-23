"use client";

import React from "react";
import Image from "next/image";
import { UserCheck } from "lucide-react";

export default function LeadershipTeam() {
  const team = [
    {
      name: "Amar Neupane",
      role: "Proprietor",
      image: "/images/amar-neupane.jpg",
    },
    {
      name: "Khadga Poudel",
      role: "Counselor",
      image: "/images/Khadga Poudel.jpg",
    },
    {
      name: "Rudra Bahadur Karki",
      role: "Partner",
      image: null, // Keep as icon since no local image found
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Our visionary leaders are dedicated to providing ethical <span className="font-semibold text-blue-700">education counseling</span> and helping you navigate the complexities of studying abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-8 ring-blue-50 group-hover:ring-blue-100 transition-all bg-gray-100 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <UserCheck className="w-20 h-20 text-blue-200" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
