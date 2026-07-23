import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CheckCircle2, Users, Clock, TrendingUp, FileText, Bell, MessageSquare, Globe, Smartphone, BarChart3, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const FeatureItem = ({ children }) => (
  <div className="flex items-start gap-3 mb-3">
    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
    <p className="text-gray-200 text-sm leading-relaxed">{children}</p>
  </div>
);

const ServicePill = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
    <div className="flex items-start gap-3">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const AIChatbots = () => {
  const handleSchoolDemo = () => {
    toast({
      title: "¡Solicitud de Demo Recibida! 🎓",
      description: "Desplázate a la sección de contacto para agendar una demostración personalizada del asistente virtual para escuelas.",
      duration: 5000,
    });
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const handleBusinessInfo = () => {
    toast({
      title: "Conoce Nuestras Soluciones 💼",
      description: "Desplázate a la sección de contacto para recibir información detallada sobre todos nuestros servicios digitales.",
      duration: 5000,
    });
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <section id="chatbots-ia" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6bTAtNWgyLTJ6bTAgMTBoMi0yem0wLTIwaDItMnptMCAxMGgyLTJ6bTAtMTVoMi0yem0wIDIwaDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Bot className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Tecnología de Inteligencia Artificial</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Chatbots Personalizados</span>
            <br />
            <span className="text-gradient">con IA</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Automatiza la atención a tus clientes 24/7 con asistentes virtuales inteligentes. 
            Captura leads, responde preguntas y convierte visitantes en clientes mientras duermes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* CARD 1 - ESCUELAS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-3xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1646315449332-f1246af4feba" 
                alt="Estudiantes usando tecnología educativa con IA"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-br from-purple-500 to-pink-600 px-4 py-2 rounded-full z-20">
                <span className="text-sm font-bold text-white flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Para Escuelas
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-purple-300 transition-colors">
                Asistente Virtual con IA para Escuelas
              </h3>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
                <p className="text-lg font-semibold text-purple-200 leading-relaxed">
                  Te presenta el Asistente Virtual con IA que atiende prospectos 24/7 — sin que tú hagas nada.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <FeatureItem>
                  Responde dudas sobre carreras, requisitos y costos al instante
                </FeatureItem>
                <FeatureItem>
                  Capta leads de: Estudiantes de preparatoria, Egresados buscando segunda carrera, Adultos retomando estudios, Padres investigando opciones, Alumnos de revalidación o transfer
                </FeatureItem>
                <FeatureItem>
                  Guarda cada prospecto en Google Sheets automáticamente
                </FeatureItem>
                <FeatureItem>
                  Avisa al área de admisiones en tiempo real por WhatsApp
                </FeatureItem>
                <FeatureItem>
                  Transfiere a un asesor humano cuando se necesita
                </FeatureItem>
              </div>

              <Button
                onClick={handleSchoolDemo}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <Bot className="w-5 h-5 mr-2" />
                Solicitar Demo para Escuelas
              </Button>
            </div>
          </motion.div>

          {/* CARD 2 - NEGOCIOS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-3xl overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1588237977332-6d680670f1db" 
                alt="Equipo de negocios trabajando con tecnología digital"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-br from-cyan-500 to-blue-600 px-4 py-2 rounded-full z-20">
                <span className="text-sm font-bold text-white flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Para Negocios
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-cyan-300 transition-colors">
                Soluciones Digitales Completas para tu Negocio
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Impulsa tu empresa con tecnología de punta. Desde presencia web profesional hasta automatización inteligente.
              </p>

              <div className="space-y-4 mb-8">
                <ServicePill
                  icon={Globe}
                  title="Sitio Web"
                  description="Diseño profesional con 6 secciones, galería, cursos por edad y formulario de contacto. Dominio propio incluido."
                />
                <ServicePill
                  icon={Bot}
                  title="Chatbot IA"
                  description="Asistente con IA avanzada, respuestas automáticas, captura de leads y transferencia a asesor humano."
                />
                <ServicePill
                  icon={Smartphone}
                  title="WhatsApp Business"
                  description="Integración con API oficial de Meta. Atiende prospectos 24/7."
                />
                <ServicePill
                  icon={BarChart3}
                  title="Captura de Leads"
                  description="Informes detallados de clientes interesados."
                />
                <ServicePill
                  icon={Wrench}
                  title="Mantenimiento"
                  description="Actualizaciones, soporte técnico, renovación de servicios y reporte semanal de leads."
                />
              </div>

              <Button
                onClick={handleBusinessInfo}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Conocer Más Servicios
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-cyan-400" />
                <div className="text-left">
                  <p className="font-bold text-white text-lg">24/7</p>
                  <p className="text-sm text-gray-400">Disponibilidad</p>
                </div>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <Bell className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <p className="font-bold text-white text-lg">Notificaciones</p>
                  <p className="text-sm text-gray-400">Tiempo Real</p>
                </div>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-emerald-400" />
                <div className="text-left">
                  <p className="font-bold text-white text-lg">100%</p>
                  <p className="text-sm text-gray-400">Captura de Datos</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIChatbots;