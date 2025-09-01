"use client";

import { useEffect } from "react";

// Componente para otimizações de performance em runtime
export function PerformanceOptimizations() {
  useEffect(() => {
    // Preload recursos importantes apenas quando necessário
    const preloadCriticalResources = () => {
      // Preload de fonte apenas se não estiver carregada
      if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
        const fontLink = document.createElement("link");
        fontLink.rel = "preload";
        fontLink.as = "style";
        fontLink.href =
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
        fontLink.onload = () => {
          fontLink.rel = "stylesheet";
        };
        document.head.appendChild(fontLink);
      }
    };

    // Defer para não bloquear o thread principal
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(preloadCriticalResources);
    } else {
      setTimeout(preloadCriticalResources, 100);
    }

    // Limpar recursos desnecessários
    return () => {
      // Cleanup se necessário
    };
  }, []);

  return null; // Este componente não renderiza nada
}
