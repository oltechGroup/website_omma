// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "/src/locales";

// imágenes/íconos que siguen en assets
import ommamision from "../assets/icons/mision.jpg";
import ommavision from "../assets/icons/vision.jpg";
import ommamvalues from "../assets/icons/valores.jpg";
import ommawhats from "../assets/icons/whatsap.png";

// NOTA: estas imágenes ya las tienes en /public
const ommaLogo = "/images/omma_white.png";
const homeImg = "/images/Home1.png";
const ommaejemplo = "/images/ejemplo2.png";
const ommaexp1 = "/images/Imagen1.png";
const ommaexp2 = "/images/fondo_about.png";
const ommaexp3 = "/images/ejemplo.png";
const ommavideo = "/videos/Codoomma.mp4";
const ommachoose = "/images/seccion5.png";
const ommawhite = "/images/omma_white.png";

function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      {/* Hero */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
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
            <button className="cta-button">
              <Link to="/services" className="cta-link">
                {t.hero.button}
              </Link>
            </button>
          </div>

          <div className="hero-media">
            <img src={ommaejemplo} alt="Ejemplo" />
          </div>
        </div>
      </header>

      {/* About Us */}
      <section className="about-us-section">
        <h2>{t.aboutUs.title}</h2>
        <div className="about-cards">
          <div className="card">
            <img src={ommamision} alt="Misión" className="card-image" />
            <h3>{t.aboutUs.mission.title}</h3>
            <p>{t.aboutUs.mission.text}</p>
          </div>
          <div className="card">
            <img src={ommavision} alt="Visión" className="card-image" />
            <h3>{t.aboutUs.vision.title}</h3>
            <p>{t.aboutUs.vision.text}</p>
          </div>
          <div className="card">
            <img src={ommamvalues} alt="Valores" className="card-image" />
            <h3>{t.aboutUs.values.title}</h3>
            <p>{t.aboutUs.values.description}</p>
          </div>
        </div>
      </section>

      {/* Services / Experience */}
      <section className="services-experience-section">
        <div className="container">
          <h2 className="section-title">{t.services.title}</h2>
          <div className="services-cards-container">
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src={ommaexp1} alt="Descripción de la imagen 1" />
              </div>
              <h3>{t.services.item1.title}</h3>
              <p>{t.services.item1.text}</p>
            </div>
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src={ommaexp2} alt="Descripción de la imagen 2" />
              </div>
              <h3>{t.services.item2.title}</h3>
              <p>{t.services.item2.text}</p>
            </div>
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src={ommaexp3} alt="Descripción de la imagen 3" />
              </div>
              <h3>{t.services.item3.title}</h3>
              <p>{t.services.item3.text}</p>
            </div>
          </div>
        </div>
        <div className="consult">
          <button className="cta-button-experience">
            <Link to="/services" className="cta-link">{t.services.button}</Link>
          </button>
        </div>
      </section>

      {/* New Offer */}
      <section className="new-offer-section">
        <div className="offer-container">
          <div className="offer-text">
            <h2 className="animated-title">{t.offer.title}</h2>
            <p className="animated-subtitle">{t.offer.description}</p>
            <button className="cta-offer">
              <Link to="/services" className="cta-link">{t.hero.button}</Link>
            </button>
          </div>
          <div className="offer-image">
            <video autoPlay loop muted playsInline>
              <source src={ommavideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="corporate-section">
        <div className="corporate-container">
          <h2 className="corporate-title">{t.corporate.title}</h2>
          <div className="corporate-grid">
            {t.corporate.values.map((item, index) => (
              <div key={index} className="corporate-card">
                <div className="corporate-icon">{item.icon}</div>
                <h3 className="corporate-card-title">{item.title}</h3>
                <p className="corporate-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/525517442428"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
        >
          <img src={ommawhats} alt="WhatsApp" />
        </a>
      </div>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-image">
            <img src={ommachoose} alt="Cirugía de ejemplo" />
          </div>
          <div className="why-choose-text">
            <h2>{t.sectionchoose.title}</h2>
            <p>{t.sectionchoose.description}</p>
            <button className="why-btn">
              <Link to="/services" className="cta-link">
                {t.sectionchoose.button}
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-home">
        <div className="footer-grid-home">
          <div>
            <h3>{t.footerhome.about}</h3>
            <p>{t.footerhome.description}</p>
          </div>
          <div>
            <h3>{t.footerhome.about2}</h3>
            <div className="footer-links-home">
              <a href="/">{t.footerhome.start}</a>
              <a href="/about">{t.footerhome.about3}</a>
              <a href="/services">{t.footerhome.services}</a>
            </div>
          </div>
          <div>
            <h3>{t.footerhome.info}</h3>
            <p>{t.footerhome.phone}</p>
            <p>{t.footerhome.email}</p>
          </div>
        </div>

        <div className="footer-bottom-home">
          <div className="footer-logo-home">
            <img src={ommawhite} alt="Logo OMMA" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
