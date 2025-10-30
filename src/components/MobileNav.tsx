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
      <div className="flex items-center justify-center px-4 py-4">
        <div className="text-2xl font-bold text-primary">
          Ørsted AI
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
