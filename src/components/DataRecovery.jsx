import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Server, Usb, DatabaseZap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataRecovery = () => {
  const recoveryTypes = [
    { icon: HardDrive, label: 'Discos Duros (HDD)' },
    { icon: Server, label: 'Unidades SSD' },
    { icon: Usb, label: 'Memorias USB y SD' },
    { icon: DatabaseZap, label: 'Sistemas RAID' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="data-recovery" className="py-24 bg-gradient-to-br from-blue-900/30 via-indigo-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-effect rounded-3xl p-4 glow-effect">
              <img alt="Técnico especializado en recuperación de datos trabajando en un disco duro" className="rounded-2xl w-full h-auto" src="https://images.unsplash.com/photo-1699550403361-27dee0f2a415" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -left-6 glass-effect rounded-full p-4 glow-effect flex items-center justify-center"
              >
                <ShieldCheck className="w-10 h-10 text-green-400" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Recuperación de <span className="text-gradient">Información</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ¿Perdiste tus archivos más valiosos? No te preocupes. Nuestro servicio profesional de recuperación de datos rescata información de dispositivos dañados, borrados o inaccesibles.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {recoveryTypes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 glass-effect p-4 rounded-lg"
                >
                  <item.icon className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold text-white">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-gray-400 mb-8">
              Contamos con tecnología de punta y un equipo de expertos para maximizar las posibilidades de recuperar tus fotos, documentos y archivos importantes.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 glow-effect text-lg px-8"
            >
              Solicitar Diagnóstico
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataRecovery;