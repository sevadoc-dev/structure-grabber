import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Wallet, Euro } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Analysis",
    description: "The system forecasts demand, wind strength, and output in real time."
  },
  {
    icon: TrendingUp,
    title: "Trading Algorithm",
    description: "Automatically executes trades on energy markets."
  },
  {
    icon: Wallet,
    title: "Investment Portfolio",
    description: "Distributes capital between wind farms and energy assets."
  },
  {
    icon: Euro,
    title: "Profit",
    description: "Users receive stable income from each trading session."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-6 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white text-center">
          How it works
        </h2>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-white">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center pt-4 border-t border-slate-700">
          <p className="text-primary text-lg font-bold mb-1">
            Average Return
          </p>
          <p className="text-white text-xl font-bold">
            from €3,000 to €5,000 per month
          </p>
        </div>

        <div className="mt-6">
          <Button 
            className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white"
            onClick={() => {
              const section = document.querySelector('#registration-form');
              section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Quick Registration
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default HowItWorksSection;
