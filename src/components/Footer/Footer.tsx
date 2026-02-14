"use client";

import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
import { Button } from "../ui/Button";
import { urls } from "@/lib/urls";
import { appConfig } from "@/lib/appConfig";
import { currentYear } from "@/lib/utils";

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

  const socialLinks = [
    {
      icon: <FaGithub className="h-4 w-4" />,
      label: "GitHub",
      url: urls.github,
    },
    {
      icon: <FaLinkedin className="h-4 w-4" />,
      label: "LinkedIn",
      url: urls.linkedin,
    },
    {
      icon: <FaRegEnvelope className="h-4 w-4" />,
      label: "Email",
      url: `mailto:${urls.email}`,
    },
    // {
    //   icon: <FaWhatsapp className="h-4 w-4" />,
    //   label: "WhatsApp",
    //   url: `https://wa.me/${urls.whatsapp}`,
    // },
    // {
    //   icon: <FaInstagram className="h-4 w-4" />,
    //   label: "Instagram",
    //   url: "#",
    // },
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
                Luis Zancanela
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvedor Back-End apaixonado por criar soluções
                inovadoras e de alta escala.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
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
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary dark:hover:text-emerald-400 transition-smooth text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quer falar?</h4>
              <p className="text-muted-foreground text-sm">
                Bora falar sobre tecnologia, sistemas e Java?
              </p>
              <Button 
              variant="default" 
              size="sm" 
              className="w-full md:w-auto"
              href="#contact">
                <FaRegEnvelope className="h-4 w-4 mr-2" />
                Entre em Contato
              </Button>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Luis Zancanela. Todos os direitos reservados.
              </div>
              <div className="text-xs text-muted-foreground">
                v{appConfig.version}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
