import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portafolio-web');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Anuncio Destacado */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="mb-8"
            >
              <button 
                onClick={scrollToPortfolio}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 border border-indigo-500/30 rounded-full px-4 py-2 pr-6 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  NUEVO
                </div>
                <span className="text-sm font-medium text-white group-hover:text-indigo-200 transition-colors">
                  Sitios Web Profesionales
                </span>
                <Globe className="w-4 h-4 text-indigo-400 ml-1 animate-pulse" />
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-cyan-300">Soluciones Tecnológicas Profesionales</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-gradient">Soluciones Integrales</span>
              <br />
              <span className="text-white">en Informática</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expertos en mantenimiento y reparación de computadoras. Creación profesional de Sitios Web. Instalación de sistemas de videovigilancia.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 glow-effect text-lg px-8"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8"
              >
                Ver Servicios
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-gradient">500+</p>
                <p className="text-sm text-gray-400">Clientes Satisfechos</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">10+</p>
                <p className="text-sm text-gray-400">Años de Experiencia</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">24/7</p>
                <p className="text-sm text-gray-400">Soporte Técnico</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-effect rounded-3xl p-8 glow-effect">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/a0VDDW4TDps"
                  title="Video de presentación de servicios informáticos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 glow-effect"
              >
                <p className="text-sm font-semibold text-cyan-300">✓ Garantía Incluida</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 glow-effect"
              >
                <p className="text-sm font-semibold text-purple-300">✓ Servicio Rápido</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;