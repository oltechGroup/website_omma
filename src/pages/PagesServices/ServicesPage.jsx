// src/pages/PagesServices/ServicesPage.jsx
import React from "react";
import "./ServicesPage.css";
import { FaBone, FaRunning, FaUserMd, FaDumbbell } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// Importamos traducciones
import es from "../../locales/pageservices/services/es";
import en from "../../locales/pageservices/services/en";
import pt from "../../locales/pageservices/services/pt";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  return (
    <div className="services-wrapper">
      {/* NAVBAR GLOBAL */}
      <Navbar />

      {/* HERO */}
      <header className="hero services-hero">
        <h1>
          {t.hero.title} <span>{t.hero.highlight}</span>
        </h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* SERVICIOS CLÍNICOS */}
      <section className="clinical-services">
        <h2>{t.clinical.title}</h2>
        <div className="services-grid">
          <a href="/shoulder" className="service-card">
            <FaBone className="icon" />
            <h3>{t.clinical.shoulder.title}</h3>
            <p>{t.clinical.shoulder.desc}</p>
          </a>
          <a href="/elbow" className="service-card">
            <FaUserMd className="icon" />
            <h3>{t.clinical.elbow.title}</h3>
            <p>{t.clinical.elbow.desc}</p>
          </a>
          <a href="/knee" className="service-card">
            <FaRunning className="icon" />
            <h3>{t.clinical.knee.title}</h3>
            <p>{t.clinical.knee.desc}</p>
          </a>
          <a href="/services" className="service-card">
            <FaBone className="icon" />
            <h3>{t.clinical.hip.title}</h3>
            <p>{t.clinical.hip.desc}</p>
          </a>
          <a href="/sports-medicine" className="service-card">
            <FaDumbbell className="icon" />
            <h3>{t.clinical.sports.title}</h3>
            <p>{t.clinical.sports.desc}</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-services">
        <div className="footer-grid-services">
          <div>
            <h3>{t.footer.about.title}</h3>
            <p>{t.footer.about.desc}</p>
          </div>
          <div>
            <h3>{t.footer.links.title}</h3>
            <div className="footer-links-services">
              <a href="/">{t.footer.links.home}</a>
              <a href="/about">{t.footer.links.about}</a>
              <a href="/contact">{t.footer.links.contact}</a>
            </div>
          </div>
          <div>
            <h3>{t.footer.contact.title}</h3>
            <p>{t.footer.contact.phone}</p>
            <p>{t.footer.contact.email}</p>
          </div>
        </div>

        <div className="footer-bottom-services">
          <div className="footer-logo-services">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.bottom}</p>
        </div>
      </footer>
    </div>
  );
}
