// src/pages/PagesServices/ServicesPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";

// RECUPERAMOS TUS IMPORTACIONES ORIGINALES EXACTAS
import es from "../../locales/pageservices/services/es";
import en from "../../locales/pageservices/services/en";
import pt from "../../locales/pageservices/services/pt";

export default function ServicesPage() {
  const { language, changeLanguage } = useLanguage();
  
  // Usamos exactamente tu lógica original para que no se rompa nada
  const t = { es, en, pt }[language];

  // ==========================================
  // LÓGICA DEL NAVBAR PREMIUM (Glassmorphism)
  // ==========================================
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se fija casi de inmediato al bajar
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Comprobar al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clases dinámicas para el Navbar
  const navBgClass = isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent";
  const textColorClass = "text-gray-800"; // Fondo blanco, texto oscuro
  const hoverTextClass = "hover:text-[#356658]";
  const dividerColorClass = "border-gray-300";

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans relative box-border overflow-x-hidden pt-20 md:pt-24">
      
      {/* ========================================= */}
      {/* NAVBAR PREMIUM GLOBAL INTEGRADO           */}
      {/* ========================================= */}
      <div className={`w-full transition-all duration-300 z-[999] fixed top-0 left-0 right-0 py-3 md:py-4 ${navBgClass}`}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 border-b border-gray-100 pb-2 md:pb-3">
          
          {/* Logo */}
          <Link to="/" className="h-8 md:h-10 flex items-center">
            <img 
              src="/images/omma_logo_hero.png" 
              alt="OMMA Group" 
              className="h-6 sm:h-8 md:h-10 object-contain filter invert opacity-90" 
            />
          </Link>
          
          {/* ENLACES CENTRALES */}
          {/* Ajuste de tipografía y espaciado para móviles */}
          <nav className={`flex items-center space-x-4 sm:space-x-8 md:space-x-12 font-medium text-[13px] sm:text-sm md:text-base ${textColorClass} transition-colors duration-300`}>
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

      {/* ========================================= */}
      {/* 2. ENCABEZADO "NUESTROS SERVICIOS"        */}
      {/* ========================================= */}
      <header className="text-center px-4 md:px-6 pt-10 md:pt-24 mb-12 md:mb-20 select-none">
        {/* Tamaño ajustado para móvil (!text-4xl) */}
        <h1 className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-[4.5rem] !font-extrabold mb-3 md:mb-4 tracking-tighter leading-tight block">
          <span className="text-[#193833] block md:inline">{t.hero.title}</span> <br className="hidden md:block" />
          <span className="text-[#3B7469] block md:inline">{t.hero.highlight}</span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-[#5E706B] font-light tracking-wide max-w-xl mx-auto block px-2 md:px-0">
          {t.hero.subtitle}
        </p>
      </header>

      {/* ========================================= */}
      {/* 3. CUERPO ASIMÉTRICO (OMMA Vertical + Lista)*/}
      {/* ========================================= */}
      <section className="max-w-5xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-50 mb-20 md:mb-32 box-border relative">
        
        {/* Lado Izquierdo: Texto Vertical Gigante (Se mantiene oculto en móvil) */}
        <div className="hidden md:block w-[120px] lg:w-[150px] shrink-0 pt-4 select-none relative z-0">
          <div className="sticky top-80 h-[850px] w-full flex items-center justify-center">
            <div className="absolute transform -rotate-90">
              <div className="overflow-hidden h-[110px] lg:h-[145px] flex items-start">
                <span className="text-[12rem] lg:text-[15rem] font-black text-[#869A93] opacity-70 tracking-tighter uppercase leading-none -mt-4 lg:-mt-6">
                  OMMA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Lista de Servicios Interactivos */}
        {/* Centrado en móvil, alineado a la izquierda en PC */}
        <div className="w-full max-w-2xl flex flex-col items-center md:items-start text-center md:text-left gap-10 md:gap-14 pt-2 z-10 shrink-0">
          
          <Link to="/shoulder" className="group flex flex-col items-center md:items-start cursor-pointer outline-none w-full md:w-max">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-3 md:mb-2 whitespace-pre-line">
              {t.clinical.shoulder.title}
            </h2>
            <p className="text-[#5E706B] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md px-4 md:px-0">
              {t.clinical.shoulder.desc}
            </p>
          </Link>

          <Link to="/elbow" className="group flex flex-col items-center md:items-start cursor-pointer outline-none w-full md:w-max">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-3 md:mb-2 whitespace-pre-line">
              {t.clinical.elbow.title}
            </h2>
            <p className="text-[#5E706B] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md px-4 md:px-0">
              {t.clinical.elbow.desc}
            </p>
          </Link>

          <Link to="/knee" className="group flex flex-col items-center md:items-start cursor-pointer outline-none w-full md:w-max">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-3 md:mb-2 whitespace-pre-line">
              {t.clinical.knee.title}
            </h2>
            <p className="text-[#5E706B] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md px-4 md:px-0">
              {t.clinical.knee.desc}
            </p>
          </Link>

          <Link to="/hip" className="group flex flex-col items-center md:items-start cursor-pointer outline-none w-full md:w-max">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-3 md:mb-2 whitespace-pre-line">
              {t.clinical.hip.title}
            </h2>
            <p className="text-[#5E706B] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md px-4 md:px-0">
              {t.clinical.hip.desc}
            </p>
          </Link>

          <Link to="/sports-medicine" className="group flex flex-col items-center md:items-start cursor-pointer outline-none w-full md:w-max">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-3 md:mb-2 whitespace-pre-line">
              {t.clinical.sports.title}
            </h2>
            <p className="text-[#5E706B] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md px-4 md:px-0">
              {t.clinical.sports.desc}
            </p>
          </Link>

        </div>
      </section>

      {/* ========================================= */}
      {/* 4. FOOTER GLOBAL ACTUALIZADO              */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-12 md:py-16 px-6 md:px-12 mt-auto box-border block">
        {/* Centrado en móvil, alineado a la izquierda en PC */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">{t.footer.aboutTitle}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none items-center md:items-start">
              <li><Link to="/" className="hover:text-white transition-colors">{t.footer.navigation.home}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.footer.navigation.about}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.footer.navigation.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">{t.footer.contactTitle}</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">{t.footer.productsTitle}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none items-center md:items-start">
              <li><Link to="/sports-medicine" className="hover:text-white transition-colors">{t.footer.products.sportsMedicine}</Link></li>
              <li><Link to="/shoulder" className="hover:text-white transition-colors">{t.footer.products.shoulder}</Link></li>
              <li><Link to="/knee" className="hover:text-white transition-colors">{t.footer.products.knee}</Link></li>
              <li><Link to="/elbow" className="hover:text-white transition-colors">{t.footer.products.elbow}</Link></li>
              <li><Link to="/hip" className="hover:text-white transition-colors">{t.footer.products.hip}</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between opacity-70 text-sm gap-4 md:gap-0">
          <p className="text-center md:text-left">© {new Date().getFullYear()} OMMA Group LLC. {t.footer.rights}</p>
          <div className="flex items-center space-x-6 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaFacebook /></a>
            <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}