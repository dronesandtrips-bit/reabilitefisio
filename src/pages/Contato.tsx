import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { toast } from "sonner";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="Contato | Reabilite Fisio — Fisioterapia em Caxias do Sul"
        description="Entre em contato com a Reabilite Fisio. Herculles Galló, 515 sala 402 — Centro, Caxias do Sul - RS. WhatsApp: (54) 99187-9915."
        canonical="https://reabilitefisio.lovable.app/contato"
      />
      <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Fale com a Reabilite Fisio em Caxias do Sul</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Entre em contato conosco. Estamos prontos para atender você!
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Nossa Localização — Bairro Medianeira, Caxias do Sul</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Rua Professora Viero, 571 — Medianeira<br />Caxias do Sul - RS, CEP 95040-520</p>
                  </div>
                </div>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">(54) 99187-9915</p>
                  </div>
                </a>

                <a href="mailto:reabilitefisio@reabilitefisio.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">E-mail</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">reabilitefisio@reabilitefisio.com</p>
                  </div>
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Facebook</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">Siga-nos no Facebook</p>
                  </div>
                </a>
              </div>

              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Fale pelo WhatsApp
                </a>
              </Button>

              {/* Map */}
              <div className="mt-10 rounded-xl overflow-hidden shadow-lg border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.8!2d-51.179!3d-29.169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDEwJzA4LjQiUyA1McKwMTAnNDQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                   title="Localização Reabilite Fisio — Caxias do Sul"
                   aria-label="Mapa com a localização da Reabilite Fisio em Caxias do Sul"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-heading font-medium text-foreground mb-1.5 block">Nome</label>
                  <Input
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <label className="text-sm font-heading font-medium text-foreground mb-1.5 block">E-mail</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <label className="text-sm font-heading font-medium text-foreground mb-1.5 block">Assunto</label>
                  <Input
                    placeholder="Assunto da mensagem"
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <label className="text-sm font-heading font-medium text-foreground mb-1.5 block">Mensagem</label>
                  <Textarea
                    placeholder="Escreva sua mensagem..."
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    required
                    rows={5}
                    className="text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
