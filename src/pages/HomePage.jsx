// src/pages/HomePage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 
import translations from "../locales";
import esFlag from "../assets/icons/es.png";
import enFlag from "../assets/icons/en.png";
import ptFlag from "../assets/icons/pt.png";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";


function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "es");
  const t = translations[language];

  // Para dropdown
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  //chatbot
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
  { sender: "bot", message: "👋 Hola, ¿en qué puedo ayudarte?" }
]);

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

  ///////////////////////////////////////////////////////
  

const handleChatSubmit = (e) => {
  e.preventDefault();
  if (!chatInput.trim()) return;

  // Añadir mensaje del usuario
  setChatHistory(prev => [...prev, { sender: "user", message: chatInput }]);

  // Obtener respuesta automática (puedes hacer esto más avanzado o integrar IA)
  const userMessage = chatInput.toLowerCase();
  let botReply = "Lo siento, no entendí tu mensaje.";

  if (userMessage.includes("horario")) {
    botReply = "Nuestro horario de atención es de 9:00 a 18:00 de lunes a viernes.";
  } else if (userMessage.includes("contacto")) {
    botReply = "Puedes contactarnos al 55 1744 2428 o por correo a contacto@ommagroup.com";
  } else if (userMessage.includes("servicios")) {
    botReply = "Ofrecemos prótesis de rodilla y hombro, además de asesoría personalizada.";
  } else if (userMessage.includes("hola")) {
    botReply = "Hola buen día, ¿En que podemos ayudarte?";
  }

  // Añadir respuesta del bot después de un pequeño delay
  setTimeout(() => {
    setChatHistory(prev => [...prev, { sender: "bot", message: botReply }]);
  }, 500);

  // Limpiar input
  setChatInput("");
};

//////////////////////////////////////////////////////
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
                <img src="/src/assets/images/Imagen1.png" alt="Descripción de la imagen 1" />
              </div>
              <h3>Prótesis de rodilla</h3>
              <p>
                Diseñada para devolverte la movilidad y la confianza. Nuestra prótesis de rodilla de alta calidad te permite recuperar tu vida activa.
              </p>
            </div>
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src="/src/assets/images/fondo_about.png" alt="Descripción de la imagen 2" />
              </div>
              <h3>Personal con experiencia</h3>
              <p>
                Contáctenos hoy mismo para discutir cómo podemos satisfacer sus necesidades específicas.
              </p>
            </div>
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src="/src/assets/images/ejemplo.png" alt="Descripción de la imagen 3" />
              </div>
              <h3>Prótesis de reversa de hombro</h3>
              <p>
                Una solución de alta tecnología para la recuperación del hombro. Nuestra prótesis de reversa de hombro te ofrece la estabilidad y el soporte que necesitas para volver a la normalidad.
              </p>
            </div>
          </div>
        </div>
       <div className="consult">
        <button className="cta-button-experience">
          <Link to="/services" className="cta-link">Conocenos</Link>
        </button>
      </div>

      </section>
    <section>
       <br />
    </section>
    <section className="new-offer-section">
  <div className="offer-container">
    <div className="offer-text">
      <h2 className="animated-title">¡Lo más nuevo para ti!</h2>
      <p className="animated-subtitle">
        Descubre nuestros últimos productos diseñados para ofrecerte innovación, calidad y estilo.
      </p>
      <button className="cta-offer">
        <Link to="/services" className="cta-link">Ver producto</Link>
      </button>
    </div>
    <div className="offer-image">
      <video autoPlay loop muted playsInline>
        <source src="/src/assets/videos/Codoomma.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</section>

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
    
    
      <div className="floating-buttons">
        <a
          href="https://wa.me/525517442428"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
        >
          <img src="/src/assets/icons/whatsap.png" alt="WhatsApp" />
        </a>
        <button
          className="floating-btn chatbot-btn"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <img src="/src/assets/icons/chatbot.png" alt="Chatbot" />
        </button>
        {isChatOpen && (
          <div className="chatbot-box">
  <div className="chatbot-header">
    <h4>Asistente Virtual</h4>
    <button onClick={() => setIsChatOpen(false)}>✖</button>
  </div>

  <div className="chatbot-body">
    {chatHistory.map((msg, index) => (
      <div
        key={index}
        className={`chat-message ${msg.sender === "bot" ? "bot" : "user"}`}
      >
        {msg.message}
      </div>
    ))}
  </div>

  <form className="chatbot-input" onSubmit={handleChatSubmit}>
    <input
      type="text"
      placeholder="Escribe tu mensaje..."
      value={chatInput}
      onChange={(e) => setChatInput(e.target.value)}
    />
    <button type="submit">Enviar</button>
  </form>
</div>

        )}


      </div>

      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-image">
            <img src="/src/assets/images/seccion5.png" alt="Cirugía de ejemplo" />
          </div>
          <div className="why-choose-text">
            <h2>"Donde la ciencia se convierte en movilidad".</h2>
            <p>
              Somos una empresa creada el 19 de marzo de 2024, dedicada a la provisión y 
              prestación de servicios profesionales para terceros. Brindamos soluciones 
              integrales para eventos masivos, combinando inteligencia tecnológica y talento humano. 
            </p>
            <button className="why-btn">Ver productos</button>
          </div>
        </div>
      </section>

      <section>
      </section>
    <footer className="footer-home">
  <div className="footer-grid-home">
    <div>
      <h3>Acerca de nosotros</h3>
      <p>
        Somos un grupo dedicado a ofrecer un servicio excepcional con
        soluciones de calidad y confianza.
      </p>
    </div>
    <div>
      <h3>Acerca de</h3>
      <div className="footer-links-home">
        <a href="/">Inicio</a>
        <a href="/about">Nosotros</a>
        <a href="/services">Servicios</a>
      </div>
    </div>
    <div>
      <h3>Información de Contacto</h3>
      <p>Tel: 55 1744 2428</p>
      <p>Email: contacto@ommagroup.com</p>
    </div>
  </div>

  <div className="footer-bottom-home">
    <div className="footer-socials-home">
      <a
        href="https://wa.me/5215517442428"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.tiktok.com/@ommagroup"
        target="_blank"
        rel="noreferrer"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.facebook.com/OltechMexico"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/grupooltech/#"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
    <div className="footer-logo-home">
      <img src="/src/assets/images/omma_white.png" alt="Logo OMMA" />
    </div>
  </div>
</footer>

    </div>
    
  );
}

export default HomePage;
