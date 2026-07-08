// src/components/ExperienceAndOffer.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "/src/locales";

// ==========================================
// GENERADOR MATEMÁTICO DE ONDAS (SVG)
// Crea coordenadas polares para dibujar ondas precisas.
// ==========================================
const generarPathCurvado = (radioBase, amplitud, picos) => {
  let d = "";
  for (let i = 0; i <= 360; i += 2) {
    const angulo = (i * Math.PI) / 180;
    const r = radioBase + amplitud * Math.sin(picos * angulo);
    const x = 500 + r * Math.cos(angulo);
    const y = 500 + r * Math.sin(angulo);
    
    if (i === 0) d += `M ${x} ${y} `;
    else d += `L ${x} ${y} `;
  }
  return d + "Z";
};

const ExperienceAndOffer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Generamos 20 líneas concéntricas
  const lineasSVG = Array.from({ length: 20 }).map((_, index) => {
    const progreso = index / 19;
    const radioBase = 460 - (progreso * 280);
    const amplitud = progreso * 60; 
    const picos = 5;
    
    return generarPathCurvado(radioBase, amplitud, picos);
  });

  return (
    <section className="w-full bg-white pb-16 md:pb-24 px-4 flex flex-col items-center overflow-hidden">
      
      {/* ========================================= */}
      {/* ESTILOS ANIMADOS (Órbitas y Rotación de Ondas) */}
      {/* ========================================= */}
      <style>{`
        @keyframes spin-wave {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .wave-path {
          transform-origin: 500px 500px;
          animation: spin-wave 25s linear infinite;
        }

        /* TAMAÑO MÓVIL (Pantallas muy pequeñas < 640px) */
        @keyframes orbit-1 {
          from { transform: rotate(0deg) translateX(6rem) rotate(0deg); }
          to { transform: rotate(360deg) translateX(6rem) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          from { transform: rotate(120deg) translateX(6rem) rotate(-120deg); }
          to { transform: rotate(480deg) translateX(6rem) rotate(-480deg); }
        }
        @keyframes orbit-3 {
          from { transform: rotate(240deg) translateX(6rem) rotate(-240deg); }
          to { transform: rotate(600deg) translateX(6rem) rotate(-600deg); }
        }

        /* TAMAÑO TABLET PEQUEÑA (sm: >= 640px) */
        @media (min-width: 640px) {
          @keyframes orbit-1 {
            from { transform: rotate(0deg) translateX(9rem) rotate(0deg); }
            to { transform: rotate(360deg) translateX(9rem) rotate(-360deg); }
          }
          @keyframes orbit-2 {
            from { transform: rotate(120deg) translateX(9rem) rotate(-120deg); }
            to { transform: rotate(480deg) translateX(9rem) rotate(-480deg); }
          }
          @keyframes orbit-3 {
            from { transform: rotate(240deg) translateX(9rem) rotate(-240deg); }
            to { transform: rotate(600deg) translateX(9rem) rotate(-600deg); }
          }
        }

        /* TAMAÑO ESCRITORIO (md: >= 768px) - SE MANTIENE EL ORIGINAL INTACTO */
        @media (min-width: 768px) {
          @keyframes orbit-1 {
            from { transform: rotate(0deg) translateX(19rem) rotate(0deg); }
            to { transform: rotate(360deg) translateX(19rem) rotate(-360deg); }
          }
          @keyframes orbit-2 {
            from { transform: rotate(120deg) translateX(19rem) rotate(-120deg); }
            to { transform: rotate(480deg) translateX(19rem) rotate(-480deg); }
          }
          @keyframes orbit-3 {
            from { transform: rotate(240deg) translateX(19rem) rotate(-240deg); }
            to { transform: rotate(600deg) translateX(19rem) rotate(-600deg); }
          }
        }

        .orbit-track-1 { animation: orbit-1 35s linear infinite; }
        .orbit-track-2 { animation: orbit-2 35s linear infinite; }
        .orbit-track-3 { animation: orbit-3 35s linear infinite; }

        .orbit-system:hover .wave-path,
        .orbit-system:hover .orbit-track-1,
        .orbit-system:hover .orbit-track-2,
        .orbit-system:hover .orbit-track-3 {
          animation-play-state: paused;
        }
      `}</style>

      {/* ========================================= */}
      {/* SECCIÓN 1: Personal con experiencia       */}
      {/* ========================================= */}
      {/* Ajustes: En móvil el gap es menor (gap-8) y se centra todo (text-center, items-center) */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8 md:gap-12">
        <div className="w-full md:w-1/2 relative px-2 md:px-0">
            <img 
              src="/images/doctor_experiencia.jpg" 
              alt={t.services.item2.title} 
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#4A4A4A] leading-[1.1] mb-4 md:mb-6 whitespace-pre-line">
            {t.services.item2.title}
          </h2>
          <p className="text-sm md:text-xs text-gray-500 leading-relaxed max-w-sm">
            {t.services.item2.text}
          </p>
        </div>
      </div>

      {/* ========================================= */}
      {/* SECCIÓN 2: ¡Lo más nuevo para ti!         */}
      {/* ========================================= */}
      {/* Ajustes de altura: En móvil min-h-[400px], en pc min-h-[800px] */}
      <div className="relative max-w-6xl w-full min-h-[400px] sm:min-h-[500px] md:min-h-[800px] flex items-center justify-center mt-6 md:mt-10 orbit-system">
        
        {/* FONDO: SVG Dinámico con coordenadas polares */}
        {/* Ajuste de tamaño contenedor SVG para que no rebase la pantalla móvil */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[750px] md:h-[750px] flex items-center justify-center">
            <svg viewBox="0 0 1000 1000" className="w-full h-full">
              {lineasSVG.map((pathData, index) => {
                const isOuter = index === 0;
                return (
                  <path
                    key={index}
                    d={pathData}
                    fill="none"
                    stroke="#3C7362"
                    strokeWidth={isOuter ? "2" : "1"}
                    className={isOuter ? "opacity-40" : "opacity-30 wave-path"}
                    style={{
                      animationDirection: index % 2 === 0 ? "normal" : "reverse",
                      animationDuration: `${25 + (index * 2)}s`
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* TÍTULO CENTRAL */}
        {/* Ajustado tamaño de texto y padding para móvil */}
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-bold text-[#4A4A4A] text-center leading-[1.1] bg-white/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-full md:bg-transparent md:backdrop-blur-none whitespace-pre-line">
          {t.offer.title}
        </h2>

        {/* PRÓTESIS ORBITALES (Con sus espacios respetados) */}
        
        {/* Prótesis 1 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 orbit-track-1">
          <img 
            src="/images/protesis_top.png" 
            alt="Prótesis" 
            className="w-16 sm:w-24 md:w-48 lg:w-80 object-contain pointer-events-auto transition-transform duration-300 hover:scale-125 cursor-pointer drop-shadow-2xl"
          />
        </div>
        
        {/* Prótesis 2 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 orbit-track-2">
          <img 
            src="/images/protesis_izq.png" 
            alt="Prótesis" 
            className="w-16 sm:w-24 md:w-48 lg:w-52 object-contain pointer-events-auto transition-transform duration-300 hover:scale-125 cursor-pointer drop-shadow-2xl"
          />
        </div>

        {/* Prótesis 3 */}
        {/* Nota: Se corrigió el error de clase lg:w-525bject-contain a lg:w-52 object-contain */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 orbit-track-3">
          <img 
            src="/images/protesis_der.png" 
            alt="Prótesis" 
            className="w-16 sm:w-24 md:w-48 lg:w-52 object-contain pointer-events-auto transition-transform duration-300 hover:scale-125 cursor-pointer drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ExperienceAndOffer;