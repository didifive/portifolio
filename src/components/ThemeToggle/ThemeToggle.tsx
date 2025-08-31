import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <FaSun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 transition-smooth hover:bg-accent"
    >
      {theme === "light" ? (
        <FaMoon className="h-4 w-4 transition-smooth" />
      ) : (
        <FaSun className="h-4 w-4 transition-smooth" />
      )}
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
};
