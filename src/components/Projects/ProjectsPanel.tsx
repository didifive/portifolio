import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProjectsPanelProps = {
  children: ReactNode;
  className?: string;
};

export function ProjectsPanel({ children, className }: ProjectsPanelProps) {
  return (
    <div className={cn("rounded-3xl border border-border/60 bg-card/70 p-5 sm:p-6 md:p-8 shadow-soft backdrop-blur", className)}>
      {children}
    </div>
  );
}
