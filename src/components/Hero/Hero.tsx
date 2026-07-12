"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { handleNavClick, getYearsOfExperienceIT, getYearsOfExperienceDev } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const yearsIT = getYearsOfExperienceIT();
  const yearsDev = getYearsOfExperienceDev();
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle pt-20 md:pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `url(/hero-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 via-emerald-55/30 to-green-50/50 dark:from-emerald-900/70 dark:via-emerald-purple-950/65 dark:to-emerald-950/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52">
              <Image
                src="/avatar-img.png"
                alt="Luis Zancanela"
                fill
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 208px"
                className="rounded-full shadow-glow object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold mb-4 text-foreground dark:text-white">
            {t("name")}
          </h1>

          <div className="mb-6 flex justify-center">
            <span className="bg-primary/90 dark:bg-primary text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg shadow-medium backdrop-blur-xs dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
              {t("badge")}
            </span>
          </div>

          <p className="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl text-foreground/80 dark:text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            {t("title")}
          </p>

          {/* <p className="text-sm md:text-base text-foreground/70 dark:text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p> */}

          {/* <p className="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl text-foreground/80 dark:text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p> */}

          {/* Experience Stats */}
          <div className="mb-8 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary dark:text-emerald-400">
                {t("stats.it", { years: yearsIT })}
              </span>
              <span className="text-foreground/70 dark:text-white/80">
                {t("stats.itLabel")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary dark:text-emerald-400">
                {t("stats.dev", { years: yearsDev })}
              </span>
              <span className="text-foreground/70 dark:text-white/80">
                {t("stats.devLabel")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary dark:text-emerald-400">
                100%
              </span>
              <span className="text-foreground/70 dark:text-white/80">
                {t("stats.endToEnd")}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              className="font-semibold"
              href="#contact"
            >
              <FiMail className="h-5 w-5" />
              {t("cta")}
            </Button>
            {/* <Button variant="outline" size="xl" className="font-semibold">
              <FiDownload className="h-5 w-5" />
              Download CV
            </Button> */}
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-foreground/60 dark:text-white/70 text-sm mb-2">
              {t("scroll")}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleNavClick(e, "#about")
              }
            >
              <FiArrowDown className="h-5 w-5 text-primary dark:text-emerald-400 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
