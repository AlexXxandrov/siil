import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Directora, Academia Starlet',
    initials: 'MG',
    rating: 5,
    text: 'El chatbot con IA que nos desarrollaron atiende a nuestros prospectos las 24 horas. Desde que lo implementamos, capturamos el triple de leads y ninguno se nos escapa. El servicio fue impecable.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Gerente, TechDistribuidora',
    initials: 'RS',
    rating: 5,
    text: 'Recuperaron información crítica de un servidor que dábamos por perdido. Profesionales, rápidos y absolutamente confidenciales. Nos salvaron de una situación muy complicada.',
    color: 'from-blue-600 to-blue-500',
  },
  {
    name: 'Laura Martínez',
    role: 'Propietaria, Boutique Luxe',
    initials: 'LM',
    rating: 5,
    text: 'Me diseñaron un sitio web hermoso y funcional que refleja perfectamente mi marca. Además, la instalación de las cámaras de seguridad en mi local fue rápida y muy profesional.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director, Consultorio Médico',
    initials: 'CR',
    rating: 5,
    text: 'Excelente servicio de mantenimiento para todos nuestros equipos. Siempre responden rápido y resuelven cualquier problema. Son nuestro soporte técnico de confianza desde hace años.',
    color: 'from-blue-600 to-blue-500',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-6">
            <Star className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">Lo que dicen nuestros clientes</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Clientes que</span>{' '}
            <span className="text-gradient">Confían en Nosotros</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Más de 500 clientes satisfechos respaldan nuestro trabajo. Estas son algunas de sus experiencias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-500/20 group-hover:text-orange-500/40 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`bg-gradient-to-br ${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
