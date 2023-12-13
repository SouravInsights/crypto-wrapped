import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/sections/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#1E0612] bg-left bg-[url('/Images/Topographic-1.svg')] bg-no-repeat">
      <HeroSection />
    </main>
  );
}
