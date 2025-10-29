import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const EarningsCard = () => {
  return (
    <section className="px-4 py-2">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-red-500 p-2 rounded">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg text-slate-300">Passive Income</h3>
        </div>
        
        <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          €1,200+
        </div>
        
        <div className="h-px bg-slate-700 mb-4"></div>
        
        <p className="text-slate-400">
          Government regulated • Limited time offer
        </p>
      </Card>
    </section>
  );
};

export default EarningsCard;
