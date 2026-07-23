import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud, Shield, Zap, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express', color: '#FFFFFF' },
  { name: 'Railway', color: '#0B0D0E' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Claude AI', color: '#D4A574' },
];

const features = [
  {
    icon: Smartphone,
    title: 'Apps Responsivas',
    description: 'Aplicaciones que funcionan perfectamente en cualquier dispositivo — escritorio, tablet o celular.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Database,
    title: 'Bases de Datos Robustas',
    description: 'Arquitectura de datos escalable para manejar desde cientos hasta miles de registros sin perder velocidad.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Cloud,
    title: 'Deploy en la Nube',
    description: 'Tu aplicación disponible 24/7 con infraestructura moderna en la nube. Sin servidores físicos.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Seguridad Integrada',
    description: 'Autenticación, encriptación y control de acceso por roles para proteger tu información.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Zap,
    title: 'Integraciones API',
    description: 'Conectamos tu app con WhatsApp, Google Sheets, pasarelas de pago, CRMs y más.',
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Layers,
    title: 'Paneles de Administración',
    description: 'Dashboards con gráficas, reportes y control total de tu negocio desde un solo lugar.',
    gradient: 'from-pink-500 to-rose-600',
  },
];

const WebApps = () => {
  return (
    <section id="apps-web" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Desarrollo a la Medida</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Desarrollo de</span>{' '}
            <span className="text-gradient">Aplicaciones Web</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos tus ideas en aplicaciones web potentes, rápidas y escalables. 
            Desde sistemas internos hasta plataformas completas para tus clientes.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-effect rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 max-w-5xl mx-auto border border-white/10 mb-12"
        >
          <p className="text-center text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
            Tecnologías que Utilizamos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tech.color }}></div>
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive code terminal mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-sm text-gray-400 font-mono">tu-app.leao.com.mx</span>
            </div>
            <div className="bg-slate-900/80 p-6 font-mono text-sm leading-relaxed">
              <p><span className="text-purple-400">const</span> <span className="text-cyan-300">tuApp</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span></p>
              <p className="ml-4"><span className="text-green-400">nombre</span><span className="text-white">:</span> <span className="text-orange-300">"Tu Próximo Proyecto"</span><span className="text-white">,</span></p>
              <p className="ml-4"><span className="text-green-400">frontend</span><span className="text-white">:</span> <span className="text-orange-300">"React + Tailwind"</span><span className="text-white">,</span></p>
              <p className="ml-4"><span className="text-green-400">backend</span><span className="text-white">:</span> <span className="text-orange-300">"Node.js + Express"</span><span className="text-white">,</span></p>
              <p className="ml-4"><span className="text-green-400">ia</span><span className="text-white">:</span> <span className="text-orange-300">"Claude AI integrado"</span><span className="text-white">,</span></p>
              <p className="ml-4"><span className="text-green-400">deploy</span><span className="text-white">:</span> <span className="text-orange-300">"Railway — siempre en línea"</span><span className="text-white">,</span></p>
              <p className="ml-4"><span className="text-green-400">estado</span><span className="text-white">:</span> <span className="text-emerald-400">"🚀 Listo para producción"</span></p>
              <p><span className="text-yellow-300">{'}'}</span><span className="text-white">;</span></p>
              <p className="mt-2"><span className="text-gray-500">// Cuéntanos tu idea — nosotros la construimos.</span></p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-500/25 text-lg px-10 py-6 rounded-full"
          >
            ¿Tienes una idea? ¡Platiquemos!
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebApps;
