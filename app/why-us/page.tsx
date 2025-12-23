import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessStories from "@/components/SuccessStories";

export default function WhyUsPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2 font-outfit">Why Choose Smokshita?</h1>
        <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-relaxed">
          At Smokshita International Education, we offer professional <span className="text-blue-700 font-semibold">education counseling</span> and <span className="text-blue-700 font-semibold">student visa guidance</span> built on a foundation of absolute transparency.
        </p>
      </div>
      <WhyChooseUs />
      <SuccessStories />
    </div>
  );
}
