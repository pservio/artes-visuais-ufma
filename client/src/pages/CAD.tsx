import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Megaphone, Heart, Instagram, Mail } from "lucide-react";

export default function CAD() {
  const board = [
    { name: "Lucas Martins", position: "Presidente", photo: "https://placehold.co/200x200/C77A5A/FFFFFF?text=LM" },
    { name: "Beatriz Sousa", position: "Vice-Presidente", photo: "https://placehold.co/200x200/5A8AA8/FFFFFF?text=BS" },
    { name: "Gabriel Costa", position: "Tesoureiro", photo: "https://placehold.co/200x200/B8A05A/FFFFFF?text=GC" },
    { name: "Amanda Silva", position: "Secretária", photo: "https://placehold.co/200x200/8A5AA8/FFFFFF?text=AS" },
  ];

  const activities = [
    {
      icon: Calendar,
      title: "Eventos Culturais",
      description: "Organizamos exposições, mostras de arte, palestras e workshops para enriquecer a formação dos estudantes.",
    },
    {
      icon: Megaphone,
      title: "Representação Estudantil",
      description: "Representamos os estudantes nas decisões do departamento e da universidade, lutando por melhorias no curso.",
    },
    {
      icon: Users,
      title: "Integração",
      description: "Promovemos eventos de integração entre calouros e veteranos, fortalecendo a comunidade acadêmica.",
    },
    {
      icon: Heart,
      title: "Apoio aos Estudantes",
      description: "Oferecemos suporte e orientação aos estudantes em questões acadêmicas e relacionadas ao curso.",
    },
  ];

  const events = [
    {
      title: "Mostra de Arte Anual",
      date: "Novembro 2024",
      description: "Exposição dos trabalhos produzidos pelos estudantes ao longo do ano letivo.",
      image: "https://placehold.co/600x400/C77A5A/FFFFFF?text=Mostra+de+Arte",
    },
    {
      title: "Semana de Artes Visuais",
      date: "Setembro 2024",
      description: "Semana de palestras, workshops e atividades práticas com artistas convidados.",
      image: "https://placehold.co/600x400/5A8AA8/FFFFFF?text=Semana+de+Artes",
    },
    {
      title: "Recepção aos Calouros",
      date: "Março 2024",
      description: "Evento de boas-vindas aos novos estudantes do curso de Artes Visuais.",
      image: "https://placehold.co/600x400/B8A05A/FFFFFF?text=Recepção",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Centro Acadêmico de Artes Visuais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O CAD é a voz dos estudantes de Artes Visuais, promovendo eventos, 
            defendendo direitos e fortalecendo a comunidade acadêmica.
          </p>
        </div>

        {/* About Section */}
        <div className="mb-20">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-3xl font-bold mb-6 text-center">Quem Somos</h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
              O Centro Acadêmico de Artes Visuais (CAD) é uma entidade estudantil 
              que representa todos os alunos do curso. Nossa missão é promover a 
              integração, defender os interesses dos estudantes e contribuir para 
              a melhoria contínua da qualidade do ensino e da vida acadêmica.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg">
                <Instagram className="mr-2 h-5 w-5" />
                @cad.artesvisuais
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                cad.artesvisuais@ufma.br
              </Button>
            </div>
          </Card>
        </div>

        {/* Board Members */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Diretoria 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, index) => (
              <Card key={index} className="overflow-hidden text-center hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossas Atividades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Eventos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-secondary/10 to-primary/10">
            <h2 className="text-3xl font-bold mb-4">Faça Parte!</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              O CAD é feito por estudantes, para estudantes. Venha participar 
              das nossas reuniões, eventos e atividades. Juntos somos mais fortes!
            </p>
            <Button size="lg">
              Entre em Contato
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
