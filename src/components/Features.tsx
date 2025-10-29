import { Card } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Молниеносная скорость",
    description: "Обработка данных в режиме реального времени с невероятной производительностью"
  },
  {
    icon: Shield,
    title: "Максимальная безопасность",
    description: "Защита корпоративного уровня для всех ваших данных и транзакций"
  },
  {
    icon: TrendingUp,
    title: "Рост показателей",
    description: "Увеличение конверсии и доходов с первого месяца использования"
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Автоматизация рутинных задач освобождает до 20 часов в неделю"
  },
  {
    icon: Users,
    title: "Командная работа",
    description: "Удобные инструменты для совместной работы и коммуникации"
  },
  {
    icon: Award,
    title: "Лучшее качество",
    description: "Награды и признание от ведущих экспертов индустрии"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексное решение, которое превосходит ожидания
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
