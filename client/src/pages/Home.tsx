import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Users, BookOpen, Award, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Welcome Section */}
      <WelcomeSection />
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* Curriculum Section */}
      <CurriculumSection />
      
      {/* Research Groups Section */}
      <ResearchGroupsSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
      {/* Animated Background Text */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ transform: `translateX(${offset * 0.5}px)` }}
      >
        <div className="text-[12vw] font-bold text-primary/10 whitespace-nowrap">
          artes • artes • artes • artes • artes •
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Artes Visuais
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Bacharelado em Artes Visuais da Universidade Federal do Maranhão
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg">
              Conheça o Curso
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Ver Galeria
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/hero-students.jpg"
                alt="Estudantes de Artes Visuais"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative text */}
            <div className="absolute -bottom-8 -left-8 text-8xl font-bold text-primary/10 -rotate-12 select-none">
              arte
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Bem-vindos!
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O Bacharelado em Artes Visuais tem por objetivo formar profissionais éticos, 
                comprometidos com a excelência e capacitados para atuar na criação, produção 
                e reflexão crítica sobre as diversas linguagens visuais contemporâneas.
              </p>
              <p>
                A formação visa à solução de problemas relacionados a aspectos socioculturais, 
                estéticos, conceituais e técnicos, em contextos locais, regionais, nacionais 
                e internacionais.
              </p>
              <p>
                Com uma base sólida em conhecimentos teóricos, práticas artísticas, cultura 
                e criatividade, os egressos estarão aptos a desenvolver e gerenciar projetos 
                artísticos e culturais, oferecendo contribuições significativas para o campo 
                das artes visuais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const stats = [
    { label: "Anos de existência", value: "15", icon: Award },
    { label: "Bacharéis formados", value: "180", icon: Users },
    { label: "Conceito Enade", value: "4", icon: BookOpen },
    { label: "TCCs e artigos defendidos", value: "+200", icon: FileText },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = parseInt(value.replace(/\D/g, "")) || 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value.startsWith("+") ? "+" : ""}{count}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function CurriculumSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Estrutura Curricular
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Essas são as nossas disciplinas, semestre a semestre
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
            <Card key={semester} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {semester}º Semestre
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• História da Arte {semester}</li>
                <li>• Desenho {semester}</li>
                <li>• Pintura {semester}</li>
                <li>• Escultura {semester}</li>
                <li>• Teoria da Arte</li>
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchGroupsSection() {
  const groups = [
    {
      name: "LAVA - Laboratório de Artes Visuais Aplicadas",
      coordinator: "Profa. Dra. Maria Silva",
      description: "O LAVA é um grupo de pesquisa que se interessa pela materialidade e pela visualidade em seus aspectos semióticos, estéticos, educativos, históricos e sociológicos. Busca pesquisar a experiência das narrativas culturais, com ênfase nos artefatos e linguagens produzidos por meios artísticos.",
    },
    {
      name: "CRIAR - Centro de Pesquisa em Arte Contemporânea",
      coordinator: "Prof. Dr. João Santos",
      description: "Grupo de pesquisa dedicado ao estudo e produção de arte contemporânea, investigando novas linguagens, suportes e processos criativos. Atua com recursos digitais, performance e instalações artísticas.",
    },
    {
      name: "Arte e Memória",
      coordinator: "Profa. Dra. Ana Costa",
      description: "O grupo desenvolve pesquisas voltadas à preservação da memória visual e cultural maranhense, promovendo experimentações que valorizam saberes locais e tradições artísticas regionais.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Núcleos e Grupos de Pesquisa
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Somos um curso que conecta teoria, prática e pesquisa, formando artistas 
          preparados para atuar em diferentes frentes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {groups.map((group, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {group.name}
              </h3>
              <p className="text-sm text-primary mb-4">
                Coordenador(a): {group.coordinator}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {group.description}
              </p>
              <Button variant="outline" size="sm">
                Saiba mais
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const works = [
    {
      title: "Série Urbana",
      author: "Ana Paula Silva",
      description: "Pinturas desenvolvidas para a disciplina de Pintura 3, explorando a paisagem urbana de São Luís.",
      image: "/gallery-painting.jpg",
    },
    {
      title: "Instalação Memória",
      author: "Carlos Eduardo",
      description: "Instalação artística criada para o TCC, abordando temas de memória e identidade cultural.",
      image: "/gallery-installation.jpg",
    },
    {
      title: "Gravuras Maranhenses",
      author: "Juliana Costa",
      description: "Série de gravuras desenvolvidas durante a disciplina de Gravura 2, retratando elementos da cultura local.",
      image: "/gallery-printmaking.jpg",
    },
    {
      title: "Performance Corpo",
      author: "Rafael Mendes",
      description: "Registro de performance artística apresentada no evento de arte contemporânea do curso.",
      image: "/welcome-section.jpg",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background text */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center">
        <div className="text-[8vw] font-bold text-accent/5 whitespace-nowrap animate-pulse">
          criatividade • criatividade • criatividade •
        </div>
      </div>

      <div className="container relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Galeria de Trabalhos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Veja alguns dos trabalhos desenvolvidos por nossos alunos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm text-primary mb-3">Por {work.author}</p>
                <p className="text-muted-foreground">{work.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver galeria completa
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Entre em contato!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Vamos conversar? Estamos aqui para ajudar você a conhecer melhor o curso 
          e tirar todas as dúvidas.
        </p>
        <Button size="lg" variant="secondary" className="text-lg">
          Fale conosco
        </Button>
      </div>
    </section>
  );
}
