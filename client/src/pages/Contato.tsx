import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: ["Av. dos Portugueses, 1966", "Bacanga, São Luís-MA", "CEP: 65085-580", "Cidade Universitária"],
    },
    {
      icon: Phone,
      title: "Telefone",
      content: ["(98) 3272-8205"],
    },
    {
      icon: Mail,
      title: "E-mail",
      content: ["artesvisuais@ufma.br", "coordenacao.artesvisuais@ufma.br"],
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: ["Segunda a Sexta", "8h às 12h e 14h às 18h"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem dúvidas sobre o curso? Quer saber mais sobre o processo seletivo? 
            Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Sobre o que você quer falar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{info.title}</h3>
                      {info.content.map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Redes Sociais</h3>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      @artesvisuais.ufma
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Como Chegar</h2>
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Av. dos Portugueses, 1966 - Bacanga<br />
                  São Luís-MA, CEP: 65085-580<br />
                  Cidade Universitária - UFMA
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Como faço para ingressar no curso?</h3>
              <p className="text-muted-foreground text-sm">
                O ingresso é feito através do ENEM/SISU. Fique atento aos editais 
                e prazos de inscrição divulgados pela UFMA.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">O curso é integral ou noturno?</h3>
              <p className="text-muted-foreground text-sm">
                O curso é oferecido no turno integral, com aulas nos períodos 
                matutino e vespertino.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Qual a duração do curso?</h3>
              <p className="text-muted-foreground text-sm">
                O Bacharelado em Artes Visuais tem duração de 4 anos (8 semestres).
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Posso visitar o departamento?</h3>
              <p className="text-muted-foreground text-sm">
                Sim! Entre em contato conosco para agendar uma visita e conhecer 
                nossa estrutura e laboratórios.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
