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
        className="relative w-full min-h-[700px] flex items-center justify-center bg-cover bg-center py-20 px-4 md:px-8"
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
          className="relative z-10 w-full max-w-7xl bg-cover bg-center rounded-sm px-6 py-20 md:px-24 flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          style={{ backgroundImage: "url('/images/rectangulo_azul.png')" }}
        >
          
          {/* Logo centrado arriba */}
          <img 
            src="/images/omma_logo_hero.png" 
            alt="OMMA Group LLC" 
            className="h-16 md:h-20 mb-8 object-contain"
          />

          {/* Título más grande y espaciado */}
          <h2 className="text-6xl md:text-[5.5rem] font-medium text-white mb-16 tracking-wide">
            Contáctanos
          </h2>

          {/* Formulario (Inputs más anchos y líneas limpias) */}
          <form className="w-full max-w-3xl flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Correo / Teléfono */}
            <input 
              type="text" 
              placeholder="Correo Electrónico o Teléfono" 
              className="w-full bg-transparent border-b-2 border-white/80 text-center text-white placeholder-white text-xl py-3 mb-12 focus:outline-none focus:border-teal-300 focus:placeholder-transparent transition-all"
            />

            {/* Input Mensaje */}
            <input 
              type="text" 
              placeholder="Mensaje" 
              className="w-full bg-transparent border-b-2 border-white/80 text-center text-white placeholder-white text-xl py-3 mb-16 focus:outline-none focus:border-teal-300 focus:placeholder-transparent transition-all"
            />

            {/* Botón Enviar (Diseño idéntico a la imagen) */}
            <button 
              type="submit"
              className="bg-white text-[#38858A] font-bold text-sm uppercase tracking-widest py-3.5 px-20 hover:bg-gray-100 transition-colors shadow-md"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* ========================================= */}
      {/* FOOTER                                    */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Acerca de nosotros (NUEVOS ENLACES) */}
          <div>
            <h3 className="font-bold text-lg mb-6">Acerca de nosotros</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Conócenos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Columna 2: Información de Contacto (SE QUEDA IGUAL) */}
          <div>
            <h3 className="font-bold text-lg mb-6">Información de Contacto</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>(+52) 56 4616 0018</p>
              <p>info@ommagr.com</p>
            </div>
          </div>

          {/* Columna 3: Catálogo de Productos (ENLACES A RUTAS DEFINIDAS EN APP.JSX) */}
          <div>
            <h3 className="font-bold text-lg mb-6">Catálogo de Productos</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <li><Link to="/sports-medicine" className="hover:text-white transition-colors">Medicina Deportiva</Link></li>
              <li><Link to="/shoulder" className="hover:text-white transition-colors">Hombro</Link></li>
              <li><Link to="/knee" className="hover:text-white transition-colors">Rodilla</Link></li>
              <li><Link to="/elbow" className="hover:text-white transition-colors">Codo</Link></li>
              <li><Link to="/hip" className="hover:text-white transition-colors">Cadera</Link></li>
            </ul>
          </div>

        </div>

        {/* Redes Sociales al fondo (Reemplazado por íconos de react-icons para mejor compatibilidad) */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between opacity-70 text-sm">
          <p>© {new Date().getFullYear()} OMMA Group LLC. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
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