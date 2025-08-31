"use client";

import { Button } from "./ui/Button";

export function SkipLink() {
  const skipToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={skipToContent}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-primary text-white px-4 py-2 rounded-md font-medium transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
      variant="default"
    >
      Pular para o conteúdo principal
    </Button>
  );
}

// Componente para landmarks ARIA
export function AccessibilityLandmarks({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipLink />
      <div id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </div>
    </>
  );
}
