// src/pages/PagesServices/ShoulderPage.jsx
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaDownload, FaTimes, FaTiktok, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// Importamos traducciones
import es from "../../locales/pageservices/shoulder/es";
import en from "../../locales/pageservices/shoulder/en";
import pt from "../../locales/pageservices/shoulder/pt";

// Imágenes
import cabeza_humeral from "../../assets/images/servicesshoulder/cabeza_humeral.png";
import vastago_humeral from "../../assets/images/servicesshoulder/vastago_humeral.png";
import glenoideo from "../../assets/images/servicesshoulder/glenoideo.png";
import vastago_humeral_reversa from "../../assets/images/servicesshoulder/vastago_humeral_reversa.png";
import bandeja_humeral from "../../assets/images/servicesshoulder/bandeja_humeral.png";
import inserto_humeral from "../../assets/images/servicesshoulder/inserto_humeral.png";
import glenosfera from "../../assets/images/servicesshoulder/glenosfera.png";
import tornillo_reversa from "../../assets/images/servicesshoulder/tornillo_reversa.png";
import conector_metaglena from "../../assets/images/servicesshoulder/conector_metaglena.png";
import set_colocacion from "../../assets/images/servicesshoulder/set_colocacion.png";

export default function ShoulderPage() {
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

  const sections = [
    {
      title: t.sections.anatomical.title,
      products: [
        { img: cabeza_humeral, title: t.sections.anatomical.products[0].title, desc: t.sections.anatomical.products[0].desc },
        { img: vastago_humeral, title: t.sections.anatomical.products[1].title, desc: t.sections.anatomical.products[1].desc },
        { img: glenoideo, title: t.sections.anatomical.products[2].title, desc: t.sections.anatomical.products[2].desc },
      ],
    },
    {
      title: t.sections.reverse.title,
      products: [
        { img: vastago_humeral_reversa, title: t.sections.reverse.products[0].title, desc: t.sections.reverse.products[0].desc },
        { img: bandeja_humeral, title: t.sections.reverse.products[1].title, desc: t.sections.reverse.products[1].desc },
        { img: inserto_humeral, title: t.sections.reverse.products[2].title, desc: t.sections.reverse.products[2].desc },
        { img: glenosfera, title: t.sections.reverse.products[3].title, desc: t.sections.reverse.products[3].desc },
        { img: tornillo_reversa, title: t.sections.reverse.products[4].title, desc: t.sections.reverse.products[4].desc },
        { img: conector_metaglena, title: t.sections.reverse.products[5].title, desc: t.sections.reverse.products[5].desc },
      ],
    },
    {
      title: t.sections.set.title,
      products: [
        { img: set_colocacion, title: t.sections.set.products[0].title, desc: t.sections.set.products[0].desc },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans relative box-border overflow-x-hidden pt-24">
      
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

      {/* 2. HERO (Nuevo Diseño Izquierdo) */}
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 box-border">
        <div className="w-full md:w-1/2 flex flex-col text-left">
           <span className="text-xl md:text-3xl text-gray-400 font-light tracking-wide mb-1 md:mb-2">Implantes de</span>
           <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-black text-[#193833] tracking-tighter leading-none uppercase">Hombro</h1>
        </div>
        <div className="w-full md:w-1/2 flex items-center md:pt-8 lg:pt-12">
           <p className="text-[#5E706B] text-base md:text-xl font-light leading-relaxed max-w-lg">
             {t.hero.subtitle}
           </p>
        </div>
      </div>

      {/* 3. SECCIONES (Lógica Condicional de Carrusel) */}
      <section className="w-full flex flex-col gap-16 pb-16 pt-8">
        {sections.map((section, idx) => {
          
          const isCarousel = section.products.length > 1;
          const displayProducts = isCarousel 
            ? [...section.products, ...section.products, ...section.products, ...section.products] 
            : section.products;

          return (
            <div 
              key={idx} 
              className="w-full relative overflow-hidden flex flex-col lg:flex-row items-center py-16 md:py-24"
              style={{ background: 'linear-gradient(90deg, #517A71 0%, #85A79C 45%, rgba(255,255,255,0) 100%)' }}
            >
               
               {/* Título de la sección */}
               <div className="w-full lg:w-2/5 px-8 md:pl-16 lg:pl-24 z-10 shrink-0 mb-12 lg:mb-0">
                  <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-black text-white uppercase leading-[1.05] tracking-tighter w-max max-w-[350px] drop-shadow-md">
                    {section.title}
                  </h2>
               </div>

               {/* Contenedor de Productos */}
               {isCarousel ? (
                 <div className="w-full lg:w-3/5 overflow-hidden relative z-10 pause-on-hover">
                    <div className="flex gap-8 md:gap-12 w-max animate-scroll pl-4 md:pl-8 lg:pl-0 pr-8 pb-8 pt-4">
                       {displayProducts.map((item, i) => (
                          <div 
                            key={`carousel-${idx}-${i}`} 
                            className="w-64 h-64 md:w-[19rem] md:h-[19rem] rounded-full bg-white shadow-xl flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-500 hover:scale-[1.03] shrink-0 group relative border border-transparent hover:border-teal-100"
                            onClick={() => setSelectedProduct(item)}
                          >
                             <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(12,179,137,0.3)]"></div>
                             <img 
                               src={item.img} 
                               alt={item.title} 
                               className="max-h-24 md:max-h-32 object-contain mb-4 md:mb-5 transition-transform duration-500 group-hover:scale-110 relative z-10" 
                             />
                             <h3 className="text-center text-sm md:text-base font-extrabold text-[#32453F] leading-tight px-4 transition-transform duration-500 group-hover:scale-[1.15] relative z-10">
                               {item.title}
                             </h3>
                          </div>
                       ))}
                    </div>
                 </div>
               ) : (
                 <div className="w-full lg:w-3/5 relative z-10 flex justify-center lg:justify-start lg:pl-12 pb-8 pt-4">
                    {displayProducts.map((item, i) => (
                       <div 
                         key={`static-${idx}-${i}`} 
                         className="w-64 h-64 md:w-[19rem] md:h-[19rem] rounded-full bg-white shadow-xl flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-500 hover:scale-[1.03] shrink-0 group relative border border-transparent hover:border-teal-100"
                         onClick={() => setSelectedProduct(item)}
                       >
                          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(12,179,137,0.3)]"></div>
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="max-h-24 md:max-h-32 object-contain mb-4 md:mb-5 transition-transform duration-500 group-hover:scale-110 relative z-10" 
                          />
                          <h3 className="text-center text-sm md:text-base font-extrabold text-[#32453F] leading-tight px-4 transition-transform duration-500 group-hover:scale-[1.15] relative z-10">
                            {item.title}
                          </h3>
                       </div>
                    ))}
                 </div>
               )}

            </div>
          );
        })}
      </section>

      {/* 4. BOTÓN DESCARGAR CATÁLOGO Y BACK LINK */}
      <div className="flex flex-col items-center justify-center gap-6 my-10">
        <a href="/catalog/.pdf" download className="flex items-center gap-3 bg-[#32453F] hover:bg-[#193833] text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 uppercase tracking-widest text-sm shadow-xl">
          <FaDownload className="text-lg" /> {t.catalog}
        </a>
        <Link to="/services" className="flex items-center gap-2 text-[#526B63] font-bold hover:text-[#193833] transition-colors mt-4">
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
              className="bg-white rounded-[2rem] max-w-md w-full p-10 md:p-12 relative flex flex-col items-center shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-gray-400 hover:text-[#32453F] transition-colors text-2xl outline-none" 
                onClick={() => setSelectedProduct(null)}
              >
                <FaTimes />
              </button>
              
              <img src={selectedProduct.img} alt={selectedProduct.title} className="h-48 md:h-56 object-contain mb-8 drop-shadow-lg" />
              
              <h3 className="text-2xl md:text-3xl font-black text-[#193833] mb-4 text-center leading-tight">
                {selectedProduct.title}
              </h3>
              
              <p className="text-[#5E706B] font-light text-center leading-relaxed mb-10 text-sm md:text-base">
                {selectedProduct.desc}
              </p>
              
              <Link 
                to="/contact" 
                className="bg-[#526B63] hover:bg-[#32453F] text-white font-bold py-3 px-10 rounded-full transition-transform hover:scale-105 shadow-md uppercase tracking-widest text-xs md:text-sm"
              >
                {t.quote}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* 6. FOOTER GLOBAL ACTUALIZADO              */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-16 px-6 md:px-12 mt-auto box-border block">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Acerca de nosotros */}
          <div>
            <h3 className="font-bold text-lg mb-6">Acerca de nosotros</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Conócenos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Columna 2: Información de Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-6">Información de Contacto</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>(+52) 56 4616 0018</p>
              <p>info@ommagr.com</p>
            </div>
          </div>

          {/* Columna 3: Catálogo de Productos */}
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