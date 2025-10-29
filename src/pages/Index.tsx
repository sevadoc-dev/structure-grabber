import MobileNav from "@/components/MobileNav";
import MobileHero from "@/components/MobileHero";
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
      <SolutionsSection />
      <EnergyDeliverSection />
      <TransformationSection />
      <NewsSection />
      <FooterMobile />
    </div>
  );
};

export default Index;
