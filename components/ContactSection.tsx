"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Visit our office or call us directly for the most accurate and personalized counseling.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Our Office</h3>
                  <p className="text-gray-600">Koteshwor-32, Kathmandu, Nepal</p>
                  <p className="text-sm text-gray-500 mt-1">(Near Koteshwor Chowk)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+977 9851173982</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">smokshita.edu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Office Hours</h3>
                  <p className="text-gray-600"><span className="font-medium">Morning:</span> 7:00 AM – 10:00 AM</p>
                  <p className="text-gray-600"><span className="font-medium">Day Shift:</span> 1:00 PM – 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" />
              <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"></textarea>
              
              <button disabled className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg cursor-not-allowed">
                Send Message
              </button>
            </form>

            <div className="mt-4 bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg text-sm text-center">
              Messaging service is currently unavailable. Please visit our office or call directly.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
