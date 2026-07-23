import React from 'react';
    import { motion } from 'framer-motion';
    import { Palette, Megaphone, MousePointerClick, Facebook, Instagram, MessageCircle } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Marketing = () => {
      const designFeatures = [
        { icon: Palette, text: 'Creación de Logos Únicos' },
        { icon: MousePointerClick, text: 'Diseño de Marca (Branding)' },
        { icon: Palette, text: 'Edición Gráfica Profesional' },
      ];

      const adFeatures = [
        { icon: Facebook, text: 'Anuncios en Facebook' },
        { icon: Instagram, text: 'Campañas en Instagram' },
        { icon: MessageCircle, text: 'Publicidad en Messenger' },
      ];

      const scrollToContact = () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      };

      return (
        <section id="marketing" className="py-24 bg-gradient-to-b from-slate-900 via-gray-900/80 to-slate-900 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Impulsa tu <span className="text-gradient">Marca</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desde un logo memorable hasta campañas publicitarias que convierten. Hacemos que tu negocio brille.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-3 rounded-xl">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Diseño Gráfico y Branding</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Creamos la identidad visual que tu marca necesita para conectar con tu audiencia y transmitir profesionalismo.
                </p>
                <ul className="space-y-4">
                  {designFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-gray-800 rounded-full p-2">
                        <item.icon className="w-5 h-5 text-pink-400" />
                      </div>
                      <span className="text-lg text-gray-200">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-3 rounded-xl">
                    <Megaphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Publicidad en META</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Lleva tu mensaje a millones de usuarios. Creamos, gestionamos y optimizamos tus anuncios en las redes sociales más grandes.
                </p>
                <ul className="space-y-4">
                  {adFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-gray-800 rounded-full p-2">
                        <item.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <span className="text-lg text-gray-200">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-center mt-16"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 glow-effect text-lg px-10 py-6"
              >
                Potenciar mi Negocio Ahora
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Marketing;