
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

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7b901no", // ✅ Tu Service ID
        "template_l0otpof", // ✅ Tu Template ID
        form.current,
        "z5uJM9St_tSg6k3ul" // ✅ Tu Public Key
      )
      .then(
        () => {
          setStatus("✅ Mensaje enviado con éxito.");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Error al enviar: " + error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-contact">
        <div className="logo-contact">
          <img src="/src/assets/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links-contact">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Nosotros</a>
          </li>
          <li>
            <a href="/services">Servicios</a>
          </li>
          <li>
            <a href="/contact" className="btn-nav-contact">
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero-contact">
        <h1>
          Conectando <span>contigo</span> sin fronteras
        </h1>
        <p>Atención personalizada y asesoría en la elección de productos.</p>
      </header>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        {/* Tarjeta Izquierda */}
        <div className="info-card-contact">
          <h2>
            <FaMapMarkerAlt className="icon" /> Dirección
          </h2>
          <p>
            Av. Homero 527, Depto. 701 Piso 7
            <br />
            Polanco V Secc, Miguel Hidalgo
            <br />
            11560 Ciudad de México, CDMX
          </p>

          <h2>
            <FaPhoneAlt className="icon" /> Teléfono
          </h2>
          <p>55 1744 2428</p>

          <h2>Redes sociales</h2>
          <div className="social-icons-contact">
            <a
              href="https://www.facebook.com/OltechMexico"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://wa.me/5215517442428"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://www.tiktok.com/@ommagroup"
              target="_blank"
              rel="noreferrer"
              className="tiktok"
            >
              <FaTiktok /> TikTok
            </a>
            <a
              href="https://www.instagram.com/grupooltech/#"
              target="_blank"
              rel="noreferrer"
              className="instagram"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="form-card-contact" id="formulario">
          <h2>Escríbenos</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              required
            />

            <label>Correo o teléfono</label>
            <input
              type="text"
              name="email"
              placeholder="Escribe tu correo o teléfono"
              required
            />

            <label>Asunto</label>
            <input type="text" name="subject" placeholder="Escribe el asunto" />

            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              rows="4"
              required
            />

            <button type="submit">Enviar Mensaje</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </section>

      {/* MAPA */}
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
            <h3>Acerca de nosotros</h3>
            <p>
              Somos un grupo dedicado a ofrecer un servicio excepcional con
              soluciones de calidad y confianza.
            </p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links-contact">
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

        <div className="footer-bottom-contact">
          <div className="footer-socials-contact">
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
          <div className="footer-logo-contact">
            <img src="/src/assets/images/omma_white.png" alt="Logo OMMA" />
          </div>
        </div>
      </footer>
    </div>
  );
}

