import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessStories from "@/components/SuccessStories";

export default function WhyUsPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-4">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">Why Choose Us?</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          We pride ourselves on honesty, transparency, and a high success rate.
        </p>
      </div>
      <WhyChooseUs />
      <SuccessStories />
    </div>
  );
}
