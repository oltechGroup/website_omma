// src/components/CorporateAndSocial.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "/src/locales";
import { FaFacebook, FaInstagram, FaWhatsapp, FaStar, FaRegHeart, FaShareAlt } from "react-icons/fa";

const CorporateAndSocial = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // ==========================================
  // DATA VISUAL PARA EL CARRUSEL
  // Extraemos solo los colores, el texto vendrá del archivo de idiomas.
  // ==========================================
  const reviewColors = [
    "bg-blue-100 text-blue-500",
    "bg-emerald-100 text-emerald-500",
    "bg-purple-100 text-purple-500",
    "bg-rose-100 text-rose-500",
    "bg-amber-100 text-amber-500",
    "bg-cyan-100 text-cyan-500"
  ];

  // Combinamos la data traducida con los estilos visuales
  const translatedReviews = (t.corporate.reviewsList || []).map((review, index) => ({
    ...review,
    initial: review.name.charAt(0),
    color: reviewColors[index % reviewColors.length]
  }));

  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-20 px-4 flex flex-col items-center overflow-hidden">
      
      {/* Estilos para el carrusel infinito de reseñas */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl w-full flex flex-col gap-12 md:gap-16">
        
        {/* ========================================= */}
        {/* SECCIÓN 1: Valores Corporativos           */}
        {/* ========================================= */}
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A4A4A] mb-8 md:mb-12 text-center md:text-left">
            {t.corporate.title}
          </h2>
          
          <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
            {t.corporate.values.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Cuadrito Azul como imagen */}
                <img 
                  src="/images/cuadrito_azul.png" 
                  alt="Icono OMMA" 
                  className="w-5 md:w-6 h-5 md:h-6 mt-1 flex-shrink-0 object-contain drop-shadow-sm" 
                />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#4A4A4A] mb-1">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* SECCIÓN 2: Instagram Embed y Tarjeta Social*/}
        {/* ========================================= */}
        {/* Ya usabas grid-cols-1 md:grid-cols-2, lo cual es perfecto para responsividad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          
          {/* Tarjeta de Instagram Incrustado */}
          {/* Ajuste de altura en móvil (450px) para no ocupar toda la pantalla */}
          <div className="bg-white rounded-[2rem] md:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3 md:p-4 overflow-hidden flex justify-center h-[450px] md:h-[600px] border border-gray-100">
            <iframe 
              src="https://www.instagram.com/p/DWzgJ64EdNZ/embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              allowtransparency="true"
              className="rounded-xl md:rounded-2xl"
              title="Publicación de Instagram OMMA Group"
            ></iframe>
          </div>

          {/* Tarjeta "Síguenos" */}
          {/* Ajuste de altura, paddings y tamaños de fuente para móvil */}
          <div className="bg-[#245466] rounded-[2rem] md:rounded-3xl shadow-[0_15px_40px_rgba(16,42,34,0.3)] p-8 md:p-14 flex flex-col justify-center h-[450px] md:h-[600px] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <h4 className="text-teal-400 font-bold text-xs md:text-sm mb-3 md:mb-4 tracking-wide uppercase"></h4>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 md:mb-8 whitespace-pre-line">
              {t.corporate.socialTitle}
            </h2>
            <p className="text-gray-300 font-light text-sm md:text-xl leading-relaxed mb-8 md:mb-12 max-w-md">
              {t.corporate.socialDescription}
            </p>
            
            {/* Botones de Redes Sociales: Ligeramente más pequeños en móvil */}
            <div className="flex gap-4 md:gap-6 relative z-10">
              <a 
                href="https://www.facebook.com/profile.php?id=61578851184996" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="Facebook OMMA Group"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/ommagroup/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="Instagram OMMA Group"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/525646160018" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="WhatsApp OMMA Group"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================= */}
        {/* SECCIÓN 3: Carrusel de Reseñas de Google  */}
        {/* ========================================= */}
        <div className="w-full mt-6 md:mt-10">
          <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-4 md:mb-6 pl-2 text-center md:text-left">{t.corporate.reviewsTitle}</h3>
          
          <div className="w-full overflow-hidden marquee-container relative py-4">
            
            {/* Difuminado: Reducido en móvil para no tapar tanto texto */}
            <div className="absolute top-0 left-0 w-12 md:w-20 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-12 md:w-20 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee gap-4 md:gap-6 pl-4 md:pl-6">
              {[...translatedReviews, ...translatedReviews].map((review, index) => (
                <div 
                  key={index} 
                  /* Ajuste de ancho de tarjeta: 280px para móviles pequeños, 350px tablets, 400px PC */
                  className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-5 md:p-6 w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 border border-gray-50 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl ${review.color}`}>
                      {review.initial}
                    </div>
                    <div>
                      {/* Ajuste de truncado de nombre en móvil */}
                      <h4 className="font-bold text-gray-800 text-sm truncate w-36 sm:w-48">{review.name}</h4>
                      <p className="text-[10px] md:text-xs text-gray-400">{review.details}</p>
                    </div>
                  </div>
                  <div className="flex text-[#FABB05] text-xs md:text-sm mb-1 gap-0.5">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-400 mb-2 md:mb-3">{review.time}</p>
                  <p className="text-xs md:text-sm text-gray-600 font-light mb-4 md:mb-6 line-clamp-3">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 mt-auto">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors"><FaRegHeart /> <span className="text-[10px] md:text-xs">{(index % 5) + 1}</span></button>
                    <button className="hover:text-blue-500 transition-colors"><FaShareAlt /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorporateAndSocial;