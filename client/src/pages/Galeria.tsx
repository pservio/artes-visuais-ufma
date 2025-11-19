import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Galeria() {
  const [filter, setFilter] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "pintura", label: "Pintura" },
    { id: "escultura", label: "Escultura" },
    { id: "gravura", label: "Gravura" },
    { id: "fotografia", label: "Fotografia" },
    { id: "instalacao", label: "Instalação" },
    { id: "performance", label: "Performance" },
  ];

  const works = [
    {
      title: "Série Urbana",
      author: "Ana Paula Silva",
      year: "2023",
      category: "pintura",
      description: "Pinturas desenvolvidas para a disciplina de Pintura 3, explorando a paisagem urbana de São Luís.",
      image: "/gallery-painting.jpg",
    },
    {
      title: "Instalação Memória",
      author: "Carlos Eduardo",
      year: "2024",
      category: "instalacao",
      description: "Instalação artística criada para o TCC, abordando temas de memória e identidade cultural.",
      image: "/gallery-installation.jpg",
    },
    {
      title: "Gravuras Maranhenses",
      author: "Juliana Costa",
      year: "2023",
      category: "gravura",
      description: "Série de gravuras desenvolvidas durante a disciplina de Gravura 2, retratando elementos da cultura local.",
      image: "/gallery-printmaking.jpg",
    },
    {
      title: "Performance Corpo",
      author: "Rafael Mendes",
      year: "2024",
      category: "performance",
      description: "Registro de performance artística apresentada no evento de arte contemporânea do curso.",
      image: "/welcome-section.jpg",
    },
    {
      title: "Retratos Contemporâneos",
      author: "Mariana Oliveira",
      year: "2023",
      category: "fotografia",
      description: "Série fotográfica explorando identidades contemporâneas na cidade de São Luís.",
      image: "/hero-students.jpg",
    },
    {
      title: "Formas Abstratas",
      author: "Pedro Henrique",
      year: "2024",
      category: "escultura",
      description: "Esculturas em cerâmica desenvolvidas na disciplina de Escultura 3.",
      image: "/gallery-installation.jpg",
    },
  ];

  const filteredWorks = filter === "todos" 
    ? works 
    : works.filter(work => work.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Galeria de Trabalhos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a produção artística dos nossos estudantes e egressos. 
            Cada obra representa o talento, dedicação e criatividade que caracterizam 
            o curso de Artes Visuais da UFMA.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                  {categories.find(c => c.id === work.category)?.label}
                </div>
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {work.author} • {work.year}
                </p>
                <p className="text-muted-foreground text-sm">{work.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Nenhum trabalho encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
