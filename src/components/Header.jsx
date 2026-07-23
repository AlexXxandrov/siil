import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Monitor, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg glow-effect">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">LEÂO</h1>
              <p className="text-xs text-cyan-300">Soluciones Integrales en Informática</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item === 'Inicio' ? 'hero' : item.toLowerCase())}
                className="text-white/90 hover:text-cyan-400 transition-colors font-medium"
              >
                {item}
              </motion.button>
            ))}
            <a href="https://wa.me/521724672724" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold">
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 glow-effect"
            >
              Cotizar Ahora
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4 space-y-3"
          >
            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Inicio' ? 'hero' : item.toLowerCase())}
                className="block w-full text-left text-white/90 hover:text-cyan-400 transition-colors py-2 font-medium"
              >
                {item}
              </button>
            ))}
             <a href="https://wa.me/521724672724" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold py-2">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;