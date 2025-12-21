import React from "react";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-4">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Have questions? We are here to help you every step of the way.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
