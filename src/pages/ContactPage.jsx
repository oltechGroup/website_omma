// src/pages/ContactPage.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.css";
import {
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";
import es from "../locales/contact/es.js";
import en from "../locales/contact/en.js";
import pt from "../locales/contact/pt.js";

const translations = { es, en, pt };

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7b901no", 
        "template_l0otpof", 
        form.current,
        "z5uJM9St_tSg6k3ul"
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
    <div className="contact-wrapper">

      {/* HERO */}
      <header className="hero-contact">
        <h1>
          {t.hero.title} <span>{t.hero.highlight}</span>
        </h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="info-card-contact">
          <h2>
            <FaMapMarkerAlt className="icon" /> {t.info.addressTitle}
          </h2>
          <p>{t.info.address}</p>

          <h2>
            <FaPhoneAlt className="icon" /> {t.info.phoneTitle}
          </h2>
          <p>{t.info.phone}</p>

          <h2>{t.info.socialTitle}</h2>
          <div className="social-icons-contact">
            <a href="https://www.facebook.com/OltechMexico" target="_blank" rel="noreferrer" className="facebook">
              <FaFacebook /> Facebook
            </a>
            <a href="https://wa.me/5215517442428" target="_blank" rel="noreferrer" className="whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://www.tiktok.com/@ommagroup" target="_blank" rel="noreferrer" className="tiktok">
              <FaTiktok /> TikTok
            </a>
            <a href="https://www.instagram.com/grupooltech/#" target="_blank" rel="noreferrer" className="instagram">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="form-card-contact" id="formulario">
          <h2>{t.form.title}</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>{t.form.name}</label>
            <input type="text" name="name" placeholder={t.form.namePlaceholder} required />

            <label>{t.form.email}</label>
            <input type="text" name="email" placeholder={t.form.emailPlaceholder} required />

            <label>{t.form.subject}</label>
            <input type="text" name="subject" placeholder={t.form.subjectPlaceholder} />

            <label>{t.form.message}</label>
            <textarea name="message" placeholder={t.form.messagePlaceholder} rows="4" required />

            <button type="submit">{t.form.button}</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </section>

      {/* MAP */}
      <div className="contact-map">
        <iframe
          title="Mapa ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6619395624573!2d-99.19252342392444!3d19.435844545909763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20200a8e1fe23%3A0x3a5da133184022ad!2sAv.%20Homero%20527-Depto.%20701%20Piso%207%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1695492332321!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* FOOTER */}
      <footer className="footer-contact">
        <div className="footer-grid-contact">
          <div>
            <h3>{t.footer.aboutTitle}</h3>
            <p>{t.footer.aboutText}</p>
          </div>
          <div>
            <h3>{t.footer.linksTitle}</h3>
            <div className="footer-links-contact">
              <a href="/">{t.nav.home}</a>
              <a href="/about">{t.nav.about}</a>
              <a href="/services">{t.nav.services}</a>
            </div>
          </div>
          <div>
            <h3>{t.footer.contactTitle}</h3>
            <p>{t.info.phone}</p>
            <p>Email: info@ommagr.com</p>
          </div>
        </div>

        <div className="footer-bottom-contact">
          <div className="footer-socials-contact">
            <a href="https://wa.me/5215517442428" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@ommagroup" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://www.facebook.com/OltechMexico" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/grupooltech/#" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
          <div className="footer-logo-contact">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
        </div>
      </footer>
    </div>
  );
}
