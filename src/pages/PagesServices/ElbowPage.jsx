// src/pages/PagesServices/ElbowPage.jsx
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaDownload, FaTimes, FaTiktok, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// Imágenes
import upper_ulna from "../../assets/images/serviceselbow/upper_ulna.png";
import distal_humerus from "../../assets/images/serviceselbow/distal_humerus.png";
import half_axis_sleeve from "../../assets/images/serviceselbow/half_axis_sleeve_ulnar.png";
import fixation_screw from "../../assets/images/serviceselbow/fixation_screw.png";
import axes from "../../assets/images/serviceselbow/axes.png";

// Traducciones
import es from "../../locales/pageservices/elbow/es";
import en from "../../locales/pageservices/elbow/en";
import pt from "../../locales/pageservices/elbow/pt";

export default function ElbowPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, changeLanguage } = useLanguage();
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

  // Arreglo de productos de codo
  const products = [
    { img: upper_ulna, title: t.products.upper_ulna.title, desc: t.products.upper_ulna.desc },
    { img: distal_humerus, title: t.products.distal_humerus.title, desc: t.products.distal_humerus.desc },
    { img: half_axis_sleeve, title: t.products.half_axis_sleeve.title, desc: t.products.half_axis_sleeve.desc },
    { img: fixation_screw, title: t.products.fixation_screw.title, desc: t.products.fixation_screw.desc },
    { img: axes, title: t.products.axes.title, desc: t.products.axes.desc },
  ];

  // Cuadruplicamos el array para que el carrusel infinito funcione perfecto y sin cortes
  const displayProducts = [...products, ...products, ...products, ...products];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans relative box-border overflow-x-hidden pt-20 md:pt-24">
      
      {/* ESTILOS DEL CARRUSEL INFINITO */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ========================================= */}
      {/* 1. NAVBAR PREMIUM GLOBAL INTEGRADO        */}
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

      {/* 2. HERO */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 md:gap-12 box-border">
        {/* Centrado en móvil, alineado a la izquierda en PC */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
           <span className="text-lg sm:text-xl md:text-3xl text-gray-400 font-light tracking-wide mb-1 md:mb-2">{t.hero.titleSmall}</span>
           <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black text-[#193833] tracking-tighter leading-none uppercase">{t.hero.titleLarge}</h1>
        </div>
        <div className="w-full md:w-1/2 flex items-center md:pt-8 lg:pt-12 justify-center md:justify-start">
           <p className="text-[#5E706B] text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-lg text-center md:text-left px-2 md:px-0">
             {t.hero.subtitle}
           </p>
        </div>
      </div>

      {/* 3. SECCIÓN DE PRODUCTOS (Título estático, productos en carrusel) */}
      <section className="w-full flex flex-col gap-10 md:gap-16 pb-12 md:pb-16 pt-4 md:pt-8">
        <div 
          className="w-full relative overflow-hidden flex flex-col lg:flex-row items-center py-12 md:py-16 lg:py-24"
          style={{ background: 'linear-gradient(90deg, #517A71 0%, #85A79C 45%, rgba(255,255,255,0) 100%)' }}
        >
           {/* Título Estático a la izquierda */}
           <div className="w-full lg:w-2/5 px-6 md:px-8 lg:pl-24 z-10 shrink-0 mb-8 lg:mb-0 flex justify-center lg:justify-start">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4rem] font-black text-white uppercase leading-[1.05] tracking-tighter text-center lg:text-left w-full lg:w-max max-w-[350px] drop-shadow-md">
                {t.products.title}
              </h2>
           </div>

           {/* Carrusel Animado a la derecha */}
           <div className="w-full lg:w-3/5 overflow-hidden relative z-10 pause-on-hover">
              <div className="flex gap-6 sm:gap-8 md:gap-12 w-max animate-scroll pl-4 sm:pl-8 lg:pl-0 pr-8 pb-8 pt-4">
                 
                 {displayProducts.map((item, i) => (
                    <div 
                      key={`carousel-${i}`} 
                      // Tamaño ligeramente más pequeño en celular (w-56)
                      className="w-56 h-56 md:w-[19rem] md:h-[19rem] rounded-full bg-white shadow-xl flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:scale-[1.03] shrink-0 group relative border border-transparent hover:border-teal-100"
                      onClick={() => setSelectedProduct(item)}
                    >
                       <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(12,179,137,0.3)]"></div>
                       
                       <img 
                         src={item.img} 
                         alt={item.title} 
                         // Imagen ajustada para móvil
                         className="max-h-20 sm:max-h-24 md:max-h-32 object-contain mb-3 sm:mb-4 md:mb-5 transition-transform duration-500 group-hover:scale-110 relative z-10" 
                       />
                       
                       <h3 className="text-center text-xs sm:text-sm md:text-base font-extrabold text-[#32453F] leading-tight px-2 sm:px-4 transition-transform duration-500 group-hover:scale-[1.15] relative z-10">
                         {item.title}
                       </h3>
                    </div>
                 ))}

              </div>
           </div>
        </div>
      </section>

      {/* 4. BOTÓN DESCARGAR CATÁLOGO Y BACK LINK */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 my-8 md:my-10 px-4">
        <a href="/catalog/Catálogo_codo.pdf" download className="flex items-center justify-center gap-2 sm:gap-3 bg-[#32453F] hover:bg-[#193833] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-transform hover:scale-105 uppercase tracking-widest text-xs sm:text-sm shadow-xl text-center w-full max-w-[300px] sm:max-w-none">
          <FaDownload className="text-base sm:text-lg shrink-0" /> {t.catalog.download}
        </a>
        <Link to="/services" className="flex items-center gap-2 text-[#526B63] font-bold hover:text-[#193833] transition-colors mt-2 sm:mt-4 text-sm sm:text-base">
          <FaArrowLeft /> {t.back}
        </Link>
      </div>

      {/* 5. MODAL EDITORIAL REDISEÑADO */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="fixed inset-0 bg-[#0d3d3c]/60 backdrop-blur-md flex justify-center items-center z-[9999] px-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              // Ajustes de padding para que el modal no se vea muy apretado en celular (p-6)
              className="bg-white rounded-[2rem] max-w-[90%] sm:max-w-md w-full p-6 sm:p-8 md:p-12 relative flex flex-col items-center shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-[#32453F] transition-colors text-xl sm:text-2xl outline-none" 
                onClick={() => setSelectedProduct(null)}
              >
                <FaTimes />
              </button>
              
              <img src={selectedProduct.img} alt={selectedProduct.title} className="h-32 sm:h-40 md:h-56 object-contain mb-6 md:mb-8 drop-shadow-lg" />
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#193833] mb-3 md:mb-4 text-center leading-tight">
                {selectedProduct.title}
              </h3>
              
              <p className="text-[#5E706B] font-light text-center leading-relaxed mb-6 md:mb-10 text-[13px] sm:text-sm md:text-base">
                {selectedProduct.desc}
              </p>
              
              <a 
                href="/contact" 
                className="bg-[#526B63] hover:bg-[#32453F] text-white font-bold py-2.5 sm:py-3 px-8 sm:px-10 rounded-full transition-transform hover:scale-105 shadow-md uppercase tracking-widest text-[11px] sm:text-xs md:text-sm"
              >
                {t.modal.quote}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* 6. FOOTER GLOBAL ACTUALIZADO              */}
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