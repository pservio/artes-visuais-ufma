import { Link } from "wouter";
import { APP_LOGO } from "@/const";
import { Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Galeria", path: "/galeria" },
    { label: "Histórico do Curso", path: "/historico" },
    { label: "Corpo Docente e Técnico", path: "/corpo-docente" },
    { label: "CAD", path: "/cad" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={APP_LOGO} alt="Artes Visuais UFMA" className="h-12 w-auto" />
              <div className="hidden md:block">
                <div className="text-xl font-bold text-foreground">Artes Visuais</div>
                <div className="text-sm text-muted-foreground">UFMA</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button variant="ghost" className="text-sm font-medium">
                  {item.label}
                </Button>
              </Link>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className="block py-3 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-sm font-medium hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
