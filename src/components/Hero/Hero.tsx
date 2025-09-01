"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { handleNavClick } from "@/lib/utils";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle pt-20 md:pt-16"
    >
      {/* Background Image Otimizada */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="absolute inset-0 opacity-20 dark:opacity-30 object-cover"
        priority={false}
        sizes="100vw"
        quality={50}
        loading="lazy"
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/90 via-purple-50/80 to-blue-50/90 dark:from-pink-950/80 dark:via-purple-950/70 dark:to-blue-950/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52">
              <Image
                src="/avatar-img.jpg"
                alt="Foto do perfil de Maykon Sousa, desenvolvedor full stack sorrindo"
                fill
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 208px"
                className="rounded-full shadow-glow object-cover"
                priority
                loading="eager"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold mb-4 text-foreground dark:text-white">
            Maykon Sousa
          </h1>

          <div className="mb-6 flex justify-center">
            <span className="bg-primary/90 dark:bg-primary text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg shadow-medium backdrop-blur-sm">
              Software Engineer
            </span>
          </div>

          <p className="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl text-foreground/80 dark:text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Fullstack Developer focado em construir produtos digitais completos
            tanto para plataformas web quanto mobile. Atuo hoje com tecnologias
            modernas e escaláveis como React, Node, React Native e venho me
            capacitando também em Java e Kotlin.
          </p>

          {/* Experience Stats */}
          <div className="mb-8 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary dark:text-blue-400">
                5+
              </span>
              <span className="text-foreground/70 dark:text-white/80">
                Anos de Experiência
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary dark:text-blue-400">
                20+
              </span>
              <span className="text-foreground/70 dark:text-white/80">
                Projetos Entregues
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary dark:text-blue-400">
                100%
              </span>
              <span className="text-foreground/70 dark:text-white/80">
                End-to-End Solutions
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              className="font-semibold"
              aria-label="Entrar em contato com Maykon Sousa"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleNavClick(e, "#contact")
              }
            >
              <FiMail className="h-5 w-5" aria-hidden="true" />
              Entre em Contato
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="font-semibold"
              aria-label="Baixar currículo de Maykon Sousa em PDF"
              href="/cv-maykon-sousa.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload className="h-5 w-5" aria-hidden="true" />
              Download CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-foreground/60 dark:text-white/70 text-sm mb-2">
              Role para baixo
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce"
              aria-label="Rolar para a seção sobre mim"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleNavClick(e, "#about")
              }
            >
              <FiArrowDown
                className="h-5 w-5 text-primary dark:text-blue-400 animate-bounce"
                aria-hidden="true"
              />
              <span className="sr-only">Ir para seção sobre</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
