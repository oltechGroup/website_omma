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
// Si tienes la ruta de locales distinta, ajusta esto, pero por seguridad dejo el respaldo integrado abajo
import translations from "../locales"; 

export default function AboutPage() {
  const { language, changeLanguage } = useLanguage();
  
  // Respaldo de seguridad con los textos exactos que me proporcionaste
  const t = translations[language]?.about || {
    nav: { home: "Inicio", about: "Nosotros", services: "Servicios", contact: "Contáctanos" },
    hero: { title: "Calidad global,", subtitle: "confianza local", text: "Innovación ortopédica sin fronteras." },
    mission: { title: "Misión", text: "Desarrollar, fabricar y distribuir implantes y soluciones ortopédicas de última generación, combinando eficiencia productiva global con excelencia en innovación, trazabilidad y servicio clínico especializado." },
    vision: { title: "Visión", text: "Ser reconocidos en los próximos 10 años como la marca líder en implantes ortopédicos de Latinoamérica y un referente global en innovación y accesibilidad, consolidando presencia en México, EE. UU., Europa y Asia." },
    values: {
      title: "Nuestros Valores",
      items: {
        innovation: "Innovación constante",
        excellence: "Excelencia clínica",
        trust: "Confianza y ética",
        accessibility: "Accesibilidad",
        sustainability: "Sustentabilidad",
        service: "Servicio humano",
      },
    },
    positioning: "Somos la opción que combina ingeniería de clase mundial, costos eficientes y servicio local confiable, ofreciendo a los médicos y hospitales la seguridad de un aliado estratégico que entiende sus retos clínicos y financieros.",
    profile: {
      title: "Perfil Empresarial",
      text: "OMMA MÉXICO GR, S.A. DE C.V., es una empresa que brinda servicios integrales y soluciones con inteligencia tecnológica y talento humano.",
      subtitle: "Objeto Social",
      objetive: "Prestación de servicios profesionales, administración, operación, construcción, equipamiento, mejora y acondicionamiento de locales y construcciones.",
    },
    experience: {
      title: "Experiencia",
      items: [
        "En el sector salud, Conocimiento del mercado hospitalario (público y privado), incluyendo procesos de licitación y compras gubernamentales (por ejemplo, IMSS, ISSSTE, Secretaría de Salud, hospitales estatales).",
        "Personal con conocimiento Técnico especializado en soluciones ortopédicas y equipamiento médico.",
        "Cumplimiento normativo y sanitario con los más altos estándares de calidad y seguridad.",
        "Políticas de trazabilidad, almacenamiento y transporte de material estéril y sensible garantizando la integridad del producto.",
        "Participación activa en congresos, talleres y ferias médicas para mantenernos a la vanguardia.",
        "Certificaciones o alianzas con marcas internacionales reconocidas en el sector médico.",
        "Capacidad de suministro y respuesta inmediata ante urgencias quirúrgicas las 24 horas."
      ],
    },
    clients: {
      title: "Nuestros Clientes",
      address: "Dirección",
      phone: "Tel",
      visit: "Visitar sitio web",
      list: [
        { name: "Hospital Infantil de México \"Federico Gómez\"", address: "Calle Dr. Márquez 162, Doctores, Cuauhtémoc, 06720 CDMX", phone: "+52 55 5228 9917", image: "/images/hospital_infantil.jpg", link: "http://himfg.com.mx/" },
        { name: "ISSSTE Hospital Regional \"Gral. Ignacio Zaragoza\"", address: "Calz. Ignacio Zaragoza 1711, Iztapalapa, 09220 CDMX", phone: "+52 55 5716 5200", image: "/images/issste_zaragoza.jpg", link: "http://www.issste.gob.mx/" },
        { name: "Hospital General de Querétaro", address: "Av. 5 de Febrero 101, Los Virreyes, 76175 Santiago de Querétaro, Qro.", phone: "+52 442 101 2900", image: "/images/hospital_queretaro.jpg" },
        { name: "Grupo Farma FR S.A. de C.V.", address: "Libramiento Sur Poniente, Km 13, No. 261, Los Ángeles, 76902, Qro.", phone: "+52 442 225 3435", image: "/images/grupo_farmafr.jpg", link: "https://grupofarmafr.com/" },
      ],
    },
    footer: {
      aboutTitle: "Acerca de nosotros",
      aboutText: "Somos un grupo dedicado a ofrecer un servicio excepcional con soluciones de calidad y confianza.",
      linksTitle: "Acerca de",
      contactTitle: "Información de Contacto",
      phone: "Tel: +52 1 56 4616 0018",
      email: "Email: info@ommagr.com",
    },
  };

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

      {/* 4. CLIENTES (Layout Zig-Zag Alternado) */}
      <section className="max-w-5xl mx-auto w-full px-6 mb-32 box-border">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#32453F] text-center mb-16 md:mb-24">{t.clients.title}</h2>
        
        <div className="flex flex-col gap-16 md:gap-24">
          {t.clients.list.map((client, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Imagen del Cliente */}
              <div className="w-full md:w-1/2">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="w-full h-56 md:h-72 object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)]" 
                />
              </div>
              
              {/* Información del Cliente */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#32453F] mb-4 leading-snug">{client.name}</h3>
                <p className="text-[#5E706B] font-light text-sm md:text-base mb-2">
                  <strong className="font-semibold text-[#465A54]">{t.clients.address}:</strong> {client.address}
                </p>
                <p className="text-[#5E706B] font-light text-sm md:text-base mb-6">
                  <strong className="font-semibold text-[#465A54]">{t.clients.phone}:</strong> {client.phone}
                </p>
                
                {client.link && (
                  <a 
                    href={client.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-teal-600 font-semibold text-sm hover:text-teal-800 transition-colors w-max uppercase tracking-wider"
                  >
                    {t.clients.visit} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. FOOTER GLOBAL ACTUALIZADO              */}
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