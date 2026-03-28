import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Tratamentos", path: "/tratamentos" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
            Reabilite <span className="text-foreground">Fisio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-heading font-medium text-base transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="whatsapp" size="sm" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" />
              Agendar
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-heading font-medium text-lg py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="whatsapp" asChild className="mt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
