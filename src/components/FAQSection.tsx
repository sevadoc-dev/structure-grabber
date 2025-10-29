import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly does Ørsted AI trade?",
    answer: (
      <p>The system operates with highly liquid energy assets — including electricity, green certificates (RECs), carbon credits, and futures on renewable energy sources.</p>
    )
  },
  {
    question: "Is this an investment in real wind farms?",
    answer: (
      <p>Yes. A portion of the capital is allocated to clean energy generation projects (wind and solar plants), while another part is used for algorithmic trading on regulated energy exchanges.</p>
    )
  },
  {
    question: "How does the system generate profit?",
    answer: (
      <p>The artificial intelligence predicts price fluctuations in energy resources, buying assets when they are undervalued and selling them during periods of growth. Profit is generated through arbitrage and dynamic capital reallocation.</p>
    )
  },
  {
    question: "Is it safe to use the platform?",
    answer: (
      <p>All operations are executed through licensed European brokers and regulated energy exchanges. User capital is stored in individual accounts accessible only to the account owner.</p>
    )
  },
  {
    question: "Do I need any experience in trading or energy markets?",
    answer: (
      <p>No. Ørsted AI is fully automated — its algorithms perform calculations, forecasts, and trades. The user simply chooses a strategy and monitors the results.</p>
    )
  },
  {
    question: "Can I control the process?",
    answer: (
      <p>Yes. In your personal dashboard, you can see all open and closed trades, profitability statistics, and market analytics. You can pause trading or withdraw funds at any time.</p>
    )
  },
  {
    question: "How often is profit credited?",
    answer: (
      <p>Profit is calculated daily after trading sessions and is available for withdrawal at any time, depending on the broker and selected plan.</p>
    )
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white text-center">
          FAQ
        </h2>
        <p className="text-slate-400 text-center mb-6">Frequently Asked Questions</p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                  <h3 className="text-lg font-semibold text-white text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 text-slate-300 text-sm">
                  {faq.answer}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default FAQSection;