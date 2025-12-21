import React from "react";
import ContactSection from "@/components/ContactSection";

export default function BookCounselingPage() {
  return (
    <div className="pt-8 pb-16">
       <div className="container mx-auto px-4 mb-4">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">Book Counseling</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Schedule a session with our expert counselors to discuss your study abroad plans.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
