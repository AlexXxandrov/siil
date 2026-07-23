import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Años de Experiencia', color: 'text-cyan-400' },
    { icon: Users, value: '500+', label: 'Clientes Satisfechos', color: 'text-purple-400' },
    { icon: Clock, value: '24/7', label: 'Soporte Disponible', color: 'text-green-400' },
    { icon: ThumbsUp, value: '98%', label: 'Satisfacción', color: 'text-yellow-400' }
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Sobre <span className="text-gradient">LEÂO</span>
            </h2>
            <p className="text-xl text-gray-100 mb-6 leading-relaxed">Ing. Alexandro León C.</p>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Somos una empresa especializada en soluciones informáticas integrales con más de 10 años de experiencia en el mercado.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Nuestro equipo de profesionales certificados está comprometido con brindar servicios de la más alta calidad, utilizando tecnología de punta y las mejores prácticas de la industria.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Misión</h4>
                  <p className="text-gray-400">Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento de nuestros clientes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Visión</h4>
                  <p className="text-gray-400">Ser la empresa líder en servicios informáticos, reconocida por nuestra excelencia y compromiso.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 glow-effect">
              <img alt="Equipo de técnicos profesionales de LEAO" className="rounded-2xl w-full h-auto mb-8" src="https://images.unsplash.com/photo-1467105965775-f749f2ca0411" />
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-4 text-center hover:glow-effect transition-all"
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;