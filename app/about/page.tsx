import React from "react";
import MissionVision from "@/components/MissionVision";
import LeadershipTeam from "@/components/LeadershipTeam";
import CounselorMessage from "@/components/CounselorMessage";

export default function AboutPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-4xl font-bold text-blue-900 border-l-8 border-blue-600 pl-4 py-2">About Us</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Learn about our mission, vision, and the dedicated team that makes your dreams come true.
        </p>
      </div>
      <MissionVision />
      <LeadershipTeam />
      <CounselorMessage />
    </div>
  );
}
