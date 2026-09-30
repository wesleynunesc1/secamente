import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProgramSection from "@/components/ProgramSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Manifesto from "@/components/Manifesto";
import AboutSabrina from "@/components/AboutSabrina";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <ProgramSection />
      <HowItWorks />
      <Benefits />
      <Manifesto />
      <AboutSabrina />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
