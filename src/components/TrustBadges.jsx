import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, Lock, ThumbsUp } from 'lucide-react';

const badges = [
  { icon: Award, label: '10+ Años', sublabel: 'de Experiencia' },
  { icon: ShieldCheck, label: 'Garantía', sublabel: 'en Todo Servicio' },
  { icon: Lock, label: 'Datos', sublabel: 'Confidenciales' },
  { icon: Clock, label: 'Soporte', sublabel: '24/7 Disponible' },
  { icon: ThumbsUp, label: '98%', sublabel: 'Satisfacción' },
];

const TrustBadges = () => {
  return (
    <section className="py-12 relative border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500/40 transition-colors shrink-0">
                <badge.icon className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg leading-tight">{badge.label}</p>
                <p className="text-xs text-gray-400">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
