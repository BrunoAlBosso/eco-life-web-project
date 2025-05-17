
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-green-400">EcoVida</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-foreground hover:text-green-400 transition">Início</a>
            <a href="#desenvolvimento-sustentavel" className="text-foreground hover:text-green-400 transition">Desenvolvimento Sustentável</a>
            <a href="#biodiversidade" className="text-foreground hover:text-green-400 transition">Biodiversidade</a>
            <a href="#praticas" className="text-foreground hover:text-green-400 transition">Práticas Sustentáveis</a>
            <a href="#contato" className="text-foreground hover:text-green-400 transition">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card py-4 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="text-foreground hover:text-green-400 transition py-2" onClick={toggleMenu}>Início</a>
            <a href="#desenvolvimento-sustentavel" className="text-foreground hover:text-green-400 transition py-2" onClick={toggleMenu}>Desenvolvimento Sustentável</a>
            <a href="#biodiversidade" className="text-foreground hover:text-green-400 transition py-2" onClick={toggleMenu}>Biodiversidade</a>
            <a href="#praticas" className="text-foreground hover:text-green-400 transition py-2" onClick={toggleMenu}>Práticas Sustentáveis</a>
            <a href="#contato" className="text-foreground hover:text-green-400 transition py-2" onClick={toggleMenu}>Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
