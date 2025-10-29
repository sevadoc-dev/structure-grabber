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
            Security and Regulation
          </h2>
        </div>
        
        <div className="space-y-4 text-slate-300">
          <p>
            Ørsted AI operates exclusively through licensed European brokers that comply with MiFID II and other recognized EU financial regulations. This ensures that every trading operation within the system is carried out through institutions monitored by official regulatory authorities — providing users with complete transparency and legal protection.
          </p>
          
          <p>
            All transactions within the platform are protected by 256-bit SSL encryption, the same security level used in international banking networks. User data is stored solely on secure European servers that fully comply with GDPR and ISO/IEC 27001 standards, guaranteeing the confidentiality and integrity of your information.
          </p>
          
          <p>
            Ørsted AI undergoes regular independent compliance audits, confirming that its operations meet the strictest requirements of the European financial sector. Broker licenses and certificates are always available for review inside your personal account.
          </p>
          
          <p>
            Access to your trading account and the automated profit system requires a one-time activation of €300, which unlocks full and unlimited use of the Ørsted AI platform.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default EnergyDeliverSection;
