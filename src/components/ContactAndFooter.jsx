// src/components/ContactAndFooter.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "/src/locales";
// Importamos iconos si se necesitan para redes sociales
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ContactAndFooter = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* ========================================= */}
      {/* SECCIÓN DE CONTACTO                       */}
      {/* ========================================= */}
      <section 
        className="relative w-full min-h-[500px] md:min-h-[700px] flex items-center justify-center bg-cover bg-center py-16 md:py-20 px-4 md:px-8"
        // Fondo con la imagen de los médicos
        style={{ backgroundImage: "url('/images/contacto_bg.jpg')" }} 
      >
        {/* Capa de oscurecimiento opcional */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* MODIFICACIÓN 1: Cuadro del Formulario (Ahora usa imagen de fondo)
          - Más grande (max-w-5xl)
          - Fondo basado en rectangulo_azul.jpg
          - Bordes sutiles y sombra 
        */}
        <div 
          className="relative z-10 w-full max-w-7xl bg-cover bg-center rounded-[2rem] md:rounded-sm px-6 py-12 md:py-20 md:px-24 flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          style={{ backgroundImage: "url('/images/rectangulo_azul.png')" }}
        >
          
          {/* Logo centrado arriba */}
          <img 
            src="/images/omma_logo_hero.png" 
            alt="OMMA Group LLC" 
            className="h-12 md:h-16 lg:h-20 mb-6 md:mb-8 object-contain"
          />

          {/* Título más grande y espaciado */}
          {/* Ajustado tamaño en móvil para que no se desborde */}
          <h2 className="text-4xl sm:text-5xl md:text-[5.5rem] font-medium text-white mb-10 md:mb-16 tracking-wide text-center">
            {t.contactForm.title}
          </h2>

          {/* Formulario (Inputs más anchos y líneas limpias) */}
          <form className="w-full max-w-3xl flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Correo / Teléfono */}
            <input 
              type="text" 
              placeholder={t.contactForm.placeholderContact} 
              className="w-full bg-transparent border-b-2 border-white/80 text-center text-white placeholder-white/90 text-lg md:text-xl py-2 md:py-3 mb-8 md:mb-12 focus:outline-none focus:border-teal-300 focus:placeholder-transparent transition-all"
            />

            {/* Input Mensaje */}
            <input 
              type="text" 
              placeholder={t.contactForm.placeholderMessage} 
              className="w-full bg-transparent border-b-2 border-white/80 text-center text-white placeholder-white/90 text-lg md:text-xl py-2 md:py-3 mb-12 md:mb-16 focus:outline-none focus:border-teal-300 focus:placeholder-transparent transition-all"
            />

            {/* Botón Enviar (Diseño idéntico a la imagen) */}
            {/* Ancho completo en móvil para mejor área táctil */}
            <button 
              type="submit"
              className="w-full md:w-auto bg-white text-[#38858A] font-bold text-sm uppercase tracking-widest py-3.5 px-10 md:px-20 rounded-full md:rounded-none hover:bg-gray-100 transition-colors shadow-md"
            >
              {t.contactForm.buttonSubmit}
            </button>
          </form>
        </div>
      </section>

      {/* ========================================= */}
      {/* FOOTER                                    */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-12 md:py-16 px-6 md:px-12">
        {/* En móvil se centra el texto, en pc se mantiene alineado a la izquierda */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          
          {/* Columna 1: Acerca de nosotros (NUEVOS ENLACES) */}
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">{t.footerhome.about}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light items-center md:items-start">
              <li><Link to="/" className="hover:text-white transition-colors">{t.footerhome.start}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.footerhome.knowUs}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.navbar.contact}</Link></li>
            </ul>
          </div>

          {/* Columna 2: Información de Contacto (SE QUEDA IGUAL) */}
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">{t.footerhome.info}</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>{t.footerhome.phone}</p>
              <p>{t.footerhome.email}</p>
            </div>
          </div>

          {/* Columna 3: Catálogo de Productos (ENLACES A RUTAS DEFINIDAS EN APP.JSX) */}
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">{t.footerhome.catalogTitle}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light items-center md:items-start">
              <li><Link to="/sports-medicine" className="hover:text-white transition-colors">{t.footerhome.catalogItems.sportsMedicine}</Link></li>
              <li><Link to="/shoulder" className="hover:text-white transition-colors">{t.footerhome.catalogItems.shoulder}</Link></li>
              <li><Link to="/knee" className="hover:text-white transition-colors">{t.footerhome.catalogItems.knee}</Link></li>
              <li><Link to="/elbow" className="hover:text-white transition-colors">{t.footerhome.catalogItems.elbow}</Link></li>
              <li><Link to="/hip" className="hover:text-white transition-colors">{t.footerhome.catalogItems.hip}</Link></li>
            </ul>
          </div>

        </div>

        {/* Redes Sociales al fondo */}
        {/* Ajustado flex-col para móvil, flex-row para escritorio */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between opacity-70 text-sm gap-4 md:gap-0">
          <p className="text-center md:text-left">© {new Date().getFullYear()} OMMA Group LLC. {t.footerhome.rights}</p>
          <div className="flex items-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="text-xl hover:text-white transition-colors">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="text-xl hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;