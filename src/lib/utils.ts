import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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



export const handleNavClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  href: string
) => {
  e.preventDefault();
  const elementId = href.replace("#", "");
  scrollToSection(elementId);

};
