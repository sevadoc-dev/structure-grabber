import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-slate-400 hover:text-slate-300 underline transition-colors">
          Terms of Use
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-background border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Ørsted AI — Terms of Use</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-slate-400 mb-1">Effective Date: October 1, 2025</p>
              <p className="text-slate-400 mb-1">Company: Ørsted AI B.V.</p>
              <p className="text-slate-400 mb-1">Registered Office: Herengracht 420, 1017 BZ Amsterdam, The Netherlands</p>
              <p className="text-slate-400">Contact Email: info@orstedai.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">1. General</h3>
              <p className="text-slate-300 mb-2">These Terms of Use ("Terms") govern your access to and use of the Ørsted AI website, platform, and related services (collectively, the "Services").</p>
              <p className="text-slate-300 mb-2">By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy.</p>
              <p className="text-slate-300">If you do not agree with these Terms, please refrain from using the Services.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Eligibility</h3>
              <p className="text-slate-300 mb-2">The Services are available only to individuals who are at least 18 years old and legally capable of entering into binding agreements under applicable law.</p>
              <p className="text-slate-300">Use of the Services may be restricted in certain jurisdictions. It is your responsibility to ensure that accessing or using the Services is permitted in your country.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. Nature of the Service</h3>
              <p className="text-slate-300 mb-2">Ørsted AI provides a technology platform that uses artificial intelligence to analyse financial and energy markets and assist users in making investment decisions.</p>
              <p className="text-slate-300 mb-2">Ørsted AI does not directly hold or manage user funds and does not act as a financial advisor.</p>
              <p className="text-slate-300">All trading activity is executed through licensed European brokers operating under MiFID II or other recognised regulatory frameworks.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Risk Disclosure</h3>
              <p className="text-slate-300 mb-2">Trading and investment activities involve significant risk of loss.</p>
              <p className="text-slate-300 mb-2">Past performance does not guarantee future results.</p>
              <p className="text-slate-300">Users should assess their financial situation, risk tolerance, and investment objectives before using the Services.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. User Responsibilities</h3>
              <p className="text-slate-300 mb-2">You agree to:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-1">
                <li>Provide accurate and complete information during registration.</li>
                <li>Maintain the confidentiality of your login credentials.</li>
                <li>Use the Services only for lawful purposes.</li>
              </ul>
              <p className="text-slate-300 mt-2">You are solely responsible for all actions taken through your account.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. Intellectual Property</h3>
              <p className="text-slate-300 mb-2">All content, software, logos, graphics, and materials available on the Ørsted AI website are the intellectual property of Ørsted AI B.V. or its licensors.</p>
              <p className="text-slate-300">You may not reproduce, copy, modify, or distribute any part of the Services without prior written consent.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">7. Limitation of Liability</h3>
              <p className="text-slate-300">To the fullest extent permitted by law, Ørsted AI shall not be liable for any indirect, incidental, or consequential damages arising from the use of or inability to use the Services, including losses resulting from market movements or third-party failures.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">8. Termination</h3>
              <p className="text-slate-300">Ørsted AI reserves the right to suspend or terminate any account that violates these Terms or applicable laws without prior notice.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">9. Data Protection</h3>
              <p className="text-slate-300 mb-2">The collection and processing of personal data are governed by our Privacy Policy.</p>
              <p className="text-slate-300">By using the Services, you consent to such processing in accordance with GDPR.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">10. Governing Law</h3>
              <p className="text-slate-300 mb-2">These Terms shall be governed by and construed in accordance with the laws of The Netherlands.</p>
              <p className="text-slate-300">Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in Amsterdam.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
