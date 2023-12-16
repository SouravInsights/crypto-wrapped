import HeroSection from "@/components/sections/HeroSection";
import { CDStats } from "@/components/CDStats";

export default function Home() {
  return (
    <main className="bg-[#1E0612] bg-left bg-[url('/Images/Topographic-1.svg')] bg-no-repeat">
      <HeroSection />

      <CDStats />
    </main>
  );
}
