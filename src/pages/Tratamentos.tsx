import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import tratamentoDor from "@/assets/tratamento-dor.jpg";
import pilatesIdosos from "@/assets/pilates-idosos.jpg";
import fisioGeriatrica from "@/assets/fisio-geriatrica.jpg";
import pilatesGeral from "@/assets/pilates-geral.jpg";
import dryNeedling from "@/assets/dry-needling.jpg";
import drenagem from "@/assets/drenagem.jpg";
import massagem from "@/assets/massagem.jpg";
import estetica from "@/assets/estetica.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const mainServices = [
  {
    title: "Tratamento Especializado Contra a Dor",
    badge: "Especialidade Principal",
    image: tratamentoDor,
    desc: "Chega de conviver com dores crônicas ou agudas. Utilizamos técnicas avançadas como Dry Needling e Fisioterapia Traumato-Ortopédica para tratar a causa do problema e proporcionar alívio imediato e duradouro.",
    fullDesc: "A dor crônica e aguda afeta milhões de brasileiros e impede uma vida plena. Na Reabilite Fisio utilizamos uma abordagem completa e personalizada para identificar a origem da dor e tratá-la de forma eficaz e duradoura.",
    conditions: [
      "Dores nas costas (lombalgia e cervicalgia)",
      "Dores no joelho, quadril e ombro",
      "Fibromialgia",
      "Dores pós-cirúrgicas",
      "Tendinites e bursites",
      "Dores por postura incorreta",
      "Dores musculares crônicas",
      "Síndrome do túnel do carpo",
    ],
    techniques: [
      "Dry Needling (Agulhamento a Seco) para pontos gatilho",
      "Fisioterapia Traumato-Ortopédica",
      "Eletroterapia e ultrassom terapêutico",
      "Terapia manual e mobilização articular",
      "Exercícios terapêuticos individualizados",
      "Kinesiotaping (bandagem funcional)",
    ],
    cta: "Quero acabar com minha dor",
    borderColor: "border-primary",
  },
  {
    title: "Pilates para Idosos",
    badge: "Especialidade Principal",
    image: pilatesIdosos,
    desc: "Fortalecimento muscular, equilíbrio e flexibilidade com supervisão fisioterápica. Um ambiente seguro e acolhedor para você manter sua independência e saúde física em dia.",
    fullDesc: "O envelhecimento traz desafios ao corpo, mas com o estímulo certo é possível manter a autonomia, a disposição e a qualidade de vida por muito mais tempo.",
    conditions: [
      "Melhora do equilíbrio e redução do risco de quedas",
      "Fortalecimento muscular seguro e progressivo",
      "Aumento da flexibilidade e mobilidade articular",
      "Melhora da postura e alívio de dores crônicas",
      "Estímulo cognitivo e bem-estar emocional",
      "Maior independência nas atividades do dia a dia",
      "Melhora da respiração e circulação sanguínea",
    ],
    techniques: [
      "Avaliação fisioterapêutica completa antes do início",
      "Aulas individuais ou em pequenos grupos",
      "Exercícios adaptados ao nível e condição de cada aluno",
      "Aulas de 55 minutos com ritmo tranquilo e seguro",
      "Acompanhamento contínuo do fisioterapeuta",
      "Uso de acessórios: bolas, elásticos, pranchas de equilíbrio",
    ],
    cta: "Quero começar o Pilates para Idosos",
    borderColor: "border-secondary-foreground/40",
  },
];

const otherServices = [
  {
    title: "Fisioterapia Geriátrica",
    image: fisioGeriatrica,
    desc: "Foco em prevenção de quedas e manutenção da mobilidade no envelhecimento.",
  },
  {
    title: "Fisioterapia Geral",
    image: tratamentoDor,
    desc: "Avaliação completa e técnicas avançadas de reabilitação de movimentos.",
  },
  {
    title: "Pilates Geral",
    image: pilatesGeral,
    desc: "Aulas de 55 minutos com avaliação postural. Equilíbrio, força, flexibilidade e respiração.",
  },
  {
    title: "Dry Needling — Agulhamento a Seco",
    image: dryNeedling,
    desc: "Agulha inserida no ponto gatilho muscular para liberação de tensão e alívio de dor aguda e crônica.",
  },
  {
    title: "Drenagem Linfática",
    image: drenagem,
    desc: "Pressões manuais suaves para eliminar toxinas, reduzir edema e melhorar a circulação.",
  },
  {
    title: "Massagem Relaxante",
    image: massagem,
    desc: "Estimula produção de ocitocina, combate tensão muscular e melhora oxigenação celular.",
  },
];

const esteticaServices = [
  { title: "Limpeza de Pele", desc: "Limpeza facial profunda, extração e máscara." },
  { title: "Massagem Modeladora", desc: "Protocolo 3 etapas, redução de medidas visível na 1ª sessão." },
  { title: "Lipoescultura Gessada", desc: "Técnica Bothanica Mineral®, perda de centímetros e detoxificação." },
  { title: "Radiofrequência", desc: "Geração de calor que induz colágeno. Indicada para rugas, flacidez e celulite." },
];

const Tratamentos = () => {
  return (
    <Layout>
      <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Nossos Tratamentos
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Conheça todos os serviços oferecidos pela Reabilite Fisio. Tratamentos personalizados para cada necessidade.
          </p>
        </div>
      </section>

      {mainServices.map((service, idx) => (
        <section key={idx} className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`rounded-xl shadow-xl border-4 ${service.borderColor} w-full`}
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.fullDesc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      {idx === 0 ? "Condições tratadas:" : "Benefícios:"}
                    </h4>
                    <ul className="space-y-2">
                      {service.conditions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      {idx === 0 ? "Técnicas utilizadas:" : "Como funciona:"}
                    </h4>
                    <ul className="space-y-2">
                      {service.techniques.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5" />
                    {service.cta}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Demais Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, i) => (
              <div key={i} className="bg-card rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" loading="lazy" width={800} height={600} />
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4" />
                      Agendar
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
            Estética e Bem-estar
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Tratamentos estéticos profissionais para cuidar da sua beleza e autoestima.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="md:col-span-2">
              <img src={estetica} alt="Estética e Bem-estar" className="w-full h-64 object-cover rounded-xl shadow-lg" loading="lazy" width={800} height={600} />
            </div>
            {esteticaServices.map((service, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4" />
                    Agendar
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tratamentos;
