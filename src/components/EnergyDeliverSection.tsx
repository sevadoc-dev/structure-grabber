import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const EnergyDeliverSection = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <Card className="p-6 border-l-4 border-l-primary">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          Энергия для достижений+
        </h3>
        <p className="text-base text-muted-foreground mb-6">
          Морская ветроэнергетика может обеспечить энергетическую независимость, 
          стабильность цен, рабочие места и положительное влияние на климат и природу.
        </p>
        <Button 
          variant="link" 
          className="text-primary p-0 h-auto font-semibold"
        >
          Узнайте как
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </Card>
    </section>
  );
};

export default EnergyDeliverSection;
