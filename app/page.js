import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutUsSection from "@/components/sections/homepage/AboutUsSection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import WorkSection from "@/components/sections/homepage/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutUsSection/>
      <WorkSection/>
      <Footer/>
    </>
  );
}
