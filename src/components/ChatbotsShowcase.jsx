import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Users, Clock, Sparkles, TrendingUp } from 'lucide-react';

const ChatbotsShowcase = () => {
  return (
    <section id="chatbots-showcase" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Bot className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Inteligencia Artificial Aplicada</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Chatbots con</span>{' '}
            <span className="text-gradient">IA</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Da a conocer tu negocio o tus productos <span className="text-cyan-400 font-bold">24/7</span>. 
            Nuestros asistentes virtuales atienden, capturan leads y convierten visitantes en clientes — sin que tú hagas nada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-black text-white mb-8">
              Tu mejor vendedor <span className="text-gradient">nunca descansa</span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: 'Respuestas Inteligentes',
                  description: 'Responde preguntas sobre tus servicios, precios y disponibilidad con precisión y naturalidad.',
                  color: 'from-cyan-500 to-blue-600',
                },
                {
                  icon: Users,
                  title: 'Captura de Leads Automática',
                  description: 'Cada prospecto interesado queda registrado automáticamente en tu base de datos.',
                  color: 'from-purple-500 to-pink-600',
                },
                {
                  icon: Clock,
                  title: 'Disponible 24/7',
                  description: 'Atiende a tus clientes a cualquier hora, cualquier día — incluso cuando duermes.',
                  color: 'from-emerald-500 to-teal-600',
                },
                {
                  icon: TrendingUp,
                  title: 'Más Conversiones',
                  description: 'Convierte visitantes curiosos en clientes reales con conversaciones personalizadas.',
                  color: 'from-orange-500 to-red-600',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`bg-gradient-to-br ${item.color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-4 glass-effect rounded-xl border border-purple-500/30"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <p className="text-sm text-purple-200">
                  <span className="font-bold">¿Lo quieres para tu negocio?</span> Cada chatbot se personaliza con tu marca, tus servicios y tu estilo.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Stella Chatbot Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-4 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-purple-300">Stella — Asistente IA de Academia Starlet</span>
                </div>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '520px' }}>
                <iframe
                  className="w-full h-full border-0"
                  src="https://chatbotstarlet-production.up.railway.app"
                  title="Stella - Asistente virtual Academia Starlet"
                  allow="clipboard-write"
                ></iframe>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3">
                Demo en vivo — Prueba preguntándole sobre cursos y talleres
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-effect rounded-2xl p-3 glow-effect"
            >
              <p className="text-sm font-semibold text-purple-300">✓ IA Personalizada</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 glass-effect rounded-2xl p-3 glow-effect"
            >
              <p className="text-sm font-semibold text-cyan-300">✓ Captura Leads</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotsShowcase;
