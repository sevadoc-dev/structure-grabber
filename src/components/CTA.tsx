import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Спасибо! Мы скоро свяжемся с вами");
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Готовы изменить свой бизнес?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 animate-slide-up">
            Начните бесплатный 14-дневный пробный период. Без кредитной карты.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8 animate-fade-in">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-gradient-primary shadow-glow hover:scale-105 transition-transform h-12 px-8"
            >
              Попробовать бесплатно
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <span>✓ Установка за 5 минут</span>
            <span>✓ Не требуется кредитная карта</span>
            <span>✓ Отмена в любое время</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
