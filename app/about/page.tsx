import React from "react";
import MissionVision from "@/components/MissionVision";
import LeadershipTeam from "@/components/LeadershipTeam";
import CounselorMessage from "@/components/CounselorMessage";
import AboutHero from "@/components/AboutHero";
import WhyChooseUsAbout from "@/components/WhyChooseUsAbout";
import CoreValues from "@/components/CoreValues";
import CounselingProcessAbout from "@/components/CounselingProcessAbout";
import StudyDestinations from "@/components/StudyDestinations";
import SuccessCommitment from "@/components/SuccessCommitment";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <WhyChooseUsAbout />
      <CoreValues />
      <LeadershipTeam />
      <CounselorMessage />
      <CounselingProcessAbout />
      <StudyDestinations />
      <SuccessCommitment />
      <CTASection />
    </main>
  );
}
