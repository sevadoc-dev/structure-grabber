import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-slate-400 hover:text-slate-300 underline transition-colors">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-background border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Ørsted AI — Privacy Policy</DialogTitle>
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
              <h3 className="font-semibold text-lg mb-2">1. Introduction</h3>
              <p className="text-slate-300 mb-2">This Privacy Policy explains how Ørsted AI ("we," "our," "us") collects, uses, and protects personal information provided by visitors and users of our website and platform.</p>
              <p className="text-slate-300">We are fully committed to safeguarding your privacy in compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR).</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Information We Collect</h3>
              <p className="text-slate-300 mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-1">
                <li>Personal identification data: name, email, phone number, country of residence.</li>
                <li>Account data: login credentials, preferences, and communication history.</li>
                <li>Technical data: IP address, browser type, device information, cookies, and usage analytics.</li>
                <li>Verification data: documents and information required by law to verify your identity (if applicable).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. How We Use Your Information</h3>
              <p className="text-slate-300 mb-2">We use your data to:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-1">
                <li>Provide and maintain the Ørsted AI Services.</li>
                <li>Process account registration and authentication.</li>
                <li>Communicate updates, support, and promotional materials (only with consent).</li>
                <li>Comply with regulatory and legal requirements under MiFID II and GDPR.</li>
                <li>Analyse anonymized usage patterns to improve platform performance.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Legal Basis for Processing</h3>
              <p className="text-slate-300 mb-2">We process your personal data on the following lawful bases:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-1">
                <li>Contractual necessity (to deliver the Services you requested).</li>
                <li>Legal obligation (to comply with regulatory requirements).</li>
                <li>Legitimate interest (to improve functionality and security).</li>
                <li>Consent (for marketing communications).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. Data Retention</h3>
              <p className="text-slate-300 mb-2">Personal data is stored only for as long as necessary to fulfil the purposes described above or as required by applicable law.</p>
              <p className="text-slate-300">When no longer needed, data is securely deleted or anonymized.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. Data Security</h3>
              <p className="text-slate-300 mb-2">All data transmitted between you and Ørsted AI is protected by 256-bit SSL encryption.</p>
              <p className="text-slate-300 mb-2">Data is stored on secure European servers compliant with ISO/IEC 27001 standards.</p>
              <p className="text-slate-300">We implement both technical and organizational measures to prevent unauthorized access, disclosure, or alteration.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">7. Your Rights</h3>
              <p className="text-slate-300 mb-2">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-1">
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent at any time.</li>
                <li>Request data portability.</li>
                <li>File a complaint with your local Data Protection Authority.</li>
              </ul>
              <p className="text-slate-300 mt-2">Requests can be made via email to info@orstedai.com.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">8. Data Sharing and Transfers</h3>
              <p className="text-slate-300 mb-2">We do not sell or rent user data.</p>
              <p className="text-slate-300 mb-2">Personal data may be shared with:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-1">
                <li>Licensed brokers or partners for service execution.</li>
                <li>Regulatory authorities if legally required.</li>
                <li>Trusted third-party providers (hosting, analytics, support), bound by data protection agreements.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">9. Cookies</h3>
              <p className="text-slate-300 mb-2">Our website uses cookies to enhance user experience, analyse traffic, and remember preferences.</p>
              <p className="text-slate-300">You can control or disable cookies through your browser settings.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">10. Updates to This Policy</h3>
              <p className="text-slate-300 mb-2">Ørsted AI may update this Privacy Policy from time to time.</p>
              <p className="text-slate-300 mb-2">All changes will be published on this page with the updated "Effective Date."</p>
              <p className="text-slate-300">Continued use of the Services constitutes acceptance of the revised policy.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyDialog;
