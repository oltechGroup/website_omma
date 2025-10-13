import React from "react";
import "./AboutPage.css";
import { 
  FaBullseye, 
  FaRocket, 
  FaLightbulb, 
  FaHandsHelping, 
  FaLeaf, 
  FaUserMd, 
  FaCheckCircle, 
  FaUsers,
  FaHospital,
  FaUserTie,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaClock
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/about/es";
import en from "../locales/about/en";
import pt from "../locales/about/pt";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  const experienceIcons = [
    FaHospital,       // Sector salud
    FaUserTie,        // Personal técnico
    FaShieldAlt,      // Cumplimiento normativo
    FaMapMarkerAlt,   // Trazabilidad
    FaCalendarAlt,    // Congresos
    FaAward,          // Certificaciones
    FaClock           // Respuesta inmediata
  ];

  return (
    <div className="about-wrapper">
      {/* HERO */}
      <header className="hero about-hero">
        <h1>{t.hero.title} <span>{t.hero.subtitle}</span></h1>
        <p>{t.hero.text}</p>
      </header>

      {/* MISIÓN Y VISIÓN */}
      <section className="mission-vision">
        <div className="card">
          <h2><FaBullseye className="icon" /> {t.mission.title}</h2>
          <p>{t.mission.text}</p>
        </div>
        <div className="card">
          <h2><FaRocket className="icon" /> {t.vision.title}</h2>
          <p>{t.vision.text}</p>
        </div>
      </section>

      {/* VALORES */}
      <section className="values">
        <h2>{t.values.title}</h2>
        <p className="values-hero">{t.values.hero}</p>
        <div className="values-grid">
          <div className="value-item"><FaLightbulb className="val-icon" /> {t.values.items.innovation}</div>
          <div className="value-item"><FaUserMd className="val-icon" /> {t.values.items.excellence}</div>
          <div className="value-item"><FaHandsHelping className="val-icon" /> {t.values.items.trust}</div>
          <div className="value-item"><FaCheckCircle className="val-icon" /> {t.values.items.accessibility}</div>
          <div className="value-item"><FaLeaf className="val-icon" /> {t.values.items.sustainability}</div>
          <div className="value-item"><FaUsers className="val-icon" /> {t.values.items.service}</div>
        </div>
      </section>

      {/* POSICIONAMIENTO */}
      <section className="positioning">
        <blockquote>{t.positioning}</blockquote>
      </section>

      {/* PERFIL EMPRESARIAL */}
      <section className="profile profile-highlight">
        <h2>{t.profile.title}</h2>
        <p>{t.profile.text}</p>
        <h3>{t.profile.subtitle}</h3>
        <p>{t.profile.objetive}</p>
      </section>

      {/* EXPERIENCIA ACTUALIZADA */}
      <section className="experience">
        <div className="experience-container">
          <h2>{t.experience.title}</h2>
          <div className="experience-grid">
            {t.experience.items.map((item, index) => {
              const IconComponent = experienceIcons[index];
              return (
                <div className="experience-item" key={index}>
                  <div className="experience-icon">
                    <IconComponent />
                  </div>
                  <div className="experience-content">
                    <p>{item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="clients">
        <h2>{t.clients.title}</h2>
        {t.clients.list.map((client, index) => (
          <div className="client-card" key={index}>
            <div className="client-image">
              <img src={client.image} alt={client.name} />
            </div>
            <div className="client-info">
              <h3>{client.name}</h3>
              <p><strong>{t.clients.address}:</strong> {client.address}</p>
              <p><strong>{t.clients.phone}:</strong> {client.phone}</p>
              {client.link && (
                <a href={client.link} target="_blank" rel="noreferrer">
                  {t.clients.visit}
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer-about">
        <div className="footer-grid-about">
          <div>
            <h3>{t.footer.aboutTitle}</h3>
            <p>{t.footer.aboutText}</p>
          </div>
          <div>
            <h3>{t.footer.linksTitle}</h3>
            <div className="footer-links-about">
              <a href="/">{t.nav.home}</a>
              <a href="/services">{t.nav.services}</a>
              <a href="/contact">{t.nav.contact}</a>
            </div>
          </div>
          <div>
            <h3>{t.footer.contactTitle}</h3>
            <p>{t.footer.phone}</p>
            <p>{t.footer.email}</p>
          </div>
        </div>
        <div className="footer-bottom-about">
          <div className="footer-logo-about">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}