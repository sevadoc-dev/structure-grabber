import { Card } from "@/components/ui/card";
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
    <section className="py-12 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
          How it works
        </h2>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center pt-6 border-t border-slate-700">
          <p className="text-primary text-xl font-bold mb-2">
            Average Return
          </p>
          <p className="text-white text-2xl font-bold">
            from €3,000 to €5,000 per month
          </p>
        </div>
      </Card>
    </section>
  );
};

export default HowItWorksSection;
