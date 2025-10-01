// src/pages/PagesServices/KneePage.jsx
import React, { useState } from "react";
import "./KneePage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Imágenes de productos (se quedan en assets)
import femoral_primary from "../../assets/images/servicesknee/femoral_primary.png";
import tibial_insert from "../../assets/images/servicesknee/tibial_insert.png";
import tibial_baseplate from "../../assets/images/servicesknee/tibial_baseplate.png";
import patella from "../../assets/images/servicesknee/patella.png";
import femoral_revision from "../../assets/images/servicesknee/femoral_revision.png";
import tibial_revision from "../../assets/images/servicesknee/tibial_revision.png";
import stems from "../../assets/images/servicesknee/stems.png";
import augments from "../../assets/images/servicesknee/augments.png";
import wedges from "../../assets/images/servicesknee/wedges.png";
import materials from "../../assets/images/servicesknee/materials.png";

export default function KneePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sections = [
    {
      title: "Sistema Primario",
      products: [
        { img: femoral_primary, title: "Componente Femoral Primario", desc: "Diseñado para ofrecer estabilidad y movilidad óptima en artroplastia primaria de rodilla." },
        { img: tibial_insert, title: "Insertos Tibiales", desc: "Componentes diseñados para mejorar la congruencia articular y la durabilidad." },
        { img: tibial_baseplate, title: "Baseplate Tibial", desc: "Base sólida que asegura fijación confiable y duradera." },
        { img: patella, title: "Patela", desc: "Diseño anatómico que asegura un seguimiento suave y natural." },
      ],
    },
    {
      title: "Sistema de Revisión",
      products: [
        { img: femoral_revision, title: "Componente Femoral de Revisión", desc: "Diseñado para ofrecer soporte en casos de revisiones complejas." },
        { img: tibial_revision, title: "Componente Tibial de Revisión", desc: "Asegura estabilidad y resistencia en situaciones de alta demanda." },
        { img: stems, title: "Stems", desc: "Opciones modulares para mejorar la fijación y la adaptación anatómica." },
        { img: augments, title: "Augments", desc: "Componentes que permiten adaptarse a defectos óseos complejos." },
      ],
    },
    {
      title: "Componentes y Materiales",
      products: [
        { img: wedges, title: "Wedges", desc: "Diseñados para restaurar alineación y compensar defectos óseos." },
        { img: materials, title: "Materiales Avanzados", desc: "Superficies y aleaciones que maximizan la durabilidad del implante." },
      ],
    },
  ];

  const containerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="knee-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-knee">
        <div className="logo">
          <img src="/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links-knee">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services" className="btn-nav-knee">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero knee-hero">
        <h1>Implantes de Rodilla</h1>
        <p>Sistemas primarios y de revisión diseñados con tecnología avanzada para garantizar resultados clínicos superiores.</p>
      </header>

      {/* SECCIONES */}
      <section className="knee-products-circles">
        <h2>Portafolio de Rodilla</h2>
        <p className="intro-knee">
          Explora nuestras soluciones para artroplastia primaria, revisiones y componentes especializados.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="knee-section">
            <h3 className="knee-section-title">{section.title}</h3>
            <motion.div
              className={`circle-row-knee ${section.products.length === 4 ? "row-4" : "row-3"}`}
              variants={containerVariants(idx * 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.products.map((item, i) => (
                <motion.div
                  key={i}
                  className="orbit-circle-knee"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  onClick={() => setSelectedProduct(item)}
                >
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>

      {/* BOTÓN DESCARGAR CATÁLOGO */}
      <div className="catalog-download-knee">
        <a href="/catalog/omma-knee.pdf" download className="btn-download-knee">
          <FaDownload /> Descargar Catálogo Completo
        </a>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div className="modal-overlay-knee" onClick={() => setSelectedProduct(null)}>
            <motion.div className="modal-content-knee" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-knee" onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-knee">Cotizar</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="knee-cta">
        <h2>¿Interesado en nuestros productos de rodilla?</h2>
        <p>Ponte en contacto con nuestro equipo y descubre cómo podemos ayudarte a mejorar tus resultados clínicos.</p>
        <a href="/contact" className="btn-contact-knee">Contáctanos</a>
      </section>

      {/* BACK */}
      <div className="back-link-knee">
        <Link to="/services"><FaArrowLeft /> Volver a Servicios</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-knee">
        <div className="footer-grid-knee">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>Somos un grupo dedicado a ofrecer un servicio excepcional con soluciones de calidad y confianza.</p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links-knee">
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
        <div className="footer-bottom-knee">
          <div className="footer-logo-knee">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
