"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, MapPin, Coffee, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

interface CountryDetail {
  name: string;
  image: string;
  flag: string;
  lifestyle: string;
  education: string;
  schools: {
    name: string;
    image: string;
  }[];
  desc: string;
  themeColor: string;
}

const countries: CountryDetail[] = [
  {
    name: "Japan",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    lifestyle: "A perfect blend of ancient traditions and futuristic technology. Japan offers a safe, clean, and highly disciplined lifestyle with incredible food and efficient public transport.",
    education: "Japan is renowned for its high academic standards in science, technology, and language. It's a top destination for students looking for technical excellence and cultural immersion.",
    schools: [
      { name: "University of Tokyo", image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" },
      { name: "Kyoto University", image: "https://images.unsplash.com/photo-1590483734724-383b853b237d?q=80&w=2069&auto=format&fit=crop" }
    ],
    desc: "Experience the unique harmony of tradition and innovation in the Land of the Rising Sun.",
    themeColor: "blue",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop",
    lifestyle: "Famous for its stunning beaches, sunny weather, and relaxed outdoor lifestyle. Australia is a multicultural hub with high living standards and a friendly vibe.",
    education: "Australia hosts several world-class universities with a strong emphasis on research and practical learning. It's a leader in ecology, medicine, and engineering.",
    schools: [
      { name: "University of Sydney", image: "https://images.unsplash.com/photo-1563220456-650a6da9b5f3?q=80&w=2070&auto=format&fit=crop" },
      { name: "University of Melbourne", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2070&auto=format&fit=crop" }
    ],
    desc: "Unlock global opportunities in a country known for its high-quality education and vibrant life.",
    themeColor: "emerald",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
    lifestyle: "Known for being incredibly welcoming, Canada offers a diverse culture, breathtaking natural beauty, and a high priority on safety and student well-being.",
    education: "Canadian degrees are globally recognized. The system focuses on industry-relevant skills and provides excellent post-graduation work opportunities.",
    schools: [
      { name: "University of Toronto", image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=2070&auto=format&fit=crop" },
      { name: "UBC Vancouver", image: "https://images.unsplash.com/photo-1492534513006-37715f336a39?q=80&w=2070&auto=format&fit=crop" }
    ],
    desc: "Start your international career in one of the most student-friendly countries in the world.",
    themeColor: "red",
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop",
    lifestyle: "A land of diverse opportunities and fast-paced life. From bustling metropolises to serene college towns, the US offers a rich cultural experience and endless variety.",
    education: "Home to the world's most prestigious universities. The US education system is flexible, encouraging interdisciplinary studies and cutting-edge research.",
    schools: [
      { name: "Harvard University", image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" },
      { name: "Stanford University", image: "https://images.unsplash.com/photo-1581362072978-24996d8aee3a?q=80&w=2071&auto=format&fit=crop" }
    ],
    desc: "Join the global elite in the most diverse and innovative education hub on the planet.",
    themeColor: "indigo",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    image: "https://images.unsplash.com/photo-1533157973024-e1d9ccf74154?q=80&w=2070&auto=format&fit=crop",
    lifestyle: "Experience the dynamic mix of tradition and 'Hallyu' (Korean Wave). Korea offers incredible technology, vibrant nightlife, and a unique social culture.",
    education: "Korea's education system is highly competitive and prestigious, especially in fields like ICT, engineering, and Korean studies. It's becoming a global education magnet.",
    schools: [
      { name: "Seoul National University", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d56d?q=80&w=2070&auto=format&fit=crop" },
      { name: "KAIST", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2066&auto=format&fit=crop" }
    ],
    desc: "Be part of the technological future while exploring deep-rooted Asian culture.",
    themeColor: "blue",
  },
];

export default function CountrySupport() {
  const [selectedCountry, setSelectedCountry] = useState<CountryDetail | null>(null);

  const getThemeStyles = (color: string) => {
    switch(color) {
      case 'red': return 'from-red-600 to-red-800 text-red-600 border-red-100 bg-red-50';
      case 'emerald': return 'from-emerald-600 to-emerald-800 text-emerald-600 border-emerald-100 bg-emerald-50';
      case 'indigo': return 'from-indigo-600 to-indigo-800 text-indigo-600 border-indigo-100 bg-indigo-50';
      default: return 'from-blue-600 to-blue-800 text-blue-600 border-blue-100 bg-blue-50';
    }
  };

  return (
    <div className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-outfit"
          >
            We Support Study In
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Choose your dream destination. Our counselors provide personalized roadmaps for each of these prime locations.
          </motion.p>
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCountry(country)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-xl"
            >
              <Image 
                src={country.image}
                alt={country.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-4xl mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {country.flag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
                <p className="text-white/70 text-sm line-clamp-2 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {country.desc}
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View Modal */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCountry(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2.5rem] overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>

                {/* Hero */}
                <div className="relative h-64 md:h-80">
                  <Image 
                    src={selectedCountry.image}
                    alt={selectedCountry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="text-5xl">{selectedCountry.flag}</span>
                       <h2 className="text-5xl font-black text-gray-900 font-outfit">{selectedCountry.name}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <section>
                      <div className="flex items-center gap-3 mb-4 text-blue-600">
                        <Coffee className="w-6 h-6" />
                        <h4 className="text-xl font-bold font-outfit">Lifestyle & Culture</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {selectedCountry.lifestyle}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-4 text-indigo-600">
                        <GraduationCap className="w-6 h-6" />
                        <h4 className="text-xl font-bold font-outfit">Education System</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {selectedCountry.education}
                      </p>
                    </section>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-xl font-bold font-outfit flex items-center gap-3">
                       <BookOpen className="w-6 h-6 text-emerald-600" />
                       Top Universities
                     </h4>
                     <div className="space-y-4">
                        {selectedCountry.schools.map((school) => (
                          <div key={school.name} className="group flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                             <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                               <Image src={school.image} alt={school.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                             </div>
                             <div className="flex flex-col justify-center">
                               <h5 className="font-bold text-gray-900 mb-1">{school.name}</h5>
                               <div className="flex items-center text-xs text-blue-600 font-bold uppercase tracking-wider">
                                 <span>Official Partner</span>
                                 <ExternalLink className="w-3 h-3 ml-2" />
                               </div>
                             </div>
                          </div>
                        ))}
                     </div>

                     <div className="p-6 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-200">
                        <h5 className="text-lg font-bold mb-2">Ready to study in {selectedCountry.name}?</h5>
                        <p className="text-blue-100 text-sm mb-4">Get a free consultation today from our country specialists.</p>
                        <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                          Book Free Appointment
                        </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
