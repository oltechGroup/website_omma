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
      <nav className={`navbar-home ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container-home">
          <div className="nav-logo">
            <img src="./src/assets/images/omma_white.png" alt="Logo" />
          </div>
          <ul className="nav-links-home">
            <li><Link to="/">{t.navbar.home}</Link></li>
            <li><Link to="/nosotros">{t.navbar.about}</Link></li>
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
      </nav>

      {/* Hero */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1>{t.hero.title}</h1>
            <p>
              {t.hero.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <button className="cta-button">{t.hero.button}</button>
          </div>

          <div className="hero-media">
            <img src="./src/assets/images/ejemplo2.png" alt="Ejemplo" />
          </div>
        </div>
      </header>
      <section>

      </section>
      {/* Sección Acerca de Nosotros */} 
      <section className="about-us-section">
        <h2>{t.aboutUs.title}</h2>
        <div className="about-cards">
          <div className="card">
            <img src="./src/assets/icons/mision.jpg" alt="Misión" className="card-image" />
            <h3>{t.aboutUs.mission.title}</h3>
            <p>{t.aboutUs.mission.text}</p>
          </div>
          <div className="card">
            <img src="./src/assets/icons/vision.jpg" alt="Visión" className="card-image" />
            <h3>{t.aboutUs.vision.title}</h3>
            <p>{t.aboutUs.vision.text}</p>
          </div>
          {/* Nuevo recuadro para valores */}
          <div className="card">
            <img src="./src/assets/icons/valores.jpg" alt="Valores" className="card-image" />
            <h3>{t.aboutUs.values.title}</h3>
            <p>{t.aboutUs.values.description}</p>
          </div>
        </div>
      </section>

      <section className="services-experience-section">
        <div className="container">
          <h2 className="section-title">Experiencia y servicios</h2>
          <div className="services-cards-container">
            <div className="service-card">
              <div className="card-image-wrapper">
                {/* Aquí inserta tu primera imagen */}
                <img src="/src/assets/images/Imagen1.png" alt="Descripción de la imagen 1" />
              </div>
              <h3>Prótesis de rodilla</h3>
              <p>
                sddsw
              </p>
            </div>
            <div className="service-card">
              <div className="card-image-wrapper">
                {/* Aquí inserta tu segunda imagen */}
                <img src="/src/assets/images/fondo_about.png" alt="Descripción de la imagen 2" />
              </div>
              <h3>Personal con experiencia</h3>
              <p>
                Aquí va la descripción del servicio 2.
              </p>
            </div>
            <div className="service-card">
              <div className="card-image-wrapper">
                {/* Aquí inserta tu tercera imagen */}
                <img src="/src/assets/images/ejemplo.png" alt="Descripción de la imagen 3" />
              </div>
              <h3>Prótesis de reversa de hombro</h3>
              <p>
                Aquí va la descripción del servicio 3.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="cta-button-experience">
          <Link to="/services">Consulta los productos</Link>
    </button>
        </div>
      </section>

     
     <section className="corporate-section">
      <div className="corporate-container">
        {/* Título */}
        <h2 className="corporate-title">{t.corporate.title}</h2>

        {/* Grid de valores */}
        <div className="corporate-grid">
          {t.corporate.values.map((item, index) => (
            <div key={index} className="corporate-card">
              {/* Icono */}
              <div className="corporate-icon">{item.icon}</div>

              {/* Texto */}
              <h3 className="corporate-card-title">{item.title}</h3>
              <p className="corporate-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default HomePage;
