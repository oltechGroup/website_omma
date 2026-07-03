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
    // Fórmula: El radio se altera según la amplitud para crear la "ola"
    const r = radioBase + amplitud * Math.sin(picos * angulo);
    // Convertir a X, Y (Centro en 500,500)
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
    const progreso = index / 19; // Va de 0 (exterior) a 1 (interior)
    const radioBase = 460 - (progreso * 280); // El círculo se va haciendo pequeño
    
    // LA MAGIA ESTÁ AQUÍ:
    // Si es la línea exterior (progreso = 0), la amplitud es 0 (círculo perfecto).
    // Conforme entra, la ola crece hasta 60px de profundidad.
    const amplitud = progreso * 60; 
    const picos = 5; // Número de crestas de la ola
    
    return generarPathCurvado(radioBase, amplitud, picos);
  });

  return (
    <section className="w-full bg-white pb-24 px-4 flex flex-col items-center overflow-hidden">
      
      {/* ========================================= */}
      {/* ESTILOS ANIMADOS (Órbitas y Rotación de Ondas) */}
      {/* ========================================= */}
      <style>{`
        /* Rotación fluida para las ondas SVG. Al girar una onda senoidal, 
           crea la ilusión óptica de ondulación in situ. */
        @keyframes spin-wave {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .wave-path {
          transform-origin: 500px 500px; /* Eje central del SVG */
          animation: spin-wave 25s linear infinite;
        }

        /* Animación Orbital original conservada
          El translateX define qué tan lejos del centro viaja la imagen.
          La doble rotación (positiva y luego negativa) mantiene la imagen siempre derecha.
        */
        @keyframes orbit-1 {
          from { transform: rotate(0deg) translateX(11rem) rotate(0deg); }
          to { transform: rotate(360deg) translateX(11rem) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          from { transform: rotate(120deg) translateX(11rem) rotate(-120deg); }
          to { transform: rotate(480deg) translateX(11rem) rotate(-480deg); }
        }
        @keyframes orbit-3 {
          from { transform: rotate(240deg) translateX(11rem) rotate(-240deg); }
          to { transform: rotate(600deg) translateX(11rem) rotate(-600deg); }
        }

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

        /* Pausar todo el sistema (ondas y órbitas) al hacer hover */
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
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-12">
        <div className="w-full md:w-1/2 relative">
            <img 
              src="/images/doctor_experiencia.jpg" 
              alt={t.services.item2.title} 
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#4A4A4A] leading-[1.1] mb-6 whitespace-pre-line">
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
      <div className="relative max-w-6xl w-full min-h-[500px] md:min-h-[800px] flex items-center justify-center mt-10 orbit-system">
        
        {/* FONDO: SVG Dinámico con coordenadas polares */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[350px] h-[350px] md:w-[750px] md:h-[750px] flex items-center justify-center">
            <svg viewBox="0 0 1000 1000" className="w-full h-full">
              {lineasSVG.map((pathData, index) => {
                // Alternamos ligeramente la dirección o aplicamos retraso visual para la ilusión óptica de agua
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
                      // Las ondas interiores giran con ligero retraso para crear interferencia orgánica
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
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-[5rem] font-bold text-[#4A4A4A] text-center leading-[1.1] bg-white/60 backdrop-blur-sm p-8 rounded-full md:bg-transparent md:backdrop-blur-none whitespace-pre-line">
          {t.offer.title}
        </h2>

        {/* PRÓTESIS ORBITALES (Con sus espacios respetados) */}
        
        {/* Prótesis 1 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 orbit-track-1">
          <img 
            src="/images/protesis_top.png" 
            alt="Prótesis" 
            className="w-28 md:w-48 lg:w-80 object-contain pointer-events-auto transition-transform duration-300 hover:scale-125 cursor-pointer drop-shadow-2xl"
          />
        </div>
        
        {/* Prótesis 2 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 orbit-track-2">
          <img 
            src="/images/protesis_izq.png" 
            alt="Prótesis" 
            className="w-28 md:w-48 lg:w-25 object-contain pointer-events-auto transition-transform duration-300 hover:scale-125 cursor-pointer drop-shadow-2xl"
          />
        </div>

        {/* Prótesis 3 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 orbit-track-3">
          <img 
            src="/images/protesis_der.png" 
            alt="Prótesis" 
            className="w-28 md:w-48 lg:w-525bject-contain pointer-events-auto transition-transform duration-300 hover:scale-125 cursor-pointer drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ExperienceAndOffer;