import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, UserCheck, Home, ArrowRight, Calendar, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";
import tratamentoDor from "@/assets/tratamento-dor.jpg";
import pilatesIdosos from "@/assets/pilates-idosos.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const services = [
  { title: "Fisioterapia Geriátrica", desc: "Foco em prevenção de quedas e manutenção da mobilidade no envelhecimento.", link: "/tratamentos" },
  { title: "Fisioterapia Geral", desc: "Avaliação completa e técnicas avançadas de reabilitação de movimentos.", link: "/tratamentos" },
  { title: "Pilates Geral", desc: "Aulas de 55 minutos com avaliação postural. Equilíbrio, força e flexibilidade.", link: "/tratamentos" },
  { title: "Dry Needling", desc: "Agulhamento a seco para liberação de tensão e alívio de dor aguda e crônica.", link: "/tratamentos" },
  { title: "Drenagem Linfática", desc: "Pressões manuais suaves para eliminar toxinas e reduzir edema.", link: "/tratamentos" },
  { title: "Massagem Relaxante", desc: "Combate tensão muscular e melhora oxigenação celular.", link: "/tratamentos" },
];

const blogPosts = [
  { title: "5 Benefícios do Pilates para a Terceira Idade", date: "15/03/2026", excerpt: "Mais do que exercício, qualidade de vida. Descubra como o Pilates pode transformar o dia a dia dos idosos." },
  { title: "Como o Dry Needling ajuda no alívio de dores crônicas", date: "08/02/2026", excerpt: "Entenda como o agulhamento a seco atua nos pontos gatilho para aliviar dores musculares." },
  { title: "A importância da fisioterapia na prevenção de quedas", date: "22/01/2026", excerpt: "Saiba como a fisioterapia pode reduzir significativamente o risco de quedas em idosos." },
];

const stats = [
  { value: 15, suffix: "+", label: "Anos de experiência" },
  { value: 1000, suffix: "+", label: "Pacientes atendidos" },
  { value: 98, suffix: "%", label: "Satisfação dos pacientes" },
];

const Index = () => {
  const prefersReducedMotion = useReducedMotion();

  const heroItem = prefersReducedMotion
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroBg} alt="Clínica de fisioterapia" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.h1
              {...heroItem}
              transition={{ duration: 0.5, type: "spring", stiffness: 80, damping: 20 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Viva sem limitações: Especialistas em Alívio da Dor e Pilates para a Melhor Idade
            </motion.h1>
            <motion.p
              {...heroItem}
              transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 80, damping: 20 }}
              className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed max-w-2xl"
            >
              Na Reabilite Fisio, combinamos tecnologia e cuidado humano para devolver sua mobilidade e qualidade de vida. Atendimento especializado em Caxias do Sul.
            </motion.p>
            <motion.div
              {...heroItem}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Quero agendar minha avaliação
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="#servicos">Conhecer nossos tratamentos</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-28 relative z-20" staggerDelay={0.2}>
            <motion.div variants={staggerItemVariants} whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }} className="bg-card rounded-xl shadow-xl overflow-hidden border-2 border-primary group hover:shadow-2xl transition-shadow">
              <div className="relative h-52 overflow-hidden">
                <img src={tratamentoDor} alt="Tratamento da dor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">Especialidade Principal</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Tratamento Especializado contra a Dor</h3>
                <p className="text-muted-foreground leading-relaxed">Recupere sua qualidade de vida com técnicas avançadas como Dry Needling e Fisioterapia Traumato-Ortopédica.</p>
                <Button variant="link" asChild className="mt-3 p-0"><Link to="/tratamentos">Saiba mais <ArrowRight className="w-4 h-4" /></Link></Button>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }} className="bg-card rounded-xl shadow-xl overflow-hidden border-2 group hover:shadow-2xl transition-shadow" style={{ borderColor: "hsl(125, 39%, 70%)" }}>
              <div className="relative h-52 overflow-hidden">
                <img src={pilatesIdosos} alt="Pilates para idosos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">Especialidade Principal</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Pilates para Idosos</h3>
                <p className="text-muted-foreground leading-relaxed">Movimento seguro em cada fase da vida. Fortalecimento, equilíbrio e flexibilidade com supervisão fisioterápica.</p>
                <Button variant="link" asChild className="mt-3 p-0"><Link to="/tratamentos">Saiba mais <ArrowRight className="w-4 h-4" /></Link></Button>
              </div>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" staggerDelay={0.15}>
            {stats.map((stat, i) => (
              <motion.div key={i} variants={staggerItemVariants} className="p-6">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
              Por que escolher a Reabilite Fisio?
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-10 h-10 text-primary transition-colors duration-300 group-hover:text-[hsl(125,39%,49%)]" />, title: "Fisioterapia Especializada", desc: "Todos os exercícios e tratamentos são conduzidos por fisioterapeutas experientes." },
              { icon: <UserCheck className="w-10 h-10 text-primary transition-colors duration-300 group-hover:text-[hsl(125,39%,49%)]" />, title: "Atendimento Personalizado", desc: "Planos de tratamento únicos para cada paciente, respeitando seus limites e objetivos." },
              { icon: <Home className="w-10 h-10 text-primary transition-colors duration-300 group-hover:text-[hsl(125,39%,49%)]" />, title: "Ambiente Acolhedor", desc: "Espaço planejado para o conforto e segurança, especialmente para o público sênior." },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItemVariants} whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }} className="group text-center p-8 rounded-xl bg-muted/50 hover:shadow-lg transition-shadow cursor-default">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services grid */}
      <section id="servicos" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
              Nossos Serviços
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} variants={staggerItemVariants} whileHover={{ scale: 1.03, y: -4, transition: { type: "spring", stiffness: 300 } }} className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={service.link}>Ver mais <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Blog highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">Blog</h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div key={i} variants={staggerItemVariants} whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }} className="bg-card rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-accent flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-1 mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog">Leia mais <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials + CTA Banner */}
      <TestimonialsSection />

      {/* CTA */}
      <ScrollReveal>
        <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Pronto para viver sem dor?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Agende sua avaliação e descubra como podemos ajudar você a recuperar sua qualidade de vida.
            </p>
            <Button variant="hero" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
