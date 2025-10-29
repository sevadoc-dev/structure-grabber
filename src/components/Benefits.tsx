import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Увеличение продаж на 150% в первые 3 месяца",
  "Снижение операционных расходов на 40%",
  "Автоматизация 80% рутинных процессов",
  "Повышение удовлетворенности клиентов на 95%",
  "Интеграция со всеми популярными сервисами",
  "Круглосуточная поддержка на русском языке"
];

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Результаты, которые говорят сами за себя
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к 10,000+ компаниям, которые уже трансформировали свой бизнес с нашим решением
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary p-1 animate-float">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                    300%
                  </div>
                  <p className="text-2xl font-semibold mb-2">Рост эффективности</p>
                  <p className="text-muted-foreground">
                    Средний показатель наших клиентов за первые 6 месяцев
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
