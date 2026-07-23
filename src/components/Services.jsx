import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShoppingCart, Camera, Globe, Cpu, Shield, DatabaseZap, Palette, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ServiceCard = ({ icon: Icon, title, description, color, features, image, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300 group flex flex-col h-full bg-slate-900/50 border border-slate-700/50"
    >
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          {image}
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className={`absolute top-4 right-4 bg-gradient-to-br ${color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg z-10`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
          {description}
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-cyan-300">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              {feature}
            </li>
          ))}
        </ul>

        <Button
          onClick={onClick}
          className={`w-full bg-gradient-to-r ${color} hover:opacity-90 mt-auto border-0 text-white font-medium shadow-lg`}
        >
          Más Información
        </Button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const handleServiceClick = (serviceName) => {
    toast({
      title: "¡Excelente elección! 🎯",
      description: `Estás interesado en ${serviceName}. Desplázate a la sección de contacto para solicitar más información o manda un Whatsapp.`,
      duration: 4000,
    });
  };

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones tecnológicas completas para particulares y empresas. Calidad garantizada en cada servicio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Wrench}
              title="Mantenimiento y Reparación"
              description="Diagnóstico, reparación y mantenimiento preventivo de equipos de cómputo. Soluciones rápidas y efectivas."
              color="from-cyan-500 to-blue-600"
              features={['Diagnóstico gratuito', 'Reparación en sitio', 'Garantía de servicio']}
              image={<img alt="Técnico reparando computadora hardware" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1654593114209-d915f46be333" />}
              onClick={() => handleServiceClick('Mantenimiento y Reparación')}
              delay={0.1}
            />
            
            <ServiceCard 
              icon={ShoppingCart}
              title="Venta de Computadoras"
              description="Equipos de última generación, laptops, desktops y accesorios. Asesoría personalizada según tus necesidades."
              color="from-purple-500 to-pink-600"
              features={['Equipos nuevos', 'Garantía directa', 'Asesoría experta']}
              image={<img alt="Modern computer store display with laptops and gaming pcs" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1636036707395-ce81220e1d34" />}
              onClick={() => handleServiceClick('Venta de Computadoras')}
              delay={0.2}
            />

            <ServiceCard 
              icon={Camera}
              title="Videovigilancia"
              description="Instalación de sistemas de seguridad CCTV profesionales. Monitoreo remoto y grabación en alta definición."
              color="from-orange-500 to-red-600"
              features={['Cámaras HD/4K', 'Acceso remoto', 'Casa u oficina']}
              image={<img alt="Security camera system monitoring" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1698558770409-89ab5ef2e08f" />}
              onClick={() => handleServiceClick('Videovigilancia')}
              delay={0.3}
            />

            <ServiceCard 
              icon={Globe}
              title="Desarrollo Web"
              description="Creación de sitios web profesionales, tiendas online y aplicaciones web a medida."
              color="from-green-500 to-emerald-600"
              features={['Diseño responsivo', 'SEO optimizado', 'Hosting incluido']}
              image={<img alt="Web developer coding on multiple screens" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1687006067259-6de13ca3875e" />}
              onClick={() => handleServiceClick('Desarrollo Web')}
              delay={0.4}
            />

            <ServiceCard 
              icon={DatabaseZap}
              title="Recuperación de Datos"
              description="Servicio especializado para recuperar información valiosa de discos duros dañados, SSD, USB y más."
              color="from-yellow-500 to-amber-600"
              features={['Diagnóstico avanzado', 'Alta tasa de éxito', 'Confidencialidad garantizada']}
              image={<img alt="Data recovery specialist working on hard drive" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1674090943759-a3d29c43d7d3" />}
              onClick={() => handleServiceClick('Recuperación de Datos')}
              delay={0.5}
            />

            <ServiceCard 
              icon={Palette}
              title="Diseño Gráfico y Branding"
              description="Creación de logos, identidad de marca y material gráfico para que tu negocio destaque con un estilo único."
              color="from-pink-500 to-rose-500"
              features={['Diseño de logos', 'Branding estratégico', 'Edición gráfica profesional']}
              image={<img alt="Graphic designer working on branding" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1681142991801-02bba158bdf7" />}
              onClick={() => handleServiceClick('Diseño Gráfico y Branding')}
              delay={0.6}
            />

            <ServiceCard 
              icon={Megaphone}
              title="Publicidad en META ADS"
              description="Creamos y gestionamos campañas publicitarias en Facebook, Instagram, Messenger y WhatsApp."
              color="from-indigo-500 to-fuchsia-500"
              features={['Gestión de campañas', 'Anuncios efectivos', 'Optimización de presupuesto']}
              image={<img alt="Digital marketing analytics on screen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />}
              onClick={() => handleServiceClick('Publicidad en META ADS')}
              delay={0.7}
            />

            <ServiceCard 
              icon={Cpu}
              title="Actualización de Hardware"
              description="Mejora el rendimiento de tu equipo con actualizaciones de RAM, SSD, tarjetas gráficas y más componentes."
              color="from-blue-500 to-indigo-600"
              features={['Componentes originales', 'Instalación profesional', 'Asesoría técnica']}
              image={<img alt="Installing new computer hardware components" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591108063516-01f8a675395b" />}
              onClick={() => handleServiceClick('Actualización de Hardware')}
              delay={0.8}
            />

            <ServiceCard 
              icon={Shield}
              title="Seguridad Informática"
              description="Protección contra virus, malware y amenazas cibernéticas. Respaldo de datos y recuperación de información."
              color="from-red-500 to-rose-600"
              features={['Antivirus empresarial', 'Backup automático', 'Análisis de vulnerabilidades']}
              image={<img alt="Cybersecurity shield concept" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614064548237-096f735f344f" />}
              onClick={() => handleServiceClick('Seguridad Informática')}
              delay={0.9}
            />
        </div>
      </div>
    </section>
  );
};

export default Services;