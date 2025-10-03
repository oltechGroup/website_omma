// src/components/ChatBotWidget.jsx
import React, { useState, useRef } from "react";
import {
  FaTimes, FaPaperPlane, FaWhatsapp,
  FaMapMarkedAlt, FaClock, FaEnvelope, FaServicestack
} from "react-icons/fa";
import emailjs from "emailjs-com";
import "./ChatBotWidget.css";

import { useLanguage } from "../context/LanguageContext";
import es from "../locales/chatbot/es.js";
import en from "../locales/chatbot/en.js";
import pt from "../locales/chatbot/pt.js";

const translations = { es, en, pt };

export default function ChatBotWidget() {
  const { language } = useLanguage();
  const t = translations[language] || translations["es"];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("menu");
  const [status, setStatus] = useState("");
  const [showMap, setShowMap] = useState(false);

  const form = useRef();

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    setActiveSection("menu");
    setStatus("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7b901no", // tu ID de servicio
        "template_l0otpof", // tu ID de template
        form.current,
        "z5uJM9St_tSg6k3ul" // tu API Key
      )
      .then(
        () => {
          setStatus(t.successMessage);
          form.current.reset();
        },
        (error) => {
          setStatus(t.errorMessage + error.text);
        }
      );
  };

  return (
    <div className="chatbot-container">
{/* Botón flotante chatbot */}
<button className="chatbot-toggle" onClick={toggleWidget}>
  {isOpen ? <FaTimes /> : <img src="/images/LogoW.png" alt="OMMA Logo" />}
</button>


      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/5215517442428"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      {/* Panel chatbot */}
      {isOpen && (
        <div className="chatbot-panel">
          <div className="omma-chatbot-header">
            <h3>{t.header.title}</h3>
          </div>

          <div className="chatbot-body">
            {/* Bienvenida */}
            {activeSection === "menu" && (
              <div className="chatbot-welcome">
                <p>👋 {t.welcome}</p>
              </div>
            )}

            {/* Menú principal */}
            {activeSection === "menu" && (
              <div className="chatbot-menu">
                <button onClick={() => setActiveSection("services")}>
                  <FaServicestack /> {t.menu.services}
                </button>
                <button onClick={() => setActiveSection("contact")}>
                  <FaEnvelope /> {t.menu.contact}
                </button>
                <button onClick={() => setActiveSection("hours")}>
                  <FaClock /> {t.menu.hours}
                </button>
                <button onClick={() => setShowMap(true)}>
                  <FaMapMarkedAlt /> {t.menu.map}
                </button>
              </div>
            )}

            {/* Sección servicios */}
            {activeSection === "services" && (
              <div className="chatbot-section">
                <h4>{t.services.title}</h4>
                <ul>
                  <li><a href="/elbow">{t.services.elbow}</a></li>
                  <li><a href="/shoulder">{t.services.shoulder}</a></li>
                  <li><a href="/knee">{t.services.knee}</a></li>
                  <li><a href="/sports-medicine">{t.services.sports}</a></li>
                </ul>
                <button onClick={() => setActiveSection("menu")}>{t.back}</button>
              </div>
            )}

            {/* Sección contacto */}
            {activeSection === "contact" && (
              <div className="chatbot-section">
                <h4>{t.contact.title}</h4>
                <form ref={form} onSubmit={sendEmail} className="chatbot-form">
                  <input type="text" name="name" placeholder={t.contact.name} required />
                  <input type="email" name="email" placeholder={t.contact.email} required />
                  <textarea name="message" placeholder={t.contact.message} rows="3" required />
                  <button type="submit"><FaPaperPlane /> {t.contact.send}</button>
                </form>
                {status && <p className="status-message">{status}</p>}
                <button onClick={() => setActiveSection("menu")}>{t.back}</button>
              </div>
            )}

            {/* Sección horarios */}
            {activeSection === "hours" && (
              <div className="chatbot-section">
                <h4>{t.hours.title}</h4>
                <p>{t.hours.schedule}</p>
                <button onClick={() => setActiveSection("menu")}>{t.back}</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal con Google Maps */}
      {showMap && (
        <div className="map-modal">
          <div className="map-content">
            <button className="map-close" onClick={() => setShowMap(false)}>
              <FaTimes />
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6619395624573!2d-99.19252342392444!3d19.435844545909763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20200a8e1fe23%3A0x3a5da133184022ad!2sAv.%20Homero%20527-Depto.%20701%20Piso%207%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1695492332321!5m2!1ses-419!2smx"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación OMMA"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
