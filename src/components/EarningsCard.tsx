import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const EarningsCard = () => {
  return (
    <section className="px-4 py-6 bg-background">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-red-500 p-2 rounded">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg text-slate-300">Weekly Earnings</h3>
        </div>
        
        <div className="text-5xl sm:text-6xl font-bold text-primary mb-6">
          €1,200+
        </div>
        
        <div className="h-px bg-slate-700 mb-6"></div>
        
        <p className="text-slate-400">
          Government regulated • Limited time offer
        </p>
      </Card>
    </section>
  );
};

export default EarningsCard;
