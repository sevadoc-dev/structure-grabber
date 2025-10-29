import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-6 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
        <div className="flex flex-col items-center text-center gap-2 mb-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            About Ørsted AI
          </h2>
        </div>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <p>
            Ørsted AI is a next-generation system that uses artificial intelligence to trade energy resources and assets in real time. The platform connects to licensed European brokers and energy market aggregators, processing data from global exchanges — including electricity prices, energy futures, carbon credits, and green certificates.
          </p>
          
          <p>
            Every second, Ørsted AI analyzes market dynamics, weather conditions, and wind energy generation volumes across different regions. Using machine learning models, the system detects patterns in volatility and instantly reacts to changing market conditions. The artificial intelligence forecasts demand, identifies the most profitable entry and exit points for trades, and generates strategies with maximum profit potential.
          </p>
          
          <p>
            To reduce risks, Ørsted AI applies automatic portfolio balancing, distributing capital across multiple assets to minimize market fluctuations and maintain steady profitability. The system dynamically allocates funds to the most promising green assets — wind and carbon projects that demonstrate strong growth potential.
          </p>
          
          <p>
            By continuously learning from new data, Ørsted AI refines its models over time, becoming increasingly accurate and efficient with each analysis cycle. This makes it a truly self-learning system capable of adapting to any changes in the market.
          </p>
          
          <p>
            Everything within the platform is fully transparent to the user. The dashboard displays entry and exit points, trade history, current results, and live market trends. Users retain complete control over their accounts — they can pause trading, adjust strategies, or withdraw funds at any time.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;
