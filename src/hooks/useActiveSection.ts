"use client";

import { useState, useEffect } from "react";

const sections = ["hero", "about", "experience", "projects", "contact"];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let timeoutId: number | null = null;
    
    const updateActiveSection = () => {
      const headerOffset = 120;
      
      // Cache elements para evitar re-queries
      const elements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Debounced scroll handler para reduzir overhead
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(updateActiveSection, 100); // Debounce 100ms
    };

    // Atualiza inicialmente apenas uma vez
    setTimeout(updateActiveSection, 500);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { activeSection, setActiveSection };
};
