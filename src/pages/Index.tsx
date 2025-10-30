import MobileNav from "@/components/MobileNav";
import MobileHero from "@/components/MobileHero";
import EarningsCard from "@/components/EarningsCard";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ProfitCalculator from "@/components/ProfitCalculator";
import EnergyDeliverSection from "@/components/EnergyDeliverSection";
import FAQSection from "@/components/FAQSection";
import RegistrationForm from "@/components/RegistrationForm";
import LiveActivity from "@/components/LiveActivity";
import TermsDialog from "@/components/TermsDialog";
import PrivacyDialog from "@/components/PrivacyDialog";
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
        <AboutSection />
        <ProfitCalculator />
        <EnergyDeliverSection />
        <FAQSection />
        <RegistrationForm />
        
        {/* Footer */}
        <footer className="py-6 px-4 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 text-sm text-slate-400 flex-wrap">
            <span>FCA</span>
            <span>|</span>
            <span>AFM</span>
            <span>|</span>
            <span>MiFID II</span>
            <span>|</span>
            <span>GDPR</span>
          </div>
          <p className="text-slate-400 text-xs mb-3">
            © 2025 Ørsted AI. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <TermsDialog />
            <span className="text-slate-400">|</span>
            <PrivacyDialog />
          </div>
        </footer>
      </div>
      
      {/* Live Activity - Sticky Bottom */}
      <LiveActivity />
    </div>
  );
};

export default Index;


