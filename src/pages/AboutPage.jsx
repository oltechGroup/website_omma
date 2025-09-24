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
} from "react-icons/fa";

import hospital1 from "../assets/images/hospital_infantil.jpg";
import hospital2 from "../assets/images/issste_zaragoza.jpg";
import hospital3 from "../assets/images/hospital_queretaro.jpg";
import hospital4 from "../assets/images/grupo_farmafr.jpg";
import quirofano from "../assets/images/quirofano.jpg";

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="/src/assets/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros" className="btn-nav">Nosotros</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero about-hero">
        <h1>Calidad global, <span>confianza local</span></h1>
        <p>Innovación ortopédica sin fronteras.</p>
      </header>

      {/* MISIÓN Y VISIÓN */}
      <section className="mission-vision">
        <div className="card">
          <h2><FaBullseye className="icon" /> Misión</h2>
          <p>
            Desarrollar, fabricar y distribuir implantes y soluciones ortopédicas de última generación,
            combinando eficiencia productiva global con excelencia en innovación, trazabilidad y servicio clínico especializado.
          </p>
        </div>

        <div className="card">
          <h2><FaRocket className="icon" /> Visión</h2>
          <p>
            Ser reconocidos en los próximos 10 años como la marca líder en implantes ortopédicos de Latinoamérica y un referente
            global en innovación y accesibilidad, consolidando presencia en México, EE. UU., Europa y Asia.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="values">
        <h2>Nuestros valores</h2>
        <p className="values-hero">
          Innovación constante · Excelencia clínica · Confianza y ética · Accesibilidad · Sustentabilidad · Servicio humano
        </p>

        <div className="values-grid">
          <div className="value-item"><FaLightbulb className="val-icon" /> Innovación constante</div>
          <div className="value-item"><FaUserMd className="val-icon" /> Excelencia clínica</div>
          <div className="value-item"><FaHandsHelping className="val-icon" /> Confianza y ética</div>
          <div className="value-item"><FaCheckCircle className="val-icon" /> Accesibilidad</div>
          <div className="value-item"><FaLeaf className="val-icon" /> Sustentabilidad</div>
          <div className="value-item"><FaUsers className="val-icon" /> Servicio humano</div>
        </div>
      </section>

      {/* POSICIONAMIENTO */}
      <section className="positioning">
        <blockquote>
          “Somos la opción que combina ingeniería de clase mundial, costos eficientes y servicio local confiable,
          ofreciendo a los médicos y hospitales la seguridad de un aliado estratégico que entiende sus retos clínicos y financieros.”
        </blockquote>
      </section>

      {/* PERFIL EMPRESARIAL */}
      <section className="profile profile-highlight">
        <h2>Perfil Empresarial</h2>
        <p>
          OMMA MÉXICO GR, S.A. DE C.V., es una empresa que brinda servicios integrales y soluciones con inteligencia tecnológica y talento humano.
        </p>
        <h3>Objeto Social</h3>
        <p>
          Prestación de servicios profesionales, administración, operación, construcción, equipamiento, mejora y acondicionamiento de locales y construcciones.
        </p>
      </section>

      {/* EXPERIENCIA */}
      <section
        className="experience"
        style={{
          backgroundImage: `linear-gradient(rgba(13,61,60,0.85), rgba(13,61,60,0.85)), url(${quirofano})`
        }}
      >
        <h2>Experiencia</h2>
        <ul>
          <li>Publicidad en Banners, Backs e Impresos</li>
          <li>Insumos de Cafetería</li>
          <li>Coffee Break, Box Lunch</li>
          <li>Escenografía y Audiovisuales</li>
          <li>Transporte</li>
        </ul>
      </section>

      {/* CLIENTES */}
      <section className="clients">
        <h2>Nuestros Clientes</h2>
        <div className="client-card">
          <div className="client-image">
            <img src={hospital1} alt="Hospital Infantil de México Federico Gómez" />
          </div>
          <div className="client-info">
            <h3>Hospital Infantil de México “Federico Gómez”</h3>
            <p><strong>Dirección:</strong> Calle Dr. Márquez 162, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX</p>
            <p><strong>Tel:</strong> +52 55 5228 9917</p>
            <a href="http://himfg.com.mx/" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>
        </div>

        <div className="client-card">
          <div className="client-image">
            <img src={hospital2} alt="ISSSTE Hospital Regional Ignacio Zaragoza" />
          </div>
          <div className="client-info">
            <h3>ISSSTE Hospital Regional “Gral. Ignacio Zaragoza”</h3>
            <p><strong>Dirección:</strong> Calz. Ignacio Zaragoza 1711, Iztapalapa, 09220 Ciudad de México, CDMX</p>
            <p><strong>Tel:</strong> +52 55 5716 5200</p>
            <a href="http://www.issste.gob.mx/" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>
        </div>

        <div className="client-card">
          <div className="client-image">
            <img src={hospital3} alt="Hospital General de Querétaro" />
          </div>
          <div className="client-info">
            <h3>Hospital General de Querétaro</h3>
            <p><strong>Dirección:</strong> Av. 5 de Febrero 101, Los Virreyes, 76175 Santiago de Querétaro, Qro.</p>
            <p><strong>Tel:</strong> +52 442 101 2900</p>
          </div>
        </div>

        <div className="client-card">
          <div className="client-image">
            <img src={hospital4} alt="Grupo Farma FR" />
          </div>
          <div className="client-info">
            <h3>Grupo Farma FR S.A. de C.V.</h3>
            <p><strong>Dirección:</strong> Libramiento Sur Poniente, Km 13, No. 261, Los Ángeles, 76902, Qro.</p>
            <p><strong>Tel:</strong> +52 442 225 3435</p>
            <a href="https://grupofarmafr.com/" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>Somos un grupo dedicado a ofrecer un servicio excepcional con soluciones de calidad y confianza.</p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links">
              <a href="/">Inicio</a>
              <a href="/services">Servicios</a>
              <a href="/contact">Contactanos</a>
            </div>
          </div>
          <div>
            <h3>Información de Contacto</h3>
            <p>Tel: 55 1744 2428</p>
            <p>Email: contacto@ommagroup.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/src/assets/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
