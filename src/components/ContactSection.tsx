
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Link, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-secondary/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tem perguntas ou sugestões sobre desenvolvimento sustentável? 
              Entre em contato conosco ou nos siga nas redes sociais para ficar atualizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slideUp">
              <Card className="bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome completo" 
                        className="bg-background/50 mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="bg-background/50 mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Sua mensagem ou dúvida..." 
                        className="bg-background/50 mt-1" 
                        rows={5}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col justify-center animate-slideUp">
              <div className="bg-card/60 backdrop-blur-sm rounded-lg p-8 space-y-6">
                <h3 className="text-xl font-bold mb-4">Redes Sociais e Contato</h3>
                
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition group"
                  >
                    <div className="bg-green-800/20 p-2 rounded-md group-hover:bg-green-800/30 transition">
                      <Instagram className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-muted-foreground">@ecovida</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition group"
                  >
                    <div className="bg-green-800/20 p-2 rounded-md group-hover:bg-green-800/30 transition">
                      <Facebook className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-muted-foreground">EcoVida Oficial</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition group"
                  >
                    <div className="bg-green-800/20 p-2 rounded-md group-hover:bg-green-800/30 transition">
                      <Link className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Site Oficial</p>
                      <p className="text-sm text-muted-foreground">www.ecovida.org</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition group">
                    <div className="bg-green-800/20 p-2 rounded-md group-hover:bg-green-800/30 transition">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground">XXXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
