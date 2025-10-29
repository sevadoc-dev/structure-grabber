import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "О нас",
    "Решения для зелёной энергии",
    "Инсайты",
    "Бизнес клиенты",
    "Карьера",
    "Медиа"
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-primary">
          Ørsted AI
        </div>
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-primary">
                Меню
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="text-left py-3 text-lg hover:text-primary transition-colors border-b border-border"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </button>
              ))}
              <Button 
                className="mt-6 bg-primary hover:bg-primary-hover text-primary-foreground w-full"
              >
                Подписаться на новости
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
