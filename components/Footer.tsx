"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-700 bg-white">
                 <Image src="/images/logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold text-white tracking-wider">SMOKSHITA</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your trusted partner for international education. We guide you towards a brighter future with honesty and integrity.
            </p>
            <div className="flex gap-4">
               {/* Social Icons (Optional but requested professional spacing) */}
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20}/></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

           {/* Disclaimer Info */}
           <div className="col-span-1 md:col-span-1">
              <div className="bg-gray-800 p-4 rounded-lg text-xs leading-relaxed text-gray-400 border border-gray-700">
                <span className="text-yellow-500 font-bold block mb-1">Disclaimer:</span>
                Visa approval depends entirely on the respective embassy's decision. We provide counseling and documentation support but do not guarantee visa issuance.
              </div>
           </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Smokshita International Education Consultancy Pvt. Ltd.</p>
          <p>Proprietor: Amar Neupane</p>
        </div>
      </div>
    </footer>
  );
}
