// src/pages/HomePage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 
import translations from "../locales";

import esFlag from "../assets/icons/es.png";
import enFlag from "../assets/icons/en.png";
import ptFlag from "../assets/icons/pt.png";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "es");
  const t = translations[language];

  // Para dropdown
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Cierra dropdown si se hace click fuera
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  const languages = [
    { code: "es", label: "Español", flag: esFlag },
    { code: "en", label: "English", flag: enFlag },
    { code: "pt", label: "Português", flag: ptFlag },
  ];

  const selectedLang = languages.find(l => l.code === language);

  return (
    <div className="homepage-container">
<<<<<<< HEAD
      
      <nav className="navbar">
        <div className="nav-logo">Omma Group</div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contactanos</Link></li>
        </ul>
=======
      <nav className={`navbar-home ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="nav-logo">
            <img src="./src/assets/images/omma_white.png" alt="Logo" />
          </div>

          <ul className="nav-links">
            <li><Link to="/">{t.navbar.home}</Link></li>
            <li><Link to="/about">{t.navbar.about}</Link></li>
            <li><Link to="/services">{t.navbar.services}</Link></li>
            <li><Link to="/contact">{t.navbar.contact}</Link></li>
          </ul>

          {/* Dropdown de idioma */}
          <div className="lang-dropdown" ref={dropdownRef}>
            <button className="lang-btn" onClick={() => setOpen(!open)}>
              <img src={selectedLang.flag} alt={selectedLang.label} className="flag-img" />
              <span>{selectedLang.label}</span>
            </button>
            {open && (
              <div className="lang-menu">
                {languages
                  .filter(l => l.code !== language)
                  .map(lang => (
                    <div
                      key={lang.code}
                      className="lang-item"
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <img src={lang.flag} alt={lang.label} className="flag-img" />
                      <span>{lang.label}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
>>>>>>> 34f7331 (Cambios home 1)
      </nav>

      {/* Hero */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <button className="cta-button">{t.hero.button}</button>
        </div>
      </header>

      {/* Sección Acerca de Nosotros */} 
      <section className="about-us-section"> 
        <h2>{t.aboutUs.title}</h2> 
        <div className="about-cards"> 
            <div className="card"> 
                <h3>{t.aboutUs.mission.title}</h3> 
                <p>{t.aboutUs.mission.text}</p> 
            </div> 
            <div className="card"> 
                <h3>{t.aboutUs.vision.title}</h3> 
                <p>{t.aboutUs.vision.text}</p>
            </div> 
        </div> 
        </section> 
        {/* Sección Servicios */} 
        <section className="services-section"> 
            <h2>{t.services.title}</h2> 
        <div className="service-items"> 
            <div className="service-card"> 
                <div className="service-image"></div> 
                <h3>{t.services.item1.title}</h3> 
                <p>{t.services.item1.text}</p>
            </div> <div className="service-card"> 
                <div className="service-image"></div> 
                <h3>{t.services.item2.title}</h3> 
                <p>{t.services.item2.text}</p> 
            </div> <div className="service-card"> 
                <div className="service-image"></div>
                <h3>{t.services.item3.title}</h3> 
                <p>{t.services.item3.text}</p> 
            </div> 
        </div> 
    </section> 
    </div>
    
  );
}

export default HomePage;
