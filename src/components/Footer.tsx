
import React from 'react';
import { Facebook, Instagram, Link } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-green-400">EcoVida</h3>
            <p className="text-muted-foreground">
              Promovendo a conscientização sobre desenvolvimento sustentável e a importância
              da conservação dos ecossistemas terrestres para um futuro equilibrado.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-muted-foreground hover:text-green-400 transition"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#desenvolvimento-sustentavel" 
                  className="text-muted-foreground hover:text-green-400 transition"
                >
                  Desenvolvimento Sustentável
                </a>
              </li>
              <li>
                <a 
                  href="#biodiversidade" 
                  className="text-muted-foreground hover:text-green-400 transition"
                >
                  Biodiversidade
                </a>
              </li>
              <li>
                <a 
                  href="#praticas" 
                  className="text-muted-foreground hover:text-green-400 transition"
                >
                  Práticas Sustentáveis
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-muted-foreground hover:text-green-400 transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-secondary rounded-full hover:bg-green-800/30 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-green-400" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-secondary rounded-full hover:bg-green-800/30 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-green-400" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-secondary rounded-full hover:bg-green-800/30 transition"
                aria-label="Website"
              >
                <Link size={20} className="text-green-400" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-border/50" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} EcoVida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
