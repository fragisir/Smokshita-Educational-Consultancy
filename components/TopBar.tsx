"use client";

import React from "react";
import { Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 relative z-50">
      <div className="container mx-auto px-4">
        {/* Desktop & Tablet Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          
          {/* Contact Info Group */}
          <div className="flex items-center gap-4 text-xs md:text-sm whitespace-nowrap overflow-x-auto w-full md:w-auto justify-center md:justify-start">
            <a href="tel:+9779851173982" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={14} />
              <span>+977 9851173982</span>
            </a>
            <a href="mailto:smokshita.edu@gmail.com" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail size={14} />
              <span>smokshita.edu@gmail.com</span>
            </a>
            <div className="hidden sm:flex items-center gap-1 text-gray-300">
              <Clock size={14} />
              <span>Sun-Fri: 7AM - 5PM</span>
            </div>
          </div>

          {/* Marquee Section */}
          <div className="marquee-container flex-1 w-full md:w-auto overflow-hidden flex items-center bg-blue-800/50 rounded px-2 py-1 md:bg-transparent">
            <Megaphone size={14} className="flex-shrink-0 mr-2 text-yellow-400 animate-pulse" />
            <div className="overflow-hidden whitespace-nowrap w-full">
              <div className="animate-marquee inline-block">
                <span className="mr-8">Admissions Open for Japan | Australia | Canada | USA | Korea</span>
                <span className="mr-8 font-bold text-yellow-300">JLPT N5 & N4 Classes Available</span>
                <span className="mr-8">Call now to book your seat!</span>
                <span className="mr-8">Admissions Open for Japan | Australia | Canada | USA | Korea</span> 
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* CSS for Marquee - inlined for simplicity or could be in globals.css */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-block;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
