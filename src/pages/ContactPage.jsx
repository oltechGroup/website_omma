// src/pages/ContactPage.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

// Importaciones directas y exclusivas para la sección "Contacto"
import es from "../locales/contact/es";
import en from "../locales/contact/en";
import pt from "../locales/contact/pt";

export default function ContactPage() {
  const { language, changeLanguage } = useLanguage();
  
  // Asignación dinámica del diccionario según el idioma seleccionado
  const t = { es, en, pt }[language];

  const form = useRef();
  const [status, setStatus] = useState("");

  // ==========================================
  // LÓGICA DEL NAVBAR PREMIUM (Glassmorphism)
  // ==========================================
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // En esta página, el navbar se fija casi de inmediato al bajar
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
  const textColorClass = "text-gray-800"; // Siempre oscuro porque el fondo de la página es blanco
  const hoverTextClass = "hover:text-[#356658]";
  const dividerColorClass = "border-gray-300";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7b901no", "template_l0otpof", form.current, "z5uJM9St_tSg6k3ul")
      .then(
        () => {
          setStatus(t.successMessage);
          form.current.reset();
        },
        (error) => {
          setStatus(t.errorMessage + error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans relative box-border pt-24">
      
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
              className="h-8 md:h-10 object-contain filter invert opacity-90" // Invertido para que se vea oscuro sobre blanco
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

      {/* ========================================= */}
      {/* 2. ENCABEZADO "CONECTANDO CONTIGO"        */}
      {/* ========================================= */}
      <header className="text-center px-4 pt-10 mb-8 select-none">
        <h1 className="!text-5xl md:!text-6xl lg:!text-7xl !font-extrabold !text-[#32453F] mb-2 tracking-tighter block">
          {t.hero.title} <span className="text-[#3B7469]">{t.hero.highlight}</span>
        </h1>
        <p className="!text-sm md:!text-base lg:!text-xl !text-[#7C8B87] !font-light tracking-normal max-w-2xl mx-auto block">
          {t.hero.subtitle}
        </p>
      </header>

      {/* ========================================= */}
      {/* 3. DISPOSITIVOS MOCKUPS INTERACTIVOS      */}
      {/* ========================================= */}
      <section className="relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center mb-16 box-border z-10">
        
        {/* REDES SOCIALES LATERALES FLOTANTES (Desktop) */}
        <div className="hidden lg:flex flex-col absolute left-2 top-1/2 -translate-y-1/2 gap-3 text-xs font-bold uppercase tracking-widest text-[#93A39F] z-30">
          <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-colors inline-block w-auto text-left py-1 px-2">Facebook</a>
          <a href="https://wa.me/525646160018" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors inline-block w-auto text-left py-1 px-2">WhatsApp</a>
          <a href="https://www.tiktok.com/@ommagroup" target="_blank" rel="noreferrer" className="hover:text-black transition-colors inline-block w-auto text-left py-1 px-2">TikTok</a>
          <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="hover:text-[#DD2A7B] transition-colors inline-block w-auto text-left py-1 px-2">Instagram</a>
        </div>

        {/* --- MOCKUP DESKTOP: LAPTOP --- */}
        <div className="relative w-full max-w-4xl hidden md:block select-none box-border">
          <img 
            src="/images/laptop_frame.png" 
            alt="Laptop View" 
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]" 
          />
          
          <div className="absolute top-[8.2%] left-[11.8%] w-[76.4%] h-[75.6%] bg-white flex p-4 shadow-inner box-border rounded-sm">
            
            {/* LADO IZQUIERDO: Tarjeta Gris del Formulario */}
            <div className="w-[48%] h-full flex items-center justify-center pr-3 box-border">
              <div className="w-full h-full bg-[#EAEFEB] border border-gray-200 rounded-lg p-5 flex flex-col items-center justify-between box-border shadow-sm">
                
                <img 
                  src="/images/omma_logo_hero.png" 
                  alt="OMMA" 
                  className="h-8 object-contain filter invert opacity-80" 
                />
                
                <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-3 box-border mt-2">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder={t.form.namePlaceholder} 
                    required 
                    className="w-full bg-white border border-gray-300 p-2.5 text-xs text-gray-700 font-normal placeholder-gray-400 focus:outline-none focus:border-[#356658] transition-colors rounded box-border shadow-sm" 
                  />
                  <input 
                    type="text" 
                    name="email" 
                    placeholder={t.form.emailPlaceholder} 
                    required 
                    className="w-full bg-white border border-gray-300 p-2.5 text-xs text-gray-700 font-normal placeholder-gray-400 focus:outline-none focus:border-[#356658] transition-colors rounded box-border shadow-sm" 
                  />
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder={t.form.subjectPlaceholder} 
                    className="w-full bg-white border border-gray-300 p-2.5 text-xs text-gray-700 font-normal placeholder-gray-400 focus:outline-none focus:border-[#356658] transition-colors rounded box-border shadow-sm" 
                  />
                  <textarea 
                    name="message" 
                    placeholder={t.form.messagePlaceholder} 
                    rows="3" 
                    required 
                    className="w-full bg-white border border-gray-300 p-2.5 text-xs text-gray-700 font-normal placeholder-gray-400 focus:outline-none focus:border-[#356658] transition-colors resize-none rounded box-border shadow-sm"
                  ></textarea>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#32453F] text-white font-bold text-xs py-3 uppercase tracking-widest rounded shadow-md hover:bg-[#202E29] transition-colors mt-2"
                  >
                    {t.form.button}
                  </button>
                </form>
                
                {status ? (
                  <p className="text-[10px] font-medium text-center text-emerald-600 m-0 mt-2">{status}</p>
                ) : (
                  <div className="h-4"></div>
                )}
              </div>
            </div>

            {/* LADO DERECHO: Mapa de Google */}
            <div className="w-[52%] h-full pl-2 box-border">
              <iframe
                title="Mapa ubicación"
                src="https://maps.google.com/maps?q=Av.%20Homero%20527,%20Polanco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border border-gray-200 rounded-lg shadow-sm"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* --- MOCKUP RESPONSIVO: SMARTPHONE --- */}
        <div className="relative w-full max-w-[320px] md:hidden select-none mt-4 mb-8 box-border mx-auto flex flex-col items-center">
          <div className="relative w-[400px] h-[570px] flex justify-center">
            {/* TRUCO: La imagen del celular va POR ENCIMA */}
            <img 
              src="/images/phone_frame.png" 
              alt="Phone View" 
              className="absolute inset-0 w-full h-full object-fill z-20 pointer-events-none drop-shadow-xl" 
            />
            
            {/* Contenido de la pantalla */}
            <div className="absolute top-[6%] left-[20.5%] w-[60%] h-[94%] bg-white rounded-[2.5rem] overflow-y-auto flex flex-col p-3 shadow-inner z-10 box-border no-scrollbar pt-8">
              
              <div className="bg-[#EAEFEB] border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 box-border w-full mb-4">
                <img 
                  src="/images/omma_logo_hero.png" 
                  alt="OMMA" 
                  className="h-6 object-contain filter invert opacity-80 mb-2" 
                />
                
                <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-2.5 box-border">
                  <input type="text" name="name" placeholder={t.form.namePlaceholder} required className="w-full bg-white border border-gray-300 shadow-sm p-2.5 text-[11px] font-normal rounded text-gray-700 box-border focus:outline-none" />
                  <input type="text" name="email" placeholder={t.form.emailPlaceholder} required className="w-full bg-white border border-gray-300 shadow-sm p-2.5 text-[11px] font-normal rounded text-gray-700 box-border focus:outline-none" />
                  <textarea name="message" placeholder={t.form.messagePlaceholder} rows="2" required className="w-full bg-white border border-gray-300 shadow-sm p-2.5 text-[11px] font-normal rounded text-gray-700 resize-none box-border focus:outline-none"></textarea>
                  <button type="submit" className="w-full bg-[#32453F] text-white font-bold text-[11px] py-2.5 uppercase tracking-wider rounded shadow-md mt-1 box-border">
                    {t.form.button}
                  </button>
                </form>
                {status && <p className="text-[10px] text-center font-medium text-emerald-600 m-0">{status}</p>}
              </div>

              {/* Mapa Ajustado a la Vista Móvil */}
              <div className="w-full h-40 flex-shrink-0 box-border pb-4">
                <iframe 
                  title="Mapa móvil" 
                  src="https://maps.google.com/maps?q=Av.%20Homero%20527,%20Polanco&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border border-gray-300 rounded-xl shadow-sm" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* BOTONES SOCIALES MÓVIL */}
          <div className="flex justify-center gap-6 mt-8 z-30">
            <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="text-[#1877F2] text-2xl hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="text-[#DD2A7B] text-2xl hover:scale-110 transition-transform"><FaInstagram /></a>
            <a href="https://wa.me/525646160018" target="_blank" rel="noreferrer" className="text-[#25D366] text-2xl hover:scale-110 transition-transform"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@ommagroup" target="_blank" rel="noreferrer" className="text-black text-2xl hover:scale-110 transition-transform"><FaTiktok /></a>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. DIRECCIÓN Y TEXTO DE CONTACTO INFERIOR */}
      {/* ========================================= */}
      <div className="text-center text-gray-400 font-light text-sm md:text-base px-6 max-w-3xl mx-auto mb-16 leading-relaxed block select-all">
        <p className="mb-1 text-[#7C8B87] font-normal">{t.info.address}</p>
        <p className="tracking-wide font-bold text-[#32453F]">{t.info.phone}</p>
      </div>

      {/* ========================================= */}
      {/* 5. FOOTER GLOBAL ACTUALIZADO              */}
      {/* ========================================= */}
      <footer className="w-full bg-[#203C46] text-white py-16 px-6 md:px-12 mt-auto box-border block">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.aboutTitle}</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-300 font-light p-0 m-0 list-none">
              <li><Link to="/" className="hover:text-white transition-colors">{t.footer.navigation.home}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.footer.navigation.about}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.footer.navigation.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.contactTitle}</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>

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
          <p>© {new Date().getFullYear()} OMMA Group LLC. {t.footer.rights}</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61578851184996" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaFacebook /></a>
            <a href="https://www.instagram.com/ommagroup/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}