import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AIChatbots from '@/components/AIChatbots';
import Services from '@/components/Services';
import WebPortfolio from '@/components/WebPortfolio';
import DataRecovery from '@/components/DataRecovery';
import Marketing from '@/components/Marketing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Soluciones Integrales en Informática LEAO - Servicios Profesionales de TI</title>
        <meta name="description" content="Expertos en mantenimiento, reparación y venta de computadoras. Instalación de sistemas de videovigilancia y desarrollo de sitios web profesionales." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <AIChatbots />
        <Services />
        <WebPortfolio />
        <DataRecovery />
        <Marketing />
        <About />
        <Contact />
        <Footer />
        <WhatsAppButton phoneNumber="521724672724" />
        <Toaster />
      </div>
    </>
  );
}

export default App;