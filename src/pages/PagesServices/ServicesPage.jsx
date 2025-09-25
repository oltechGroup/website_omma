// src/pages/PagesServices/ServicesPage.jsx
import React from "react";
import "./ServicesPage.css";
import {
  FaBone,
  FaRunning,
  FaUserMd,
  FaDumbbell,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="services-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-services">
        <div className="logo">
          <img src="/src/assets/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links-services">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services" className="btn-nav">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero services-hero">
        <h1>
          Nuestros <span>Servicios</span>
        </h1>
        <p>
          Cirugía ortopédica, implantes de última generación y medicina deportiva.
        </p>
      </header>

      {/* SERVICIOS CLÍNICOS */}
      <section className="clinical-services">
        <h2> Servicios Clínicos y Quirúrgicos</h2>
        <div className="services-grid">
          <a href="/shoulder" className="service-card">
            <FaBone className="icon" />
            <h3>Hombro</h3>
            <p>Técnicas avanzadas para lesiones y reemplazos de hombro.</p>
          </a>
          <a href="/elbow" className="service-card">
            <FaUserMd className="icon" />
            <h3>Codo</h3>
            <p>Prótesis y tratamientos especializados para codo.</p>
          </a>
          <a href="/knee" className="service-card">
            <FaRunning className="icon" />
            <h3>Rodilla</h3>
            <p>Reemplazos totales y revisiones de rodilla.</p>
          </a>
          <a href="/hip" className="service-card">
            <FaBone className="icon" />
            <h3>Cadera</h3>
            <p>Revisiones y técnicas modernas en cirugía de cadera.</p>
          </a>
          <a href="/sports-medicine" className="service-card">
            <FaDumbbell className="icon" />
            <h3>Medicina Deportiva</h3>
            <p>Soluciones innovadoras para atletas y lesiones de alto rendimiento.</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-services">
        <div className="footer-grid-services">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>
              Somos un grupo dedicado a ofrecer un servicio excepcional con soluciones de calidad y confianza.
            </p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links-services">
              <a href="/">Inicio</a>
              <a href="/about">Nosotros</a>
              <a href="/contact">Contáctanos</a>
            </div>
          </div>
          <div>
            <h3>Información de Contacto</h3>
            <p>Tel: 55 1744 2428</p>
            <p>Email: contacto@ommagroup.com</p>
          </div>
        </div>

        <div className="footer-bottom-services">
          <div className="footer-logo-services">
            <img src="/src/assets/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
