import { Card } from "@/components/ui/card";

export default function Historico() {
  const timeline = [
    {
      year: "2009",
      title: "Fundação do Curso",
      description: "O curso de Bacharelado em Artes Visuais é criado na UFMA, com o objetivo de formar profissionais capacitados para atuar no campo das artes visuais.",
    },
    {
      year: "2010",
      title: "Primeira Turma",
      description: "Início das atividades com a primeira turma de estudantes, marcando o começo de uma nova era para as artes visuais no Maranhão.",
    },
    {
      year: "2014",
      title: "Primeiros Formandos",
      description: "A primeira turma de bacharéis em Artes Visuais se forma, levando para o mercado profissionais qualificados e preparados.",
    },
    {
      year: "2016",
      title: "Criação dos Laboratórios",
      description: "Inauguração dos primeiros laboratórios de pesquisa, fortalecendo a produção acadêmica e artística do curso.",
    },
    {
      year: "2018",
      title: "Reconhecimento Nacional",
      description: "O curso recebe reconhecimento do MEC com conceito 4 no ENADE, consolidando sua qualidade e excelência.",
    },
    {
      year: "2020",
      title: "Expansão Digital",
      description: "Adaptação às novas tecnologias com a implementação de laboratórios digitais e práticas em arte e tecnologia.",
    },
    {
      year: "2024",
      title: "15 Anos de História",
      description: "O curso celebra 15 anos de existência, com mais de 180 profissionais formados e contribuindo para o cenário artístico regional e nacional.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Histórico do Curso</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de dedicação, arte e transformação. Conheça a trajetória 
            do curso de Artes Visuais da UFMA desde sua fundação.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Missão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Formar profissionais éticos e capacitados em Artes Visuais, 
              comprometidos com a excelência, a inovação e a transformação social 
              através da arte, contribuindo para o desenvolvimento cultural e 
              artístico do Maranhão e do Brasil.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Visão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência regional e nacional na formação de artistas visuais, 
              reconhecido pela qualidade do ensino, pela produção artística e 
              pela contribuição para a preservação e inovação da cultura visual.
            </p>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossa Trajetória</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <Card className={`p-6 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <div className="text-4xl font-bold text-primary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Criatividade</h3>
              <p className="text-muted-foreground">
                Incentivamos a experimentação e a inovação artística em todas as suas formas.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Colaboração</h3>
              <p className="text-muted-foreground">
                Promovemos o trabalho coletivo e o diálogo entre diferentes áreas do conhecimento.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Diversidade</h3>
              <p className="text-muted-foreground">
                Valorizamos a pluralidade de expressões, culturas e perspectivas artísticas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
