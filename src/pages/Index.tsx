import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import GoalsSection from "@/components/GoalsSection";
import ChallengesSection from "@/components/ChallengesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GoalsSection />
      <ChallengesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
