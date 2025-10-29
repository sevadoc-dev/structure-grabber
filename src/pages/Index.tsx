import MobileNav from "@/components/MobileNav";
import MobileHero from "@/components/MobileHero";
import EarningsCard from "@/components/EarningsCard";
import SolutionsSection from "@/components/SolutionsSection";
import EnergyDeliverSection from "@/components/EnergyDeliverSection";
import TransformationSection from "@/components/TransformationSection";
import NewsSection from "@/components/NewsSection";
import FooterMobile from "@/components/FooterMobile";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <MobileHero />
      <EarningsCard />
      <SolutionsSection />
      <EnergyDeliverSection />
      <TransformationSection />
      <NewsSection />
      <FooterMobile />
    </div>
  );
};

export default Index;

