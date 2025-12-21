import HeroSection from "@/components/HeroSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import QuickHighlights from "@/components/QuickHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <main>
        <HeroSection />
        <QuickHighlights />
        <ServiceHighlights />
        <WhyChooseUs />
        <SuccessStories />
      </main>
    </div>
  );
}

