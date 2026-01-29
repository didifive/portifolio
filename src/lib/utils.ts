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

export const currentYear = new Date().getFullYear();

const START_YEAR_IT = 2007; // Quando começou em TI
const START_YEAR_DEV = 2022; // Quando começou como desenvolvedor

export const getYearsOfExperienceIT = () => {
  return currentYear - START_YEAR_IT;
};

export const getYearsOfExperienceDev = () => {
  return currentYear - START_YEAR_DEV;
};
