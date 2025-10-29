import { Button } from "@/components/ui/button";
import heroEnergy from "@/assets/hero-energy.jpg";

const MobileHero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col">
      <div className="px-4 pt-8 pb-6">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
          КТО МЫ?
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
          Guaranteed opportunity to earn over{" "}
          <span className="text-primary">$5,000 in passive income</span>{" "}
          every month. Registration is open only to Danish citizens.
        </h1>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto"
        >
          Узнать больше о нас
        </Button>
      </div>
      
      <div className="flex-1 relative">
        <img 
          src={heroEnergy} 
          alt="Возобновляемая энергия" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MobileHero;
