"use client";

import { useState, useEffect } from "react";

const sections = ["hero", "about", "experience", "projects", "contact"];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = 120; // Altura do header + margem
      
      // Verifica qual seção está mais próxima do topo
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Atualiza inicialmente
    updateActiveSection();

    // Listener de scroll com throttle para performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeSection, setActiveSection };
};
