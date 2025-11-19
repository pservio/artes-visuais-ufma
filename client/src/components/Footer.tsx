import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Endereço */}
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Av. dos Portugueses, 1966<br />
                Bacanga, São Luís-MA<br />
                CEP: 65085-580<br />
                Cidade Universitária
              </p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-sm text-muted-foreground">
                (98) 3272-8205
              </p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex gap-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-sm text-muted-foreground">
                artesvisuais@ufma.br
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Departamento de Artes Visuais - UFMA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
