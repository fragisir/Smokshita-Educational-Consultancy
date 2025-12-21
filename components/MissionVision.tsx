"use client";

import React from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg text-white">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To guide students with accurate information, ethical counseling, and step-by-step support for studying abroad. We strive to make your educational journey seamless and successful.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-600 p-3 rounded-lg text-white">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become a trusted international education consultancy recognized for student success, integrity, and excellence in career guidance across the globe.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
