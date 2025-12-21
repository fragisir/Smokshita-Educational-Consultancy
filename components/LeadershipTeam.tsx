"use client";

import React from "react";
import Image from "next/image";
import { UserCheck } from "lucide-react";

export default function LeadershipTeam() {
  const team = [
    {
      name: "Amar Neupane",
      role: "Proprietor",
      image: "/images/amar-neupane.jpg", // Using uploaded image
    },
    {
      name: "Khadga Poudel",
      role: "Counselor",
      image: null,
    },
    {
      name: "Rudra Bahadur Karki",
      role: "Partner",
      image: null,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 bg-gray-200 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <UserCheck size={48} className="text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
