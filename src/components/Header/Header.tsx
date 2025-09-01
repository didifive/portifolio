"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaAlignJustify,
  FaRegEnvelope,
} from "@/components/OptimizedIcons";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    // Atualiza estado ativo imediatamente para feedback visual
    setActiveSection(elementId);
    scrollToSection(elementId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-xl font-bold text-gradient">
            <a href="#hero" aria-label="Maykon Sousa - Voltar ao início">
              Maykon Sousa
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-smooth font-medium cursor-pointer relative ${
                    isActive
                      ? "text-primary dark:text-blue-400 font-semibold"
                      : "text-foreground hover:text-primary dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary dark:bg-blue-400 rounded-full transition-all duration-300"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="w-px h-6 bg-border"></div>
            <Button
              variant="ghost"
              size="icon"
              href="https://github.com/maykonsousa"
              aria-label="Visitar perfil do GitHub de Maykon Sousa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              href="https://www.linkedin.com/in/maykonsousa"
              aria-label="Conectar no LinkedIn com Maykon Sousa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              href="mailto:maykon.sousa@hotmail.com"
              aria-label="Enviar email para Maykon Sousa"
            >
              <FaRegEnvelope className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5" aria-hidden="true" />
            ) : (
              <FaAlignJustify className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden mt-4 pb-4 space-y-4"
            role="navigation"
            aria-label="Menu de navegação móvel"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block transition-smooth font-medium cursor-pointer relative ${
                    isActive
                      ? "text-primary dark:text-blue-400 font-semibold"
                      : "text-foreground hover:text-primary dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary dark:bg-blue-400 rounded-full transition-all duration-300"></span>
                  )}
                </a>
              );
            })}
            <div className="flex items-center space-x-4 pt-4">
              <ThemeToggle />
              <div className="w-px h-6 bg-border"></div>
              <Button
                variant="ghost"
                size="icon"
                href="https://github.com/maykonsousa"
                aria-label="Visitar GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                href="https://www.linkedin.com/in/maykonsousa"
                aria-label="Conectar no LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                href="mailto:maykon.sousa@hotmail.com"
                aria-label="Enviar email"
              >
                <FaRegEnvelope className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};
