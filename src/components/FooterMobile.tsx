const FooterMobile = () => {
  const footerLinks = [
    { title: "Конфиденциальность", links: ["Политика конфиденциальности", "Cookies", "Условия использования"] },
    { title: "Контакты", links: ["Связаться с нами", "Пресс-центр", "Офисы"] },
    { title: "Социальные сети", links: ["LinkedIn", "Twitter", "Facebook"] }
  ];

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-2xl">
        <div className="text-3xl font-bold mb-8">
          Ørsted
        </div>
        
        <div className="space-y-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3 text-background/80">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 text-sm text-background/60">
          <p>© 2025 Ørsted. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
