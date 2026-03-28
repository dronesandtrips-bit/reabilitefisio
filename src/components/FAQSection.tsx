import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/motion/ScrollReveal";

const faqs = [
  {
    question: "A Reabilite Fisio atende idosos?",
    answer: "Sim! Somos especialistas em Pilates para Idosos e Fisioterapia Geriátrica em Caxias do Sul. Nossas aulas e tratamentos são totalmente adaptados à terceira idade, com foco em equilíbrio, prevenção de quedas e fortalecimento muscular seguro.",
  },
  {
    question: "O que é Dry Needling (Agulhamento a Seco)?",
    answer: "É uma técnica fisioterapêutica que utiliza agulhas finas inseridas diretamente nos pontos gatilho do músculo para liberar tensão e aliviar dores crônicas e agudas. É indicada para lombalgia, cervicalgia, tendinites e outras condições músculo-esqueléticas.",
  },
  {
    question: "Como agendar uma consulta em Caxias do Sul?",
    answer: "Você pode agendar pelo WhatsApp (54) 99187-9915, pelo e-mail reabilitefisio@reabilitefisio.com ou pelo formulário de contato do site. Atendemos na Rua Professora Viero, 571, Bairro Medianeira, Caxias do Sul - RS.",
  },
  {
    question: "A Reabilite Fisio trata dores crônicas?",
    answer: "Sim. Somos especializados no tratamento de dores crônicas e agudas como lombalgia, cervicalgia, fibromialgia, tendinites, dores no joelho, ombro e quadril. Utilizamos Dry Needling, eletroterapia, terapia manual e exercícios terapêuticos individualizados.",
  },
  {
    question: "O Pilates para Idosos é seguro?",
    answer: "Completamente. Todas as aulas são supervisionadas por fisioterapeutas e os exercícios são adaptados individualmente. Antes de iniciar, realizamos uma avaliação fisioterapêutica completa para garantir segurança e eficácia.",
  },
  {
    question: "Onde fica a clínica em Caxias do Sul?",
    answer: "Estamos localizados na Rua Professora Viero, 571, Bairro Medianeira, Caxias do Sul - RS, CEP 95040-520. Funcionamos de segunda a sexta, das 8h às 18h.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Perguntas Frequentes
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 shadow-sm">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
