import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-foreground text-background/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-background mb-4">
              Reabilite <span className="text-primary">Fisio</span>
            </h3>
            <p className="text-background/70 leading-relaxed">
              Clínica focada no tratamento, reabilitação de movimentos e na prevenção de problemas do dia a dia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-background mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/tratamentos" className="text-background/70 hover:text-primary transition-colors">Tratamentos</Link>
              <Link to="/blog" className="text-background/70 hover:text-primary transition-colors">Blog</Link>
              <Link to="/contato" className="text-background/70 hover:text-primary transition-colors">Contato</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-background mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Rua Professora Viero, 571 — Medianeira, Caxias do Sul - RS</span>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                (54) 99187-9915
              </a>
              <a href="mailto:reabilitefisio@reabilitefisio.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                reabilitefisio@reabilitefisio.com
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5 text-primary shrink-0" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} Reabilite Fisio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
