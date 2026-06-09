// src/pages/HomePage.jsx
import React, { useEffect } from "react";


// Componentes Rediseñados con Tailwind
import Hero from "../components/Hero";
import ExperienceAndOffer from "../components/ExperienceAndOffer";
import CorporateAndSocial from "../components/CorporateAndSocial";
import ContactAndFooter from "../components/ContactAndFooter"; // <-- Nuevo componente final

function HomePage() {
  
  // Mantenemos tu efecto de scroll por si otras lógicas globales lo usan
  useEffect(() => {
    const handleScroll = () => {
      // scroll logic
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage-container bg-white">
      
      {/* 1. Hero */}
      <Hero />

      {/* 3. Personal con experiencia + ¡Lo más nuevo para ti! */}
      <ExperienceAndOffer />

      {/* 4. Valores Corporativos + Redes Sociales */}
      <CorporateAndSocial />

      {/* 5. Formulario de Contacto + Footer */}
      <ContactAndFooter />

    </div>
  );
}

export default HomePage;