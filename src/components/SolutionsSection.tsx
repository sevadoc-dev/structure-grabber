import { Button } from "@/components/ui/button";
import solutionsImg from "@/assets/solutions.jpg";

const SolutionsSection = () => {
  return (
    <section className="py-12 px-4 bg-secondary/30">
      <div className="mb-8">
        <img 
          src={solutionsImg} 
          alt="Решения для зелёной энергии" 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Решения для зелёной энергии
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          От морских до наземных ветряных электростанций - мы работаем над проектами, 
          которые сделают наше будущее зелёным.
        </p>
        <Button 
          variant="default"
          className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto"
        >
          Наши решения для зелёной энергии
        </Button>
      </div>
    </section>
  );
};

export default SolutionsSection;
