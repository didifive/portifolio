import { useTheme } from "next-themes";
import { Button } from "../ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
      className="w-9 h-9 transition-smooth hover:bg-accent"
    >
      <FaMoon className="h-4 w-4 transition-smooth dark:hidden" />
      <FaSun className="hidden h-4 w-4 transition-smooth dark:block" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
};
