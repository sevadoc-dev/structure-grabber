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
    question: "How to start?",
    answer: (
      <>
        <p className="mb-3">Start in three simple steps — it only takes a few minutes to go live.</p>
        
        <p className="mb-2"><strong>Step 1 — Register.</strong></p>
        <p className="mb-4">Create your personal Ørsted AI profile using your name, email, and password. Once registered, you'll get access to your secure dashboard where you can explore features and settings.</p>
        
        <p className="mb-2"><strong>Step 2 — Verify your account.</strong></p>
        <p className="mb-4">To activate security protocols and comply with European standards, each new user confirms their phone number and email. This ensures that your account is protected from unauthorised access and allows you to connect safely to a verified broker within the Ørsted AI network.</p>
        
        <p className="mb-2"><strong>Step 3 — Fund and manage your balance.</strong></p>
        <p>To enable live operations, an initial balance (minimum 300 euro recommended) must be connected through the broker's secure payment gateway.</p>
        <p className="mt-4">Once active, you'll be able to monitor your account in real time, view automated processes, and make withdrawals to any bank account whenever you choose. Each step is guided by Ørsted AI support specialists — available to answer questions, help with setup, and ensure that every action is transparent and secure.</p>
      </>
    )
  },
  {
    question: "How it works?",
    answer: (
      <p>Ørsted AI is a next-generation automation platform designed to help users interact with financial markets in real time. The system connects to licensed European brokers and continuously analyses live data from global exchanges — including currency, stock, and digital asset markets. Using advanced machine learning models, Ørsted AI identifies repeating patterns in volatility and reacts instantly to changing market conditions. It constantly adjusts strategies, minimises exposure, and executes trades based on the predefined settings chosen by the user. Every action is visible inside the user dashboard: entry points, closing moments, performance history and live market trends. There are no hidden processes — users remain in control of their accounts and can pause, modify, or withdraw at any time.</p>
    )
  },
  {
    question: "Can I lose money?",
    answer: (
      <p>Any operations on financial markets involve risk. However, Ørsted AI is built with protective algorithms that limit potential losses and allow the user to independently choose their preferred level of risk. Funds always remain in your brokerage account — you have full control over your balance and can withdraw your money at any time.</p>
    )
  },
  {
    question: "Do I need trading experience to use Ørsted AI?",
    answer: (
      <p>No. The platform is designed for users of all experience levels. The AI system independently analyzes data and executes trades, while the support team assists you at every stage — from registration to account setup. The interface is intuitive, and all processes are clearly displayed in your personal dashboard.</p>
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