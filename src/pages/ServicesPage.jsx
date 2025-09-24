import React from "react";
import "./ServicesPage.css";
import {
  FaBone,
  FaRunning,
  FaUserMd,
  FaDumbbell,
  FaDownload,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="services-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="/src/assets/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/services" className="btn-nav">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero services-hero">
        <h1>Nuestros <span>Servicios</span></h1>
        <p>Cirugía ortopédica, implantes de última generación y medicina deportiva.</p>
      </header>

      {/* SERVICIOS CLÍNICOS */}
      <section className="clinical-services">
        <h2>🩺 Servicios Clínicos y Quirúrgicos</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaBone className="icon" />
            <h3>Hombro</h3>
            <p>Técnicas avanzadas para lesiones y reemplazos de hombro.</p>
          </div>
          <div className="service-card">
            <FaUserMd className="icon" />
            <h3>Codo</h3>
            <p>Prótesis y tratamientos especializados para codo.</p>
          </div>
          <div className="service-card">
            <FaRunning className="icon" />
            <h3>Rodilla</h3>
            <p>Reemplazos totales y revisiones de rodilla.</p>
          </div>
          <div className="service-card">
            <FaBone className="icon" />
            <h3>Cadera</h3>
            <p>Revisiones y técnicas modernas en cirugía de cadera.</p>
          </div>
          <div className="service-card">
            <FaDumbbell className="icon" />
            <h3>Medicina Deportiva</h3>
            <p>Soluciones innovadoras para atletas y lesiones de alto rendimiento.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="products">
        <h2>📂 Portafolio de Productos</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="/src/assets/images/codo-protesis.jpg" alt="Prótesis de Codo" />
            <h3>Prótesis de Codo Press Fit</h3>
            <a
              href="/src/assets/catalogos/CATALOGO_PROTESIS_CODO_PRESS_FIT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
            >
              <FaDownload /> Descargar Catálogo
            </a>
          </div>
          {/* Aquí puedes agregar más productos con la misma estructura */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>
              Somos un grupo dedicado a ofrecer un servicio excepcional con soluciones de calidad y confianza.
            </p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links">
              <a href="/">Inicio</a>
              <a href="/nosotros">Nosotros</a>
              <a href="/contact">Contáctanos</a>
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
            <img src="/src/assets/images/omma_white .png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
