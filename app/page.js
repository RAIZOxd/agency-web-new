import Navbar from "@/components/layout/Navbar";
import AboutUsSection from "@/components/sections/homepage/AboutUsSection";
import HeroSection from "@/components/sections/homepage/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutUsSection/>
      {/* <WorkSection/> */}
    </>
  );
}
