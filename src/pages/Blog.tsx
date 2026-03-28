import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const posts = [
  {
    title: "5 Benefícios do Pilates para a Terceira Idade",
    date: "15/03/2026",
    excerpt: "Mais do que exercício, qualidade de vida. Descubra como o Pilates pode transformar o dia a dia dos idosos com mais equilíbrio, força e independência.",
    content: "O Pilates é uma das atividades mais recomendadas para idosos por ser de baixo impacto e altamente adaptável. Entre os principais benefícios estão: melhora do equilíbrio e prevenção de quedas, fortalecimento muscular progressivo, aumento da flexibilidade, melhora da postura e alívio de dores, e estímulo cognitivo e emocional. Na Reabilite Fisio, todas as aulas são supervisionadas por fisioterapeutas especializados.",
  },
  {
    title: "Como o Dry Needling ajuda no alívio de dores musculares crônicas",
    date: "08/02/2026",
    excerpt: "Entenda como o agulhamento a seco atua nos pontos gatilho para aliviar dores musculares de forma rápida e eficaz.",
    content: "O Dry Needling, ou agulhamento a seco, é uma técnica que utiliza agulhas finas inseridas em pontos gatilho musculares. Esses pontos são nódulos de tensão que causam dor referida em outras áreas do corpo. A técnica promove relaxamento muscular, melhora da circulação local e alívio imediato da dor. É especialmente eficaz para dores crônicas, cefaléias tensionais e dores miofasciais.",
  },
  {
    title: "A importância da fisioterapia na prevenção de quedas em idosos",
    date: "22/01/2026",
    excerpt: "Saiba como a fisioterapia pode reduzir significativamente o risco de quedas em idosos e promover mais autonomia.",
    content: "As quedas são uma das principais causas de lesões graves em idosos. A fisioterapia preventiva trabalha o fortalecimento muscular, o equilíbrio e a propriocepção, reduzindo significativamente o risco de quedas. Exercícios específicos e orientações sobre segurança no ambiente doméstico fazem parte do tratamento.",
  },
  {
    title: "Lipoescultura Gessada",
    date: "20/03/2018",
    excerpt: "Técnica Bothanica Mineral® com produtos ortomoleculares. Perda de centímetros e desinchaço já na 1ª sessão.",
    content: "A Lipoescultura Gessada é um tratamento estético que utiliza a técnica Bothanica Mineral® com produtos ortomoleculares. O procedimento promove a perda de centímetros, desinchaço e detoxificação já na primeira sessão. É indicado para quem busca redução de medidas de forma não invasiva.",
  },
  {
    title: "Radiofrequência",
    date: "14/08/2017",
    excerpt: "Tratamento que gera calor no tecido, induzindo colágeno. Indicado para rugas, flacidez e gordura localizada.",
    content: "A Radiofrequência é um tratamento que utiliza ondas eletromagnéticas para gerar calor controlado nos tecidos profundos da pele. Esse aquecimento estimula a produção de colágeno e elastina, promovendo firmeza e rejuvenescimento. É indicada para tratamento de rugas, flacidez, celulite e gordura localizada.",
  },
  {
    title: "Massagem Modeladora",
    date: "09/03/2016",
    excerpt: "Reduction Cosmetic Massage com protocolo de 3 etapas. Resultados em 2 semanas.",
    content: "A Massagem Modeladora é um protocolo de 3 etapas que combina técnicas de drenagem, modelagem e redução. A Reduction Cosmetic Massage promove a quebra de gordura localizada, melhora a circulação e reduz medidas de forma visível. Os primeiros resultados podem ser notados em apenas 2 semanas de tratamento regular.",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog de Fisioterapia e Saúde — Reabilite Fisio Caxias do Sul"
        description="Dicas de saúde, fisioterapia, pilates para idosos e bem-estar. Conteúdo especializado da Reabilite Fisio em Caxias do Sul - RS."
        canonical="https://reabilitefisio.lovable.app/blog"
      />
      <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Blog de Fisioterapia e Saúde</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Dicas, novidades e informações sobre fisioterapia, pilates e bem-estar.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-card rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-accent flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform">📝</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <h2 className="text-lg font-heading font-semibold text-foreground mt-1 mb-3">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <details className="group/details">
                    <summary className="cursor-pointer text-primary font-heading font-medium text-sm flex items-center gap-1 hover:underline">
                      Leia mais <ArrowRight className="w-4 h-4" />
                    </summary>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{post.content}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
