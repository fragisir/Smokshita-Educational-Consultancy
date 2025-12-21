"use client";

import React from "react";
import CountrySupport from "@/components/CountrySupport";
import { EligibilityChecker, CountryComparison, FAQSection } from "@/components/InteractiveResources";

export default function CountriesPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">Countries We Serve</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore the destinations where we can help you build your future.
        </p>
      </div>
      
      <div className="container mx-auto">
        <CountrySupport />
      </div>

      <div className="space-y-20 py-12 bg-white">
        <CountryComparison />
        <EligibilityChecker />
        <FAQSection />
      </div>
    </div>
  );
}
