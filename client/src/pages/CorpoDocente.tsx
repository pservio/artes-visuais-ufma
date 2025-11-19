import { Card } from "@/components/ui/card";
import { Mail, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CorpoDocente() {
  const professors = [
    {
      name: "Profa. Dra. Maria Silva Santos",
      title: "Professora Associada",
      areas: ["História da Arte", "Arte Contemporânea", "Crítica de Arte"],
      email: "maria.silva@ufma.br",
      lattes: "#",
      photo: "https://placehold.co/300x300/C77A5A/FFFFFF?text=MSS",
    },
    {
      name: "Prof. Dr. João Pedro Costa",
      title: "Professor Adjunto",
      areas: ["Pintura", "Desenho", "Técnicas Artísticas"],
      email: "joao.costa@ufma.br",
      lattes: "#",
      photo: "https://placehold.co/300x300/5A8AA8/FFFFFF?text=JPC",
    },
    {
      name: "Profa. Dra. Ana Carolina Mendes",
      title: "Professora Adjunta",
      areas: ["Escultura", "Instalação", "Arte Pública"],
      email: "ana.mendes@ufma.br",
      lattes: "#",
      photo: "https://placehold.co/300x300/B8A05A/FFFFFF?text=ACM",
    },
    {
      name: "Prof. Dr. Carlos Eduardo Lima",
      title: "Professor Associado",
      areas: ["Gravura", "Processos de Impressão", "Arte Gráfica"],
      email: "carlos.lima@ufma.br",
      lattes: "#",
      photo: "https://placehold.co/300x300/8A5AA8/FFFFFF?text=CEL",
    },
    {
      name: "Profa. Dra. Juliana Oliveira",
      title: "Professora Adjunta",
      areas: ["Fotografia", "Imagem Digital", "Arte e Tecnologia"],
      email: "juliana.oliveira@ufma.br",
      lattes: "#",
      photo: "https://placehold.co/300x300/5AA88A/FFFFFF?text=JO",
    },
    {
      name: "Prof. Me. Rafael Souza",
      title: "Professor Assistente",
      areas: ["Performance", "Arte Conceitual", "Corpo e Arte"],
      email: "rafael.souza@ufma.br",
      lattes: "#",
      photo: "https://placehold.co/300x300/A85A8A/FFFFFF?text=RS",
    },
  ];

  const technicalStaff = [
    {
      name: "Mariana Ferreira",
      role: "Técnica de Laboratório",
      sector: "Laboratório de Pintura",
      email: "mariana.ferreira@ufma.br",
    },
    {
      name: "Pedro Henrique Alves",
      role: "Técnico de Laboratório",
      sector: "Laboratório de Gravura",
      email: "pedro.alves@ufma.br",
    },
    {
      name: "Luciana Santos",
      role: "Secretária",
      sector: "Coordenação do Curso",
      email: "luciana.santos@ufma.br",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Corpo Docente e Técnico</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os professores e profissionais que dedicam seu conhecimento 
            e experiência para formar os artistas visuais do futuro.
          </p>
        </div>

        {/* Professors Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Professores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professors.map((professor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={professor.photo}
                    alt={professor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{professor.name}</h3>
                  <p className="text-sm text-primary mb-4">{professor.title}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <div className="text-sm text-muted-foreground">
                        {professor.areas.join(" • ")}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`mailto:${professor.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {professor.email}
                    </a>
                    <a
                      href={professor.lattes}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Currículo Lattes
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Staff Section */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Equipe Técnica</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalStaff.map((staff, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{staff.name}</h3>
                <p className="text-primary font-semibold mb-1">{staff.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{staff.sector}</p>
                <a
                  href={`mailto:${staff.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {staff.email}
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-3xl font-bold mb-4">Interessado em fazer parte?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              O Departamento de Artes Visuais está sempre aberto a colaborações 
              e parcerias acadêmicas. Entre em contato conosco.
            </p>
            <Button size="lg">
              Fale Conosco
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
