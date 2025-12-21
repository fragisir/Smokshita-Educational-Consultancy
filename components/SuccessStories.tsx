"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sudeep K.C.",
    destination: "Studying in Japan",
    rating: 5,
    comment: "Smokshita Educational Consultancy provided exceptional guidance for my Japan student visa. The language classes were top-notch, and the documentation support was flawless. Highly recommended!",
    image: "/images/student-avatar-1.png", // Placeholder
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    name: "Anjali Shrestha",
    destination: "Studying in Australia",
    rating: 5,
    comment: "I was very confused about the process, but the counseling team made everything clear. They helped me choose the right university and course. I am now happily studying in Sydney!",
    image: "/images/student-avatar-2.png", // Placeholder
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    name: "Rohan Basnet",
    destination: "Studying in Canada",
    rating: 4,
    comment: "Great experience! The team is very professional and friendly. They guided me through every step of the visa application. I got my visa approved in just 2 weeks.",
    image: "/images/student-avatar-3.png", // Placeholder
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    name: "Priya Sharma",
    destination: "Studying in Korea",
    rating: 5,
    comment: "If you are looking for the best consultancy for Korea, this is it. The language preparation was excellent, and the instructors are very experienced.",
    image: "/images/student-avatar-4.png", // Placeholder
    bgColor: "bg-orange-50"
  },
  {
    id: 5,
    name: "Bikram Thapa",
    destination: "Studying in Japan",
    rating: 5,
    comment: "The best consultancy in town. They are very transparent with the fees and process. I got my COE within a month. Thank you Smokshita family!",
    image: "/images/student-avatar-5.png", // Placeholder
    bgColor: "bg-blue-50"
  },
  {
    id: 6,
    name: "Sita Gurung",
    destination: "Studying in USA",
    rating: 5,
    comment: "I am really thankful to the team for helping me get into my dream university in the USA with a scholarship. The interview preparation classes were very helpful.",
    image: "/images/student-avatar-6.png", // Placeholder
    bgColor: "bg-red-50"
  }
];

// Combine testimonials for seamless looped scrolling
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Student <span className="text-blue-600">Testimonials</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our students are saying about their journey with us. We take pride in 100% student satisfaction.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full group">
        {/* Gradient Blur Edges for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused] space-x-6 px-4">
          {scrollingTestimonials.map((student, index) => (
            <div
              key={`${student.id}-${index}`}
              className={`relative w-[350px] md:w-[400px] flex-shrink-0 p-8 rounded-2xl ${student.bgColor} border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <Quote className="absolute top-6 right-6 text-gray-400/20" size={50} />
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < student.rating ? "currentColor" : "none"} 
                    className={i < student.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 relative z-10 text-base leading-relaxed line-clamp-4">
                "{student.comment}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 text-lg font-bold text-gray-500">
                   {student.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{student.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{student.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


