import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "¡Campos requeridos! ⚠️",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Current implementation: mailto link (no fetch call)
    const subject = `Nuevo mensaje de ${formData.name} - Servicio de interés: ${formData.service || 'No especificado'}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}\n\nServicio de interés: ${formData.service || 'No especificado'}\n\nMensaje:\n${formData.message}`;
    
    const mailtoLink = `mailto:contacto@leao.com.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "¡Redirigiendo a tu cliente de correo! 🚀",
      description: "Se abrirá tu aplicación de correo para que envíes el mensaje.",
      duration: 5000,
    });

    /* 
     * FUTURE API INTEGRATION EXAMPLE (when backend is ready):
     * 
     * import { apiPost } from '@/lib/api-utils';
     * 
     * try {
     *   const response = await apiPost('https://api.leao.com.mx/contact', {
     *     name: formData.name,
     *     email: formData.email,
     *     phone: formData.phone,
     *     service: formData.service,
     *     message: formData.message
     *   });
     *   
     *   toast({
     *     title: "¡Mensaje enviado! ✅",
     *     description: "Nos pondremos en contacto contigo pronto.",
     *   });
     *   
     *   // Reset form
     *   setFormData({ name: '', email: '', phone: '', service: '', message: '' });
     * } catch (error) {
     *   console.error('Contact form error:', error);
     *   toast({
     *     title: "Error al enviar ❌",
     *     description: "Hubo un problema. Por favor intenta de nuevo o contáctanos por WhatsApp.",
     *     variant: "destructive",
     *   });
     * }
     */
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Ing. Alexandro León - Teléfono',
      value: '722 46 72 724',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@leao.com.mx',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Toluca, México',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            ¿Listo para <span className="text-gradient">Comenzar?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte con tus necesidades tecnológicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8 glow-effect">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Envíanos un Mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Nombre Completo *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu nombre"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="tu@email.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Teléfono</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="722 46 72 724"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Servicio de Interés</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="" className="bg-slate-900">Selecciona un servicio</option>
                    <option value="chatbot_escuelas" className="bg-slate-900">Chatbot IA para Escuelas</option>
                    <option value="chatbot_negocios" className="bg-slate-900">Soluciones Digitales Completas</option>
                    <option value="mantenimiento" className="bg-slate-900">Mantenimiento y Reparación</option>
                    <option value="venta" className="bg-slate-900">Venta de Computadoras</option>
                    <option value="videovigilancia" className="bg-slate-900">Videovigilancia</option>
                    <option value="web" className="bg-slate-900">Desarrollo Web</option>
                    <option value="recuperacion_datos" className="bg-slate-900">Recuperación de Datos</option>
                    <option value="diseno_grafico" className="bg-slate-900">Diseño Gráfico y Branding</option>
                    <option value="meta_ads" className="bg-slate-900">Publicidad en META</option>
                    <option value="hardware" className="bg-slate-900">Actualización de Hardware</option>
                    <option value="seguridad" className="bg-slate-900">Seguridad Informática</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-300">Mensaje *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 glow-effect text-lg"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-8 glow-effect">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Información de Contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`bg-gradient-to-br ${info.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                      <p className="text-lg font-semibold text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-8 glow-effect">
              <h4 className="text-2xl font-bold mb-4 text-gradient">Horario de Atención</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lunes - Viernes</span>
                  <span className="font-semibold text-cyan-300">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sábados</span>
                  <span className="font-semibold text-cyan-300">10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Domingos</span>
                  <span className="font-semibold text-red-400">Cerrado</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-400/30">
                <p className="text-sm text-cyan-300 font-semibold">⚡ Servicio de emergencia 24/7 disponible</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;