import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

export const Main = ({ children, className = "" }: MainProps) => {
  return (
    <main className={`w-full flex flex-col ${className}`}>{children}</main>
  );
};
