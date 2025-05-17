
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InfoCard from '@/components/InfoCard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Leaf, Sprout, TreePine, Recycle, Shield } from "lucide-react";
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* Desenvolvimento Sustentável Section */}
      <section id="desenvolvimento-sustentavel" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Desenvolvimento Sustentável</h2>
            <p className="text-lg text-muted-foreground">
              O desenvolvimento sustentável busca equilibrar o crescimento econômico, 
              a inclusão social e a proteção ambiental para garantir recursos para as gerações futuras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
            <InfoCard
              title="O que é Desenvolvimento Sustentável?"
              description="Conceito e Importância"
              content="O desenvolvimento sustentável é uma abordagem que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atenderem às suas próprias necessidades. Baseia-se em três pilares fundamentais: crescimento econômico, inclusão social e proteção ambiental."
              icon={<Leaf size={24} />}
            />
            
            <InfoCard
              title="Os 17 Objetivos"
              description="Objetivos de Desenvolvimento Sustentável"
              content="Os Objetivos de Desenvolvimento Sustentável (ODS) foram definidos pela ONU como parte da Agenda 2030. São 17 metas globais interconectadas que abordam os principais desafios sociais, econômicos e ambientais enfrentados mundialmente."
              icon={<Sprout size={24} />}
            />
            
            <InfoCard
              title="Economia Verde"
              description="Integração de práticas sustentáveis"
              content="A economia verde promove o crescimento econômico enquanto garante que os recursos naturais continuem fornecendo os recursos e serviços ambientais dos quais depende nosso bem-estar. Ela incentiva negócios e investimentos que integram critérios ambientais."
              icon={<Recycle size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* Biodiversidade Section */}
      <section id="biodiversidade" className="py-20 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-secondary/20 z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Biodiversidade e Ecossistemas</h2>
            <p className="text-lg text-muted-foreground">
              A vida terrestre em toda sua diversidade é essencial para o equilíbrio ecológico 
              e o bem-estar humano, fornecendo serviços ecossistêmicos vitais.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 animate-slideUp">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Importância da Biodiversidade</h3>
              <p className="mb-6">
                A biodiversidade é crucial para a resiliência dos ecossistemas, atuando como um escudo contra mudanças ambientais e desastres naturais. Cada espécie, por mais insignificante que pareça, desempenha um papel único no funcionamento dos ecossistemas naturais.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card/50 p-5 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Shield size={18} className="text-green-400" />
                    Serviços Ecossistêmicos
                  </h4>
                  <p className="text-muted-foreground">
                    Os ecossistemas fornecem serviços vitais como purificação do ar e da água, regulação climática, formação do solo, polinização e controle biológico de pragas.
                  </p>
                </div>
                
                <div className="bg-card/50 p-5 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <TreePine size={18} className="text-green-400" />
                    Florestas e Vegetação
                  </h4>
                  <p className="text-muted-foreground">
                    Florestas e outros ecossistemas naturais absorvem CO2, reduzindo os efeitos das mudanças climáticas, além de prevenir a erosão do solo e regular ciclos hidrológicos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 animate-slideUp">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Ameaças aos Ecossistemas</h3>
              <p className="mb-6">
                Os ecossistemas terrestres enfrentam inúmeras ameaças que põem em risco sua integridade e funcionamento, com consequências graves para a biodiversidade e para os serviços que prestam à humanidade.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold">Desmatamento e Degradação</h4>
                  <p className="text-muted-foreground">A conversão de florestas para agricultura, pecuária e expansão urbana causa perda irreparável de habitat e espécies.</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold">Mudanças Climáticas</h4>
                  <p className="text-muted-foreground">O aquecimento global altera os padrões climáticos, afetando a distribuição de espécies e aumentando eventos extremos.</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold">Poluição</h4>
                  <p className="text-muted-foreground">Poluentes do ar, solo e água comprometem a saúde dos ecossistemas e das espécies que neles habitam.</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold">Espécies Invasoras</h4>
                  <p className="text-muted-foreground">Organismos introduzidos em ambientes não nativos podem causar desequilíbrios ecológicos graves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Práticas Sustentáveis Section */}
      <section id="praticas" className="py-20 relative">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Práticas Sustentáveis</h2>
            <p className="text-lg text-muted-foreground">
              Ações concretas que podemos adotar para contribuir com a preservação 
              do meio ambiente e o desenvolvimento sustentável.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6 items-center animate-slideUp">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Conservação de Recursos Naturais</h3>
                  <p className="mb-4 text-muted-foreground">
                    Adotar práticas que minimizam o desperdício de recursos naturais como água e energia 
                    é fundamental para o desenvolvimento sustentável.
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Reduzir o consumo de água com dispositivos eficientes e reuso quando possível.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Utilizar fontes de energia renovável e equipamentos energeticamente eficientes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Optar por materiais sustentáveis e duráveis, evitando descartáveis.</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-card/50 backdrop-blur-sm rounded-lg p-6 order-1 md:order-2">
                  <div className="aspect-video bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-md flex items-center justify-center">
                    <Recycle size={64} className="text-green-400/80" />
                  </div>
                </div>
              </div>
              
              <Separator className="bg-border/50" />
              
              <div className="flex flex-col md:flex-row gap-6 items-center animate-slideUp">
                <div className="md:w-1/2 bg-card/50 backdrop-blur-sm rounded-lg p-6">
                  <div className="aspect-video bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-md flex items-center justify-center">
                    <TreePine size={64} className="text-green-400/80" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">Reflorestamento e Proteção de Habitats</h3>
                  <p className="mb-4 text-muted-foreground">
                    Restaurar áreas degradadas e proteger os habitats naturais são medidas essenciais 
                    para preservar a biodiversidade e garantir a saúde dos ecossistemas.
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Plantar árvores nativas adaptadas ao clima e solo locais.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Apoiar iniciativas de conservação de áreas naturais e unidades de conservação.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Criar corredores ecológicos para permitir o deslocamento de fauna entre fragmentos de habitat.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Separator className="bg-border/50" />
              
              <div className="flex flex-col md:flex-row gap-6 items-center animate-slideUp">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Consumo Consciente</h3>
                  <p className="mb-4 text-muted-foreground">
                    Repensar nossos padrões de consumo é uma forma eficaz de reduzir o impacto 
                    ambiental individual e coletivo.
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Reduzir, Reutilizar e Reciclar materiais sempre que possível.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Optar por produtos com certificações ambientais e que utilizem embalagens sustentáveis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sprout size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Adotar uma alimentação mais baseada em vegetais, reduzindo o consumo de carne.</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-card/50 backdrop-blur-sm rounded-lg p-6 order-1 md:order-2">
                  <div className="aspect-video bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-md flex items-center justify-center">
                    <Leaf size={64} className="text-green-400/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
