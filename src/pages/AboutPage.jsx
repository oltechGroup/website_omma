// src/pages/AboutPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

// Importaciones directas y exclusivas para la sección "Nosotros"
import es from "../locales/about/es";
import en from "../locales/about/en";
import pt from "../locales/about/pt";

export default function AboutPage() {
  const { language, changeLanguage } = useLanguage();
  
  // Asignación dinámica del diccionario según el idioma seleccionado
  const t = { es, en, pt }[language];

  // ==========================================
  // LÓGICA DEL NAVBAR PREMIUM (Glassmorphism)
  // ==========================================
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clases dinámicas para el Navbar
  const navBgClass = isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent";
  const textColorClass = "text-gray-800";
  const hoverTextClass = "hover:text-[#356658]";
  const dividerColorClass = "border-gray-300";

  // Arreglo de estilos y acomodo (stagger) para las 4 tarjetas de clientes
  const clientCardStyles = [
    { bg: "bg-[#F4F4F4]", text: "text-[#32453F]", descText: "text-[#5E706B]", pillBorder: "border-gray-400 text-[#32453F]", stagger: "lg:mt-0" },
    { bg: "bg-[#185B5F]", text: "text-white", descText: "text-gray-200", pillBorder: "border-white/50 text-white", stagger: "lg:mt-12" },
    { bg: "bg-[#D9D9D9]", text: "text-[#32453F]", descText: "text-[#5E706B]", pillBorder: "border-gray-400 text-[#32453F]", stagger: "lg:mt-28" },
    { bg: "bg-[#D9D9D9]", text: "text-[#32453F]", descText: "text-[#5E706B]", pillBorder: "border-gray-400 text-[#32453F]", stagger: "lg:mt-6" }
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans relative box-border pt-24">
      
      {/* ========================================= */}
      {/* 1. NAVBAR PREMIUM GLOBAL INTEGRADO        */}
      {/* ========================================= */}
      <div className={`w-full transition-all duration-300 z-[999] fixed top-0 left-0 right-0 py-4 ${navBgClass}`}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 border-b border-gray-100 pb-3">
          
          {/* Logo */}
          <Link to="/" className="h-10 flex items-center">
            <img 
              src="/images/omma_logo_hero.png" 
              alt="OMMA Group" 
              className="h-8 md:h-10 object-contain filter invert opacity-90" 
            />
          </Link>
          
          {/* ENLACES CENTRALES */}
          <nav className={`flex items-center space-x-8 md:space-x-12 font-medium text-sm md:text-base ${textColorClass} transition-colors duration-300`}>
            <Link to="/" className={`${hoverTextClass} transition-colors`}>{t.nav.home}</Link>
            <Link to="/services" className={`${hoverTextClass} transition-colors`}>{t.nav.catalog}</Link>
            <Link to="/about" className={`${hoverTextClass} transition-colors`}>{t.nav.meetUs}</Link>
            
            {/* SELECTOR DE IDIOMA */}
            <div className={`flex items-center space-x-2 border-l ${dividerColorClass} pl-6 ml-2 transition-colors duration-300 hidden md:flex`}>
              <button onClick={() => changeLanguage('es')} className={`text-xs font-bold transition-colors ${language === 'es' ? 'text-[#356658]' : `${textColorClass} ${hoverTextClass}`}`}>ES</button>
              <span className={`text-xs opacity-50 ${textColorClass}`}>|</span>
              <button onClick={() => changeLanguage('en')} className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-[#356658]' : `${textColorClass} ${hoverTextClass}`}`}>EN</button>
              <span className={`text-xs opacity-50 ${textColorClass}`}>|</span>
              <button onClick={() => changeLanguage('pt')} className={`text-xs font-bold transition-colors ${language === 'pt' ? 'text-[#356658]' : `${textColorClass} ${hoverTextClass}`}`}>PT</button>
            </div>
          </nav>
        </div>
      </div>

      {/* 2. HERO EDITORIAL (Dos Columnas) */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20 md:py-32 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24 box-border">
        {/* Título Gigante */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="!text-6xl md:!text-7xl lg:!text-[5.5rem] !font-extrabold !text-[#32453F] leading-[1.1] tracking-tighter block mb-6">
            {t.hero.title} <br className="hidden md:block" />
            {t.hero.subtitle}
          </h1>
        </div>
        {/* Textos Misión y Visión */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-10 md:pt-4">
          <p className="text-base md:text-lg text-[#5E706B] font-light leading-relaxed">
            {t.mission.text}
          </p>
          <p className="text-base md:text-lg text-[#5E706B] font-light leading-relaxed">
            {t.vision.text}
          </p>
        </div>
      </section>

      {/* 3. LA CUADRÍCULA (4 Cuadrantes con líneas divisoras) */}
      <section className="max-w-6xl mx-auto w-full px-4 md:px-8 mb-32 box-border">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          
          {/* CUADRANTE 1: Valores (Arriba Izquierda) */}
          <div className="border-b border-[#D9E3E0] md:border-r p-8 md:p-14 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold text-[#526B63] mb-8 text-center">{t.values.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              <div className="border border-gray-400 rounded-full py-3 px-4 text-center text-[#7C8B87] font-medium text-sm md:text-base hover:border-[#32453F] transition-colors cursor-default">{t.values.items.innovation}</div>
              <div className="border border-gray-400 rounded-full py-3 px-4 text-center text-[#7C8B87] font-medium text-sm md:text-base hover:border-[#32453F] transition-colors cursor-default">{t.values.items.excellence}</div>
              <div className="border border-gray-400 rounded-full py-3 px-4 text-center text-[#7C8B87] font-medium text-sm md:text-base hover:border-[#32453F] transition-colors cursor-default">{t.values.items.trust}</div>
              <div className="border border-gray-400 rounded-full py-3 px-4 text-center text-[#7C8B87] font-medium text-sm md:text-base hover:border-[#32453F] transition-colors cursor-default">{t.values.items.accessibility}</div>
              <div className="border border-gray-400 rounded-full py-3 px-4 text-center text-[#7C8B87] font-medium text-sm md:text-base hover:border-[#32453F] transition-colors cursor-default">{t.values.items.sustainability}</div>
              <div className="border border-gray-400 rounded-full py-3 px-4 text-center text-[#7C8B87] font-medium text-sm md:text-base hover:border-[#32453F] transition-colors cursor-default">{t.values.items.service}</div>
            </div>
          </div>

          {/* CUADRANTE 2: Posicionamiento (Arriba Derecha) */}
          <div className="border-b border-[#D9E3E0] p-8 md:p-14 flex flex-col items-center justify-center text-center">
            <p className="italic text-[#465A54] text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
              "{t.positioning}"
            </p>
            <div className="w-32 h-[1px] bg-[#465A54]"></div>
          </div>

          {/* CUADRANTE 3: Perfil Empresarial (Abajo Izquierda) */}
          <div className="md:border-r border-[#D9E3E0] p-8 md:p-14 flex flex-col items-center text-center justify-center">
            <h3 className="font-extrabold text-[#526B63] text-xl mb-3">{t.profile.title}</h3>
            <p className="text-[#5E706B] font-light text-sm md:text-base mb-10 max-w-sm">
              {t.profile.text}
            </p>
            <h3 className="font-extrabold text-[#526B63] text-xl mb-3">{t.profile.subtitle}</h3>
            <p className="text-[#5E706B] font-light text-sm md:text-base max-w-sm">
              {t.profile.objetive}
            </p>
          </div>

          {/* CUADRANTE 4: Experiencia (Abajo Derecha) */}
          <div className="p-8 md:p-14 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold text-[#526B63] mb-8 text-center">{t.experience.title}</h2>
            <div className="flex flex-col gap-3 w-full max-w-md">
              {t.experience.items.map((item, idx) => (
                <div key={idx} className="border border-gray-400 rounded-2xl p-4 text-xs md:text-sm text-[#7C8B87] font-light hover:border-[#32453F] hover:shadow-sm transition-all cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 4. CLIENTES (Layout Tarjetas Staggered)   */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto w-full px-6 mb-48 box-border">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#32453F] text-center mb-16 md:mb-24">{t.clients.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12">
          {t.clients.list.map((client, index) => {
            const style = clientCardStyles[index] || clientCardStyles[0];
            return (
              <div 
                key={index} 
                className={`rounded-[2.5rem] p-6 md:p-8 flex flex-col ${style.bg} transition-transform hover:-translate-y-2 duration-300 ${style.stagger} self-start`}
              >
                {/* Cápsula superior (Visitar sitio) */}
                <div className="mb-8 flex justify-start">
                  {client.link ? (
                    <a 
                      href={client.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`inline-block px-5 py-2 rounded-full border ${style.pillBorder} text-[10px] md:text-xs font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity`}
                    >
                      {t.clients.visit}
                    </a>
                  ) : (
                    <span className={`inline-block px-5 py-2 rounded-full border ${style.pillBorder} text-[10px] md:text-xs font-semibold uppercase tracking-wider opacity-50`}>
                      {t.clients.noWebsite}
                    </span>
                  )}
                </div>
                
                {/* Imagen del Cliente */}
                <div className="w-full h-48 md:h-52 rounded-[2rem] overflow-hidden mb-10 bg-white/50 shadow-sm">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* WhatsApp y Textos */}
                <div className="mt-auto flex flex-col items-start">
                  <a 
                    href={`https://wa.me/${client.phone.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="mb-5 w-12 h-12 flex items-center justify-center rounded-full bg-[#000000] text-white hover:bg-gray-600 transition-colors shadow-lg"
                    title={client.phone}
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 leading-tight tracking-tight ${style.text}`}>
                    {client.name}
                  </h3>
                  <p className={`text-sm md:text-base font-light leading-relaxed max-w-sm ${style.descText}`}>
                    {client.address}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. FOOTER GLOBAL ACTUALIZADO              */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-16 px-6 md:px-12 mt-auto box-border block">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Acerca de nosotros */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.aboutTitle}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none">
              <li><Link to="/" className="hover:text-white transition-colors">{t.footer.navigation.home}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.footer.navigation.about}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.footer.navigation.contact}</Link></li>
            </ul>
          </div>

          {/* Columna 2: Información de Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.contactTitle}</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>

          {/* Columna 3: Catálogo de Productos */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.productsTitle}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none">
              <li><Link to="/sports-medicine" className="hover:text-white transition-colors">{t.footer.products.sportsMedicine}</Link></li>
              <li><Link to="/shoulder" className="hover:text-white transition-colors">{t.footer.products.shoulder}</Link></li>
              <li><Link to="/knee" className="hover:text-white transition-colors">{t.footer.products.knee}</Link></li>
              <li><Link to="/elbow" className="hover:text-white transition-colors">{t.footer.products.elbow}</Link></li>
              <li><Link to="/hip" className="hover:text-white transition-colors">{t.footer.products.hip}</Link></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between opacity-70 text-sm">
          <p>© {new Date().getFullYear()} OMMA Group LLC. {t.footer.rights.split('©')[1]?.substring(5) || "Todos los derechos reservados."}</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaFacebook /></a>
            <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}