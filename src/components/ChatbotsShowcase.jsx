import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Clock, Sparkles, TrendingUp, Zap, GraduationCap, Store, Utensils, Stethoscope, Building2, Dumbbell, MousePointerClick } from 'lucide-react';

const industries = [
  { icon: GraduationCap, label: 'Escuelas' },
  { icon: Store, label: 'Comercios' },
  { icon: Utensils, label: 'Restaurantes' },
  { icon: Stethoscope, label: 'Clínicas' },
  { icon: Building2, label: 'Inmobiliarias' },
  { icon: Dumbbell, label: 'Gimnasios' },
];

const ChatbotsShowcase = () => {
  return (
    <section id="chatbots-showcase" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-6">
            <Bot className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">Inteligencia Artificial Aplicada</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Chatbots con</span>{' '}
            <span className="text-gradient">IA</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Da a conocer tu negocio o tus productos <span className="text-orange-400 font-bold">24/7</span>.
            Nuestros asistentes virtuales atienden, capturan leads y convierten visitantes en clientes — sin que tú hagas nada.
          </p>
        </motion.div>

        {/* ¿Qué es un chatbot? — bloque educativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 glass-effect rounded-2xl p-8 border border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">¿Qué es un chatbot con IA?</h3>
              <p className="text-gray-300 leading-relaxed">
                Es un asistente virtual que <span className="text-white font-semibold">conversa con tus clientes como lo harías tú</span>, pero
                sin descanso. Responde preguntas, explica tus servicios, resuelve dudas y toma los datos de cada persona
                interesada — todo automático, todo al instante, a cualquier hora del día o de la noche. Es como tener a tu
                mejor vendedor trabajando 24/7, sin sueldo, sin vacaciones y sin dejar pasar ni un solo cliente.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Benefits + industries */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-black text-white mb-8">
              Tu mejor vendedor <span className="text-gradient">nunca descansa</span>
            </h3>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: MessageSquare,
                  title: 'Responde al Instante',
                  description: 'Contesta preguntas sobre tus servicios, precios y horarios en segundos, sin hacer esperar a nadie.',
                  color: 'from-orange-500 to-amber-500',
                },
                {
                  icon: TrendingUp,
                  title: 'Captura Cada Cliente',
                  description: 'Toma nombre, teléfono y correo de cada interesado automáticamente. Ningún prospecto se pierde.',
                  color: 'from-blue-600 to-blue-500',
                },
                {
                  icon: Clock,
                  title: 'Disponible 24/7',
                  description: 'Atiende de madrugada, en fin de semana o en días festivos. Cuando tú descansas, él sigue vendiendo.',
                  color: 'from-orange-500 to-amber-500',
                },
                {
                  icon: Zap,
                  title: 'Se Adapta a tu Negocio',
                  description: 'Lo personalizamos con tu marca, tus servicios y tu forma de hablar. Habla como tú hablarías.',
                  color: 'from-blue-600 to-blue-500',
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

            {/* Industrias donde aplica */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                Ideal para cualquier giro:
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all"
                  >
                    <industry.icon className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-gray-300">{industry.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Nova Chatbot Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-4 border-2 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-bold text-orange-300">Nova — Pruébame en Vivo</span>
                </div>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '520px' }}>
                <iframe
                  className="w-full h-full border-0"
                  src="https://nova-production-80d3.up.railway.app/"
                  title="Nova - Chatbot demo de LEAO"
                  allow="clipboard-write"
                ></iframe>
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <MousePointerClick className="w-4 h-4 text-orange-400" />
                <p className="text-center text-sm text-gray-300">
                  Escríbele — pregúntale qué es un chatbot y cómo funciona
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-effect rounded-2xl p-3 glow-effect"
            >
              <p className="text-sm font-semibold text-orange-300">✓ 100% Automático</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 glass-effect rounded-2xl p-3 glow-effect"
            >
              <p className="text-sm font-semibold text-blue-300">✓ Responde en Segundos</p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto border border-orange-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              ¿Quieres un chatbot así para <span className="text-gradient">tu negocio?</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Nova es solo un ejemplo. Creamos uno a la medida de tu empresa, con tu marca y tus servicios.
            </p>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-full text-lg glow-effect transition-all duration-300 hover:scale-105"
            >
              <Bot className="w-5 h-5" />
              Quiero mi Chatbot
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotsShowcase;
