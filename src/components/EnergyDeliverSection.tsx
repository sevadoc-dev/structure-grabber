import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const EnergyDeliverSection = () => {
  return (
    <section className="py-12 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Compliance & Security
          </h2>
        </div>
        
        <div className="space-y-4 text-slate-300">
          <p>
            Ørsted AI operates in cooperation with brokers licensed under MiFID II and other recognised European financial frameworks. This means that all market activity within the system is executed through institutions supervised by official regulatory bodies.
          </p>
          
          <p>
            Every transaction passes through 256-bit SSL encryption, the same security level used by international banking networks. User data is stored exclusively on protected European servers that meet GDPR and ISO/IEC 27001 standards.
          </p>
          
          <p>
            The platform's operations undergo regular independent compliance audits, and broker certificates are accessible for review inside your personal account. Access to the trading account and automatic earnings using the platform costs only 300 euro and gives you unlimited use of the system.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default EnergyDeliverSection;
