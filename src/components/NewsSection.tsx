import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    date: "29",
    month: "Окт",
    title: "Каждый фунт имеет значение: Ørsted спонсирует хоспис Святой Марии уже шестой год подряд"
  },
  {
    date: "27",
    month: "Окт",
    title: "Ørsted объявляет о новых партнёрствах в области возобновляемой энергии"
  },
  {
    date: "25",
    month: "Окт",
    title: "Инновационные решения для зелёного будущего представлены на конференции"
  }
];

const NewsSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Новости</h2>
      <p className="text-muted-foreground mb-8">
        Последние новости и пресс-релизы Ørsted
      </p>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <Card 
            key={index} 
            className="p-4 hover:shadow-md transition-shadow cursor-pointer border-border"
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-3 min-w-[60px]">
                <span className="text-2xl font-bold leading-none">{item.date}</span>
                <span className="text-xs uppercase mt-1">{item.month}</span>
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase text-muted-foreground mb-2">Новости</p>
                <h3 className="font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        Все новости
      </Button>
    </section>
  );
};

export default NewsSection;
