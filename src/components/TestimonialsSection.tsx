import { Star, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const featuredTestimonials = [
  { name: "Ale A.", text: "Melhor experiência que tive até hoje. Foi a primeira vez que obtive resultados concretos e visíveis com fisioterapia. Evolução real no meu tratamento." },
  { name: "Luciana S.", text: "Profissional excelente, dedicada e muito cuidadosa. Meu pós-operatório teve resultados incríveis. Recomendo de olhos fechados!" },
  { name: "Cristiane S.", text: "Atendimento nota 1000! Recuperei o movimento do meu braço antes do esperado. Equipe extremamente competente." },
];

const carouselTestimonials = [
  { name: "Regina X.", text: "Desde o primeiro atendimento me senti acolhida e já tive melhora significativa." },
  { name: "Catia D.", text: "Amei o local e principalmente o atendimento. Recebi avaliação completa e orientações claras. Muito satisfeita!" },
  { name: "Sandra M.", text: "Excelente atendimento e uma profissional muito competente. Sempre inovando nas técnicas para melhores resultados." },
  { name: "Aline S.", text: "Atendimento focado exatamente no que precisamos. Excelente trabalho!" },
  { name: "Nícolas G.", text: "Excelente profissional, com métodos modernos e eficazes. Resolveu meu problema!" },
  { name: "Yasmin W.", text: "Experiência maravilhosa! Atendimento sensacional." },
  { name: "Tere T.", text: "Ótima profissional! Muito dedicada e querida! Super indico!" },
  { name: "Jucemara A.", text: "Ótima profissional, alegre e gentil." },
  { name: "Rafaela O.", text: "Super indico. Ótimo atendimento e profissionalismo." },
  { name: "Samuel H.", text: "Profissional muito atenciosa e dedicada." },
  { name: "Dejanira J.", text: "Foi uma experiência muito boa. Muito obrigada!" },
  { name: "Janete D.", text: "Excelente profissional!" },
  { name: "Luana T.", text: "Trabalho excelente!" },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialCard = ({ name, text, featured = false }: { name: string; text: string; featured?: boolean }) => (
  <div className={`relative bg-card rounded-xl p-6 shadow-md border ${featured ? "border-primary/30 shadow-lg" : ""} h-full flex flex-col`}>
    <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/15" />
    <Stars />
    <p className="text-muted-foreground leading-relaxed flex-1 mb-4 italic">"{text}"</p>
    <div className="flex items-center gap-3 mt-auto">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
        {name.charAt(0)}
      </div>
      <span className="font-heading font-semibold text-foreground text-sm">{name}</span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <>
      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-3">
            O que nossos pacientes dizem
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Resultados reais de quem já passou pelo nosso atendimento e recuperou sua qualidade de vida.
          </p>
          <p className="text-center text-sm text-primary font-semibold mb-12">
            Dezenas de pacientes satisfeitos com resultados reais
          </p>

          {/* Featured */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredTestimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} featured />
            ))}
          </div>

          {/* Carousel */}
          <div className="max-w-5xl mx-auto px-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {carouselTestimonials.map((t, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...t} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Você pode ser o próximo resultado de sucesso
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Não conviva com a dor. Comece seu tratamento hoje mesmo.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp agora
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
