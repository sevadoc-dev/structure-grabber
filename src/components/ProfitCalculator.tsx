import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";
import { useState } from "react";

const investmentSteps = [300, 500, 700, 900];

const calculateProfit = (investment: number): number => {
  // Linear calculation: 300€ → 500€/week, 900€ → 1500€/week
  return Math.round(500 + ((investment - 300) * 1000) / 600);
};

const ProfitCalculator = () => {
  const [investmentIndex, setInvestmentIndex] = useState(0);
  const investment = investmentSteps[investmentIndex];
  const weeklyProfit = calculateProfit(investment);

  return (
    <section className="py-6 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
        <div className="flex flex-col items-center text-center gap-2 mb-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Profit Calculator
          </h2>
        </div>

        <div className="space-y-6">
          {/* Investment Amount */}
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">Your Investment</p>
            <p className="text-4xl font-bold text-white">€{investment}</p>
          </div>

          {/* Slider */}
          <div className="px-2">
            <Slider
              value={[investmentIndex]}
              onValueChange={(value) => setInvestmentIndex(value[0])}
              max={investmentSteps.length - 1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              {investmentSteps.map((amount) => (
                <span key={amount}>€{amount}</span>
              ))}
            </div>
          </div>

          {/* Weekly Profit Display */}
          <div className="text-center pt-4 border-t border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Weekly Profit</p>
            <p className="text-5xl font-bold text-primary mb-2">€{weeklyProfit}</p>
            <p className="text-slate-300 text-xs">
              Estimated profit per week
            </p>
          </div>

          {/* Monthly Projection */}
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Monthly Projection</span>
              <span className="text-white font-bold text-lg">€{weeklyProfit * 4}</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ProfitCalculator;
