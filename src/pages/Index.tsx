import MobileNav from "@/components/MobileNav";
import MobileHero from "@/components/MobileHero";
import EarningsCard from "@/components/EarningsCard";
import HowItWorksSection from "@/components/HowItWorksSection";
import EnergyDeliverSection from "@/components/EnergyDeliverSection";
import TransformationSection from "@/components/TransformationSection";
import NewsSection from "@/components/NewsSection";
import FooterMobile from "@/components/FooterMobile";
import heroEnergy from "@/assets/hero-energy.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src={heroEnergy} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <MobileNav />
        <MobileHero />
        <EarningsCard />
        <HowItWorksSection />
        <EnergyDeliverSection />
        <TransformationSection />
        <NewsSection />
        <FooterMobile />
      </div>
    </div>
  );
};

export default Index;


