
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PersonalTraining from "@/components/PersonalTraining";
import GroupClasses from "@/components/GroupClasses";
import NutritionCoaching from "@/components/NutritionCoaching";
import StrengthTraining from "@/components/StrengthTraining";
import CardioSessions from "@/components/CardioSessions";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  // Scroll reveal animation effect
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".animate-fade-in");
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 100) {
          reveal.classList.add("opacity-100");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gym-dark to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PersonalTraining />
      <GroupClasses />
      <NutritionCoaching />
      <StrengthTraining />
      <CardioSessions />
      <Gallery />
      <Pricing />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
