import React from "react";
import QuickHighlights from "@/components/QuickHighlights";

export default function LanguageClassesPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">Language Classes</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Master the language of your destination country with our expert instructors.
        </p>
      </div>

      <QuickHighlights />

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             <h2 className="text-2xl font-bold text-blue-800 mb-4">Japanese Language (NAT/JLPT)</h2>
             <ul className="space-y-3 text-gray-700">
               <li className="flex items-center gap-2">✅ N5 & N4 Level Preparation</li>
               <li className="flex items-center gap-2">✅ Interview Preparation</li>
               <li className="flex items-center gap-2">✅ Small Batch Sizes</li>
               <li className="flex items-center gap-2">✅ Experienced Instructors</li>
             </ul>
           </div>
           
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             <h2 className="text-2xl font-bold text-blue-800 mb-4">English Proficiency (IELTS/PTE)</h2>
             <ul className="space-y-3 text-gray-700">
               <li className="flex items-center gap-2">✅ IELTS Academic & General</li>
               <li className="flex items-center gap-2">✅ PTE Academic</li>
               <li className="flex items-center gap-2">✅ Mock Tests & Feedback</li>
               <li className="flex items-center gap-2">✅ Study Material Provided</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
