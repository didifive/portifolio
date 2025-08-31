"use client";

import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Button } from "../ui/Button";

export const Footer = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const elementId = href.replace("#", "");
    scrollToSection(elementId);
  };
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="h-4 w-4" />,
      label: "GitHub",
      url: "#",
    },
    {
      icon: <FaLinkedin className="h-4 w-4" />,
      label: "LinkedIn",
      url: "#",
    },
    {
      icon: <FaRegEnvelope className="h-4 w-4" />,
      label: "Email",
      url: "mailto:contato@exemplo.com",
    },
    {
      icon: <FaWhatsapp className="h-4 w-4" />,
      label: "WhatsApp",
      url: "https://wa.me/5561992943297",
    },
    {
      icon: <FaInstagram className="h-4 w-4" />,
      label: "Instagram",
      url: "https://www.instagram.com/mykesousa",
    },
  ];

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-xl font-bold text-gradient">
                Maykon Sousa
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções
                inovadoras e experiências digitais excepcionais.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Navegação</h4>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary dark:hover:text-blue-400 transition-smooth text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Vamos trabalhar juntos?</h4>
              <p className="text-muted-foreground text-sm">
                Estou sempre interessado em novos projetos e oportunidades.
              </p>
              <Button variant="default" size="sm" className="w-full md:w-auto">
                <FaRegEnvelope className="h-4 w-4 mr-2" />
                Entre em Contato
              </Button>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Maykon Sousa. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
