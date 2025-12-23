"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const address = "Koteshwor-32, Kathmandu, Nepal";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.789178652014!2d85.34094406560058!3d27.68812674251817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19920a0b27e1%3A0xc31a6f3b06e40d85!2sKoteshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1703223000000!5m2!1sen!2snp";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details Side */}
            <div className="lg:col-span-5 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-outfit">
                  Visit Our <span className="text-blue-600">Headquarters</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Ready to take the next step in your global education journey? Drop by our office for a face-to-face consultation with our expert counselors.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: <MapPin className="text-blue-600" />,
                    title: "Our Address",
                    detail: address,
                    subDetail: "Near Koteshwor Chowk",
                    color: "bg-blue-50"
                  },
                  {
                    icon: <Phone className="text-emerald-600" />,
                    title: "Call Us",
                    detail: "+977 9851173982",
                    subDetail: "Sun - Fri, 7 AM - 3 PM",
                    color: "bg-emerald-50"
                  },
                  {
                    icon: <Mail className="text-indigo-600" />,
                    title: "Email Us",
                    detail: "smokshita.edu@gmail.com",
                    subDetail: "24/7 Support Response",
                    color: "bg-indigo-50"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-5 group"
                  >
                    <div className={`${item.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-700 font-medium">{item.detail}</p>
                      <p className="text-sm text-gray-500">{item.subDetail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg transition-all"
                >
                  <ExternalLink size={20} />
                  Get Directions on Maps
                </a>
              </motion.div>
            </div>

            {/* Map Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 relative group"
            >
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
              ></iframe>
              
              {/* Decorative Overlay */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white max-w-[200px] hidden md:block">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Live Location</p>
                <p className="text-sm font-bold text-gray-900 leading-tight">Visit us at Koteshwor, Kathmandu</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
