import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'facebook.com/InformaticsLEAO', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-black/50 pt-20 pb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg glow-effect">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient">LEAO</span>
                <p className="text-xs text-cyan-300">Soluciones Informáticas</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expertos en tecnología con más de 10 años brindando soluciones integrales en informática.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:glow-effect transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xl font-bold text-gradient mb-6 block">Enlaces Rápidos</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xl font-bold text-gradient mb-6 block">Servicios</span>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Mantenimiento</li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Reparación</li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Venta de Equipos</li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Videovigilancia</li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Desarrollo Web</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xl font-bold text-gradient mb-6 block">Contacto</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span>722 46 72 724</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span>contacto@leao.com.mx</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span>Toluca, México</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <a href="https://wa.me/5217224672724/?text=Me interesa saber más de sus servicios." target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Soluciones Integrales en Informática LEAO. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;