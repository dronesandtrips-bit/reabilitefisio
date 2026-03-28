import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoReabilite from "@/assets/logoreabilite.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Tratamentos", path: "/tratamentos" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        height: scrolled ? 56 : undefined,
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm transition-colors ${
        scrolled ? "bg-background/80" : "bg-background/95"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full min-h-[4rem] md:min-h-[5rem]">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoReabilite}
            alt="Reabilite Fisio — Clínica de Fisioterapia e Pilates em Caxias do Sul"
            className="h-14 md:h-20 w-auto"
          />
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-background border-t shadow-lg overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
