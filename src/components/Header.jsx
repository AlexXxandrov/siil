import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
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

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Chatbots', id: 'chatbots-showcase', badge: 'Nuevo' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/img/logo.png"
              alt="LEAO - Soluciones Integrales en Informática"
              className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(245,130,46,0.35)]"
            />
          </motion.div>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-white/90 hover:text-orange-400 transition-colors font-medium"
              >
                {item.label}
                {item.badge && (
                  <span className="absolute -top-3 -right-7 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/40 animate-pulse">
                    {item.badge}
                  </span>
                )}
              </motion.button>
            ))}
            <a href="https://wa.me/527225596407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold">
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 glow-effect font-semibold"
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
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 w-full text-left text-white/90 hover:text-orange-400 transition-colors py-2 font-medium"
              >
                {item.label}
                {item.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            <a href="https://wa.me/527225596407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold py-2">
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
