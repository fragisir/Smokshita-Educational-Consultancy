import React from "react";
import CoreServices from "@/components/CoreServices";
import CountrySupport from "@/components/CountrySupport";

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-4">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">Our Services</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          We provide end-to-end support for students aspiring to study abroad.
        </p>
      </div>
      <CoreServices />
      <div className="container mx-auto">
        <CountrySupport />
      </div>
    </div>
  );
}
