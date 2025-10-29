import { Button } from "@/components/ui/button";
import teamImg from "@/assets/team.jpg";

const TransformationSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="mb-8">
        <img 
          src={teamImg} 
          alt="Наша трансформация" 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      <div className="max-w-2xl">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          Наша трансформация зелёной энергии
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          Может ли наша трансформация вдохновить вашу? Читайте нашу историю 
          технологических инноваций, обучения и стратегических решений.
        </p>
        <Button 
          variant="default"
          className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto"
        >
          Наша зелёная трансформация
        </Button>
      </div>
    </section>
  );
};

export default TransformationSection;
