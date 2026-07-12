"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { routing, type AppLocale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const localeMeta: Record<AppLocale, { label: string; flag: string }> = {
  "pt-BR": { label: "Português", flag: "🇧🇷" },
  "en-US": { label: "English", flag: "🇺🇸" },
};

const flagImages: Record<AppLocale, string> = {
  "pt-BR": "/flags/br.svg",
  "en-US": "/flags/us.svg",
};


export const LanguageSwitcher = () => {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeMeta = localeMeta[locale];

  const handleLocaleChange = (targetLocale: AppLocale) => {
    router.replace(pathname, { locale: targetLocale });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-muted"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Language selector. Current language ${activeMeta.label}`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Image
          src={flagImages[locale]}
          alt={locale}
          width={16}
          height={16}
          quality={100}
          className="h-4 w-4"
          aria-hidden="true"
        />
        <span aria-hidden="true" className="ml-1 text-[10px] text-foreground/60">▾</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 min-w-40 overflow-hidden rounded-2xl border border-border bg-background/95 p-1 shadow-lg backdrop-blur-md"
        >
          {routing.locales.map((targetLocale) => {
            const isActive = locale === targetLocale;
            const meta = localeMeta[targetLocale];

            return (
              <button
                key={targetLocale}
                type="button"
                role="menuitem"
                onClick={() => handleLocaleChange(targetLocale)}
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-2 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="inline-flex items-center gap-1">
                  <Image
                    src={flagImages[targetLocale]}
                    alt={targetLocale}
                    width={16}
                    height={16}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold tracking-wide">{meta.label}</span>
                </span>
                {isActive && <span aria-hidden="true" className="text-[10px]">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
