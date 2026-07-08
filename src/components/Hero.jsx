// src/components/Hero.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "/src/locales";

const Hero = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  
  const [isFixed, setIsFixed] = useState(false);
  const navbarWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarWrapperRef.current) {
        const topPosition = navbarWrapperRef.current.getBoundingClientRect().top;
        if (topPosition <= 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // VARIABLES DE COLOR DEL NAVBAR
  const navBgClass = isFixed ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent";
  const textColorClass = isFixed ? "text-gray-900" : "text-white";
  const hoverTextClass = isFixed ? "hover:text-[#356658]" : "hover:text-teal-200";
  const borderColorClass = isFixed ? "border-gray-300" : "border-white/30";
  const dividerColorClass = isFixed ? "border-gray-400" : "border-white/40";
  
  return (
    <section className="relative w-full bg-white overflow-x-hidden flex flex-col items-center">
      
      {/* ========================================= */}
      {/* 1. SECCIÓN HERO (Con gradiente dinámico) */}
      {/* ========================================= */}
      <div className="relative w-full flex flex-col items-center pt-20 md:pt-24 pb-20 md:pb-24 bg-gradient-to-b from-[#193833] via-[#3B7469] via-[72%] to-white">
        
        {/* IMÁGENES: Ocultas en móviles (hidden), visibles desde tablets (md:block) para no romper la experiencia móvil */}
        <img 
          src="/images/hero_protesis_left.png" 
          alt="Prótesis Izquierda" 
          className="hidden md:block absolute left-0 md:left-8 top-10 w-64 md:w-80 lg:w-[32rem] object-contain drop-shadow-2xl transition-all duration-300 z-[1] pointer-events-none"
        />
        <img 
          src="/images/hero_protesis_right.png" 
          alt="Prótesis Derecha" 
          className="hidden md:block absolute right-0 md:right-8 top-32 w-56 md:w-72 lg:w-[22rem] object-contain drop-shadow-2xl transition-all duration-300 z-[1] pointer-events-none"
        />

        {/* CONTENIDO TEXTUAL */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4 mt-8 md:mt-0">
          <img 
            src="/images/omma_logo_hero.png" 
            alt="OMMA Group LLC" 
            className="h-14 md:h-20 mb-2 md:mb-4 object-contain"
          />
          {/* Ajuste de tipografía para evitar desbordes en móvil (text-4xl) */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold text-white mb-4 md:mb-6 leading-[1.1] whitespace-pre-line tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-white text-sm md:text-base max-w-2xl font-light leading-relaxed px-2 md:px-0">
            {t.hero.description}
          </p>
        </div>

        {/* NAVBAR */}
        <div ref={navbarWrapperRef} className="w-full relative mt-8 md:mt-12 min-h-[120px] md:min-h-[140px] z-50"> 
          <div className={`w-full transition-all duration-300 z-[999] py-3 md:py-4 ${navBgClass} ${isFixed ? "fixed top-0 left-0 right-0" : "relative"}`}>
            
            {/* ENLACES: Implementación de flex-wrap para móviles y ajustes de espaciado */}
            <div className={`w-full max-w-6xl mx-auto flex justify-center border-y ${borderColorClass} py-2 md:py-3 transition-colors duration-300 px-2`}>
              <nav className={`flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-6 md:gap-x-0 md:space-x-12 font-medium text-[13px] sm:text-sm md:text-base ${textColorClass} transition-colors duration-300`}>
                <Link to="/" className={`${hoverTextClass} transition-colors`}>{t.navbar.home}</Link>
                <Link to="/services" className={`${hoverTextClass} transition-colors`}>{t.navbar.services}</Link>
                <Link to="/about" className={`${hoverTextClass} transition-colors`}>{t.navbar.about}</Link>
                
                {/* SELECTOR DE IDIOMA */}
                <div className={`flex items-center space-x-1 sm:space-x-2 border-l ${dividerColorClass} pl-3 md:pl-6 ml-1 md:ml-2 transition-colors duration-300`}>
                  <button 
                    onClick={() => changeLanguage('es')}
                    className={`text-xs font-bold transition-colors ${language === 'es' ? (isFixed ? 'text-[#356658]' : 'text-teal-200') : `${textColorClass} ${hoverTextClass}`}`}
                  >
                    ES
                  </button>
                  <span className={`text-xs opacity-50 ${textColorClass}`}>|</span>
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`text-xs font-bold transition-colors ${language === 'en' ? (isFixed ? 'text-[#356658]' : 'text-teal-200') : `${textColorClass} ${hoverTextClass}`}`}
                  >
                    EN
                  </button>
                  <span className={`text-xs opacity-50 ${textColorClass}`}>|</span>
                  <button 
                    onClick={() => changeLanguage('pt')}
                    className={`text-xs font-bold transition-colors ${language === 'pt' ? (isFixed ? 'text-[#356658]' : 'text-teal-200') : `${textColorClass} ${hoverTextClass}`}`}
                  >
                    PT
                  </button>
                </div>
              </nav>
            </div>

            {/* BOTÓN CONTÁCTANOS */}
            <div className={`w-full flex justify-center transition-all duration-300 overflow-hidden ${isFixed ? "opacity-0 h-0 mt-0 pointer-events-none" : "opacity-100 h-10 mt-6 md:mt-8"}`}>
              <Link 
                to="/contact" 
                className="bg-transparent border border-white text-white px-8 md:px-10 py-2 md:py-2.5 rounded text-sm font-bold hover:bg-white hover:text-[#18392F] transition-colors"
              >
                {t.navbar.contact}
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================= */}
      {/* 2. SECCIÓN ACERCA DE NOSOTROS (Fondo Blanco) */}
      {/* ========================================= */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center px-4 pb-16 md:pb-24 z-10 pt-10 md:pt-8">
        
        {/* Título Principal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#356658] mb-10 md:mb-16 text-center tracking-tight">
          {t.aboutUs.title}
        </h2>

        {/* Contenedor de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {/* Tarjeta: Misión */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50 p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <img src="/images/mision_icon.png" alt="Misión" className="w-16 md:w-20 h-16 md:h-20 mb-6 md:mb-8 object-contain" />
            <div className="border border-[#356658] rounded-full px-8 md:px-10 py-1.5 mb-6">
              <h3 className="text-lg md:text-2xl font-light text-[#356658]">
                {t.aboutUs.mission.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t.aboutUs.mission.text}
            </p>
          </div>

          {/* Tarjeta: Visión */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50 p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <img src="/images/vision_icon.png" alt="Visión" className="w-16 md:w-20 h-16 md:h-20 mb-6 md:mb-8 object-contain" />
            <div className="border border-[#356658] rounded-full px-8 md:px-10 py-1.5 mb-6">
              <h3 className="text-lg md:text-2xl font-light text-[#356658]">
                {t.aboutUs.vision.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t.aboutUs.vision.text}
            </p>
          </div>

          {/* Tarjeta: Valores */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50 p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <img src="/images/valores_icon.png" alt="Valores" className="w-16 md:w-20 h-16 md:h-20 mb-6 md:mb-8 object-contain" />
            <div className="border border-[#356658] rounded-full px-8 md:px-10 py-1.5 mb-6">
              <h3 className="text-lg md:text-2xl font-light text-[#356658]">
                {t.aboutUs.values.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t.aboutUs.values.description}
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;