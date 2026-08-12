import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Clock, Sparkles, TrendingUp, Zap, GraduationCap, Store, Utensils, Stethoscope, Building2, Dumbbell, MousePointerClick, MessageCircle, Check, CheckCheck, Bell, FileSpreadsheet, ArrowRight } from 'lucide-react';

const LEO_WHATSAPP = '527225596407';

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/25 to-transparent"></div>

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
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '650px' }}>
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

        {/* Apartado: Integración con WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold text-green-300">Integración con WhatsApp</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-white">Tu Chatbot También Contesta por</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">WhatsApp</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Donde están tus clientes. El chatbot responde automáticamente en el WhatsApp de tu negocio,
              atiende dudas y guarda cada prospecto — sin que tú tengas que estar pegado al teléfono.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Izquierda: cómo funciona */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: MessageCircle,
                    title: 'Responde en tu WhatsApp de Negocio',
                    description: 'Usamos la API oficial de WhatsApp Business (Meta). El cliente escribe a tu número y el bot contesta al instante.',
                  },
                  {
                    icon: Bell,
                    title: 'Te Avisa de Cada Prospecto',
                    description: 'Cuando alguien deja sus datos, recibes una notificación en tiempo real para que le des seguimiento.',
                  },
                  {
                    icon: FileSpreadsheet,
                    title: 'Guarda Todo Automáticamente',
                    description: 'Cada conversación y cada lead queda registrado en tu base de datos. Nada se pierde.',
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
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href={`https://wa.me/${LEO_WHATSAPP}?text=Hola,%20quiero%20probar%20el%20chatbot%20de%20LEAO`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                Prueba a Leo en WhatsApp
              </a>
              <p className="text-sm text-gray-400 mt-3">
                Escríbele "Hola" y mira cómo te responde en segundos 👇
              </p>
            </motion.div>

            {/* Derecha: simulación de chat de WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-800 bg-slate-800">
                {/* Header estilo WhatsApp */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-semibold text-sm">Leo · LEAO</p>
                    <p className="text-green-200 text-xs">en línea</p>
                  </div>
                  <MessageCircle className="w-5 h-5 text-green-200" />
                </div>

                {/* Fondo de chat */}
                <div className="bg-[#ECE5DD] px-3 py-4 space-y-2" style={{ minHeight: '420px' }}>
                  {/* Mensaje cliente */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[75%] shadow-sm">
                      <p className="text-sm text-gray-800">Hola, ¿hacen páginas web?</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">10:32</span>
                        <CheckCheck className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  {/* Respuesta Leo */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">¡Hola! 👋 Claro que sí. En LEAO creamos sitios web profesionales, responsivos y optimizados. ¿Para qué tipo de negocio lo necesitas?</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:32</span>
                    </div>
                  </div>

                  {/* Mensaje cliente */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[75%] shadow-sm">
                      <p className="text-sm text-gray-800">Para mi restaurante 🍽️</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">10:33</span>
                        <CheckCheck className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  {/* Respuesta Leo */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">¡Excelente! 🎉 Podemos incluir menú digital, reservas en línea y galería de platillos. ¿Me compartes tu nombre y teléfono para que un asesor te dé una cotización?</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:33</span>
                    </div>
                  </div>

                  {/* Indicador escribiendo */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 md:right-8 glass-effect rounded-2xl p-3 glow-effect-blue"
              >
                <p className="text-sm font-semibold text-green-300">✓ Respuesta automática</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Banner: Galería de Chatbots (subdominio) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <a
            href="https://chatbots.leao.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-3xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300"
          >
            {/* Fondo con gradiente vivo */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-blue-600/20 to-purple-600/20"></div>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl group-hover:bg-orange-500/40 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-all"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mb-4 shadow-lg shadow-orange-500/40 animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wide">Nuevo · Galería</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Explora Todos Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Chatbots</span>
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                  Descubre la galería completa con todas las capacidades de nuestros asistentes con IA:
                  atención a clientes, captura de leads, reservas, soporte y mucho más. Un chatbot para cada tipo de negocio.
                </p>
              </div>

              <div className="shrink-0">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:from-orange-600 group-hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-orange-500/40 transition-all duration-300 group-hover:scale-105">
                  <Bot className="w-6 h-6" />
                  Ver Galería
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-center text-xs text-gray-300 mt-2">chatbots.leao.com.mx</p>
              </div>
            </div>
          </a>
        </motion.div>

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
