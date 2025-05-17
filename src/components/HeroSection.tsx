
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/50 z-0"></div>
      
      {/* Green orb light effect */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Desenvolvimento Sustentável</span>
            <br /> e Vida Terrestre
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Explorando a importância da conservação dos ecossistemas terrestres e práticas 
            sustentáveis para um futuro equilibrado.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
              asChild
            >
              <a href="#desenvolvimento-sustentavel">Saiba Mais</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-500/50 text-green-400 hover:text-green-300"
              asChild
            >
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#desenvolvimento-sustentavel" className="text-muted-foreground hover:text-green-400 transition">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
