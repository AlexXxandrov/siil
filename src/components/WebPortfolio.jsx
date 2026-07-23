import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Layout, ShoppingBag, Utensils, Building2, GraduationCap, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PortfolioItem = ({ title, category, description, image, icon: Icon, delay }) => {
  const handleVisit = () => {
    toast({
      title: "Visitando Sitio Demo",
      description: `Abriendo la demostración de ${title}. En un proyecto real, esto abriría el sitio web en vivo.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          {image}
        </div>
        <div className="absolute top-4 left-4 z-20 glass-effect px-3 py-1 rounded-full flex items-center gap-2">
          <Icon className="w-3 h-3 text-cyan-300" />
          <span className="text-xs font-semibold text-white">{category}</span>
        </div>
      </div>

      <div className="p-6 relative z-20 -mt-12">
        <div className="glass-effect p-4 rounded-xl mb-4 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-300 line-clamp-2 mb-4">
            {description}
          </p>
          <Button 
            onClick={handleVisit}
            size="sm" 
            className="w-full bg-white/10 hover:bg-cyan-500 hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
          >
            Ver Proyecto <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const WebPortfolio = () => {
  const projects = [
    {
      title: "Luxe Fashion Store",
      category: "E-Commerce",
      icon: ShoppingBag,
      description: "Tienda en línea completa con carrito de compras, pasarela de pagos y gestión de inventario.",
      image: <img alt="Modern fashion e-commerce website interface" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a" />
    },
    {
      title: "Gourmet Bistro",
      category: "Restaurantes",
      icon: Utensils,
      description: "Sitio web para restaurante con sistema de reservas en línea y menú digital interactivo.",
      image: <img alt="Elegant restaurant website showing food menu" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601972602237-8c79241e468b" />
    },
    {
      title: "TechSolutions Corp",
      category: "Corporativo",
      icon: Building2,
      description: "Presencia digital corporativa con blog de noticias, portal de clientes y diseño minimalista.",
      image: <img alt="Modern corporate business website" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
    },
    {
      title: "EduLearn Academy",
      category: "Educación",
      icon: GraduationCap,
      description: "Plataforma educativa con cursos en línea, área de estudiantes y gestión de contenidos LMS.",
      image: <img alt="Online education platform interface" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677696795233-5ef097695f12" />
    },
    {
      title: "MediCare Plus",
      category: "Salud",
      icon: Stethoscope,
      description: "Portal médico con sistema de citas, directorio de especialistas y blog de salud.",
      image: <img alt="Medical clinic website design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682327712452-f10e3128e390" />
    },
    {
      title: "Urban Real Estate",
      category: "Inmobiliaria",
      icon: Layout,
      description: "Catálogo de propiedades con filtros de búsqueda avanzados, mapas interactivos y tours virtuales.",
      image: <img alt="Real estate website showing luxury homes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1672870153272-1ce7b03bf04b" />
    }
  ];

  return (
    <section id="portafolio-web" className="py-24 relative bg-slate-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5 fixed-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold">Portafolio Digital</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Sitios Web <span className="text-gradient">Profesionales</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre nuestra colección de diseños web premium. Cada proyecto es único y optimizado para convertir visitantes en clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button 
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 text-lg px-8 py-6 rounded-full"
          >
            ¿Quieres un sitio como estos? ¡Contáctanos!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebPortfolio;