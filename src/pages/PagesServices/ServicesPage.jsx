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
    <div className="w-full min-h-screen bg-white flex flex-col font-sans relative box-border overflow-x-hidden pt-24">
      
      {/* ========================================= */}
      {/* NAVBAR PREMIUM GLOBAL INTEGRADO           */}
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
            <Link to="/" className={`${hoverTextClass} transition-colors`}>Inicio</Link>
            <Link to="/services" className={`${hoverTextClass} transition-colors`}>Catálogo</Link>
            <Link to="/about" className={`${hoverTextClass} transition-colors`}>Conócenos</Link>
            
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
      <header className="text-center px-6 pt-16 md:pt-24 mb-16 md:mb-20 select-none">
        <h1 className="!text-5xl md:!text-6xl lg:!text-[4.5rem] !font-extrabold mb-4 tracking-tighter leading-tight block">
          <span className="text-[#193833] block md:inline">{t.hero.title}</span> <br className="hidden md:block" />
          <span className="text-[#3B7469] block md:inline">{t.hero.highlight}</span>
        </h1>
        <p className="text-base md:text-xl text-[#5E706B] font-light tracking-wide max-w-xl mx-auto block">
          {t.hero.subtitle}
        </p>
      </header>

      {/* ========================================= */}
      {/* 3. CUERPO ASIMÉTRICO (OMMA Vertical + Lista)*/}
      {/* ========================================= */}
      <section className="max-w-5xl mx-auto w-full px-6 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-50 mb-32 box-border relative">
        
        {/* Lado Izquierdo: Texto Vertical Gigante */}
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
        <div className="w-full max-w-2xl flex flex-col gap-10 md:gap-14 pt-2 z-10 shrink-0">
          
          <Link to="/shoulder" className="group block cursor-pointer outline-none w-max">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-2">
              {t.clinical.shoulder.title}
            </h2>
            <p className="text-[#5E706B] text-base md:text-lg font-light leading-relaxed max-w-md">
              {t.clinical.shoulder.desc}
            </p>
          </Link>

          <Link to="/elbow" className="group block cursor-pointer outline-none w-max">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-2">
              {t.clinical.elbow.title}
            </h2>
            <p className="text-[#5E706B] text-base md:text-lg font-light leading-relaxed max-w-md">
              {t.clinical.elbow.desc}
            </p>
          </Link>

          <Link to="/knee" className="group block cursor-pointer outline-none w-max">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-2">
              {t.clinical.knee.title}
            </h2>
            <p className="text-[#5E706B] text-base md:text-lg font-light leading-relaxed max-w-md">
              {t.clinical.knee.desc}
            </p>
          </Link>

          <Link to="/hip" className="group block cursor-pointer outline-none w-max">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-2">
              {t.clinical.hip.title}
            </h2>
            <p className="text-[#5E706B] text-base md:text-lg font-light leading-relaxed max-w-md">
              {t.clinical.hip.desc}
            </p>
          </Link>

          <Link to="/sports-medicine" className="group block cursor-pointer outline-none w-max">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#D0D6D4] group-hover:text-[#32453F] transition-colors duration-500 tracking-tighter leading-none mb-2">
              {t.clinical.sports.title}
            </h2>
            <p className="text-[#5E706B] text-base md:text-lg font-light leading-relaxed max-w-md">
              {t.clinical.sports.desc}
            </p>
          </Link>

        </div>
      </section>

      {/* ========================================= */}
      {/* 4. FOOTER GLOBAL ACTUALIZADO              */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-16 px-6 md:px-12 mt-auto box-border block">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="font-bold text-lg mb-6">Acerca de nosotros</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Conócenos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Información de Contacto</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>(+52) 56 4616 0018</p>
              <p>info@ommagr.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Catálogo de Productos</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none">
              <li><Link to="/sports-medicine" className="hover:text-white transition-colors">Medicina Deportiva</Link></li>
              <li><Link to="/shoulder" className="hover:text-white transition-colors">Hombro</Link></li>
              <li><Link to="/knee" className="hover:text-white transition-colors">Rodilla</Link></li>
              <li><Link to="/elbow" className="hover:text-white transition-colors">Codo</Link></li>
              <li><Link to="/hip" className="hover:text-white transition-colors">Cadera</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between opacity-70 text-sm">
          <p>© {new Date().getFullYear()} OMMA Group LLC. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaFacebook /></a>
            <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}