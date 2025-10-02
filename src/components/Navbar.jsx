// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../locales"; // temporal mientras migramos páginas
import "./Navbar.css";

// Íconos / banderas (verifica que existan en src/assets/icons)
import esFlag from "../assets/icons/es.png";
import enFlag from "../assets/icons/en.png";
import ptFlag from "../assets/icons/pt.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  // compatibilidad con distintos nombres en el context
  const ctx = useLanguage() || {};
  const language = ctx.language || ctx.lang || "es";
  const changeLanguage = ctx.changeLanguage || ctx.setLanguage || (() => {});

  const t = (translations && translations[language]) ? translations[language] : translations["es"] || {};
  const navbarText = t.navbar || { home: "Home", about: "About", services: "Services", contact: "Contact" };

  const languages = [
    { code: "es", label: "Español", flag: esFlag },
    { code: "en", label: "English", flag: enFlag },
    { code: "pt", label: "Português", flag: ptFlag },
  ];
  const selected = languages.find((l) => l.code === language) || languages[0];

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);

  const location = useLocation();

  // cerrar dropdowns al click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        // no cerramos el mobile si el usuario clickea en el hamburger (se controla por estado)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // efecto scroll para cambiar fondo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLangChange = (code) => {
    changeLanguage(code);
    setLangOpen(false);
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <nav className={`navbar-global ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo" aria-label="OMMA - Inicio">
            <img src="/images/omma_white.png" alt="OMMA" />
          </Link>
        </div>

        {/* Links desktop */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`} ref={mobileRef}>
          <li className={isActive("/") ? "active" : ""}><Link to="/">{navbarText.home}</Link></li>
          <li className={isActive("/about") ? "active" : ""}><Link to="/about">{navbarText.about}</Link></li>
          <li className={isActive("/services") ? "active" : ""}><Link to="/services">{navbarText.services}</Link></li>
          <li className={isActive("/contact") ? "active" : ""}><Link to="/contact">{navbarText.contact}</Link></li>
        </ul>

        {/* Right: idioma + hamburger */}
        <div className="nav-right">
          <div className="lang-wrapper" ref={dropdownRef}>
            <button
              className="lang-btn"
              onClick={() => setLangOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={langOpen}
            >
              <img src={selected.flag} alt={selected.label} className="flag-img" />
              <span className="lang-label">{selected.label}</span>
            </button>

            {langOpen && (
              <div className="lang-menu">
                {languages.filter(l => l.code !== language).map((l) => (
                  <button
                    key={l.code}
                    className="lang-menu-item"
                    onClick={() => handleLangChange(l.code)}
                  >
                    <img src={l.flag} alt={l.label} className="flag-img" />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* mobile toggle */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(s => !s)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu (se muestra cuando mobileOpen) */}
      <div className={`mobile-overlay ${mobileOpen ? "show" : ""}`}>
        <ul className="mobile-links">
          <li onClick={() => setMobileOpen(false)}><Link to="/">{navbarText.home}</Link></li>
          <li onClick={() => setMobileOpen(false)}><Link to="/about">{navbarText.about}</Link></li>
          <li onClick={() => setMobileOpen(false)}><Link to="/services">{navbarText.services}</Link></li>
          <li onClick={() => setMobileOpen(false)}><Link to="/contact">{navbarText.contact}</Link></li>
        </ul>
        <div className="mobile-lang">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`mobile-lang-item ${l.code === language ? "selected" : ""}`}
              onClick={() => { handleLangChange(l.code); setMobileOpen(false); }}
            >
              <img src={l.flag} alt={l.label} className="flag-img" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

