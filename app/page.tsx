import HeroSection from "@/components/HeroSection";
import QuickHighlights from "@/components/QuickHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessStories from "@/components/SuccessStories";
import ProcessFlow from "@/components/ProcessFlow";
import LocationSection from "@/components/LocationSection";
import ExpertiseSection from "@/components/ExpertiseSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <main>
        <HeroSection />
        <QuickHighlights />
        <ExpertiseSection />
        <WhyChooseUs />
        <ProcessFlow />
        <SuccessStories />
        <LocationSection />
      </main>
    </div>
  );
}

