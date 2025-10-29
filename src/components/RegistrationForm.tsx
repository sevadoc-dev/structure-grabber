import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    countryCode: "+44"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const countryCodes = [
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+45", flag: "🇩🇰", country: "Denmark" },
    { code: "+1", flag: "🇺🇸", country: "USA" },
    { code: "+49", flag: "🇩🇪", country: "Germany" },
  ];

  return (
    <section className="py-6 px-4">
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-slate-900/50 border-primary/50 text-white placeholder:text-slate-400 h-14 text-base focus:border-primary"
            required
          />

          <Input
            type="text"
            placeholder="Surname"
            value={formData.surname}
            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            className="bg-slate-900/50 border-primary/50 text-white placeholder:text-slate-400 h-14 text-base focus:border-primary"
            required
          />

          <Input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-slate-900/50 border-primary/50 text-white placeholder:text-slate-400 h-14 text-base focus:border-primary"
            required
          />

          <div className="flex gap-2">
            <select
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              className="bg-slate-900/50 border border-primary/50 text-white h-14 px-3 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>

            <Input
              type="tel"
              placeholder="7400 123456"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-slate-900/50 border-primary/50 text-white placeholder:text-slate-400 h-14 text-base focus:border-primary flex-1"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white"
          >
            GET STARTED
          </Button>

          <p className="text-slate-400 text-xs text-center leading-relaxed">
            By creating an account, you confirm that you are over 18 years of age and agree to mandatory verification via your telephone number.
          </p>
        </form>
      </Card>
    </section>
  );
};

export default RegistrationForm;
