import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [location] = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6" data-testid="icon-menu" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight" data-testid="text-title">
              Boarding Cafeteria Menu
            </h1>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-sm sm:text-base font-medium uppercase tracking-wider hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-menu"
            >
              Menu
            </button>
            <span className="hidden sm:inline text-primary-foreground/30">|</span>
            <button
              onClick={() => scrollToSection('survey')}
              className="text-sm sm:text-base font-medium uppercase tracking-wider hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-survey"
            >
              Survey
            </button>
            <span className="hidden sm:inline text-primary-foreground/30">|</span>
            <button
              onClick={() => scrollToSection('feedback')}
              className="text-sm sm:text-base font-medium uppercase tracking-wider hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-feedback"
            >
              Feedback
            </button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="ml-2"
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
