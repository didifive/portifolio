import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

export const Section = ({
  children,
  className = "",
  fullWidth = false,
  id,
}: SectionProps) => {
  const baseClasses = fullWidth
    ? "w-full"
    : "container mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <section id={id} className={`${baseClasses} ${className}`}>
      {children}
    </section>
  );
};
