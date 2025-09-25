// src/pages/PagesServices/ShoulderPage.jsx
import React, { useState } from "react";
import "./ShoulderPage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Imports de imágenes
import cabeza_humeral from "../../assets/images/servicesshoulder/cabeza_humeral.png";
import vastago_humeral from "../../assets/images/servicesshoulder/vastago_humeral.png";
import glenoideo from "../../assets/images/servicesshoulder/glenoideo.png";

import vastago_humeral_reversa from "../../assets/images/servicesshoulder/vastago_humeral_reversa.png";
import bandeja_humeral from "../../assets/images/servicesshoulder/bandeja_humeral.png";
import inserto_humeral from "../../assets/images/servicesshoulder/inserto_humeral.png";
import glenosfera from "../../assets/images/servicesshoulder/glenosfera.png";
import tornillo_reversa from "../../assets/images/servicesshoulder/tornillo_reversa.png";
import conector_metaglena from "../../assets/images/servicesshoulder/conector_metaglena.png";

import set_colocacion from "../../assets/images/servicesshoulder/set_colocacion.png";

export default function ShoulderPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sections = [
    {
      title: "Sistema Anatómico",
      products: [
        { img: cabeza_humeral, title: "Cabeza Humeral", desc: "Componente anatómico para reconstrucción total del hombro." },
        { img: vastago_humeral, title: "Vástago Humeral", desc: "Vástago diseñado para estabilidad y fijación segura." },
        { img: glenoideo, title: "Glenoideo", desc: "Componente anatómico para artroplastia primaria de hombro." },
      ],
    },
    {
      title: "Sistema Reverso",
      products: [
        { img: vastago_humeral_reversa, title: "Vástago Humeral Reverso", desc: "Estabilidad en artroplastias reversas de hombro." },
        { img: bandeja_humeral, title: "Bandeja Humeral", desc: "Soporte seguro para inserto humeral en sistemas reversos." },
        { img: inserto_humeral, title: "Inserto Humeral", desc: "Diseñado para máxima movilidad y reducción de fricción." },
        { img: glenosfera, title: "Glenosfera", desc: "Componente esférico para artroplastias reversas." },
        { img: tornillo_reversa, title: "Tornillo", desc: "Fijación confiable en el sistema reverso." },
        { img: conector_metaglena, title: "Conector Metaglena", desc: "Asegura la fijación del sistema reverso al hueso." },
      ],
    },
    {
      title: "Set de Colocación",
      products: [
        { img: set_colocacion, title: "Set de Colocación", desc: "Instrumental completo para procedimientos quirúrgicos de hombro." },
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
    <div className="shoulder-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-shoulder">
        <div className="logo">
          <img src="/src/assets/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links-shoulder">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services" className="btn-nav-shoulder">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero shoulder-hero">
        <h1>Implantes de Hombro</h1>
        <p>
          Sistemas anatómicos y reversos diseñados con innovación para ofrecer estabilidad,
          movilidad y resultados clínicos superiores.
        </p>
      </header>

      {/* SECCIONES DE PRODUCTOS */}
      <section className="shoulder-products-circles">
        <h2>Portafolio de Hombro</h2>
        <p className="intro-shoulder">
          Explora nuestras soluciones para artroplastia anatómica, reversa y set de colocación.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="shoulder-section">
            <h3 className="shoulder-section-title">{section.title}</h3>
            <motion.div
              className={`circle-row-shoulder ${section.products.length === 4 ? "row-4" : "row-3"}`}
              variants={containerVariants(idx * 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.products.map((item, i) => (
                <motion.div
                  key={i}
                  className="orbit-circle-shoulder"
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
      <div className="catalog-download-shoulder">
        <a href="/src/assets/catalog/Catálogo_hombro.pdf" download className="btn-download-shoulder">
          <FaDownload /> Descargar Catálogo Completo
        </a>
      </div>

      {/* MODAL DE PRODUCTO */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-overlay-shoulder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal-content-shoulder"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-shoulder"
                onClick={() => setSelectedProduct(null)}
              >
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-shoulder">Cotizar</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="shoulder-cta">
        <h2>¿Interesado en nuestros productos de hombro?</h2>
        <p>
          Ponte en contacto con nuestro equipo y descubre cómo podemos ayudarte a
          mejorar la calidad de vida de tus pacientes.
        </p>
        <a href="/contact" className="btn-contact-shoulder">Contáctanos</a>
      </section>

      {/* BACK */}
      <div className="back-link-shoulder">
        <Link to="/services"><FaArrowLeft /> Volver a Servicios</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-shoulder">
        <div className="footer-grid-shoulder">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>
              Somos un grupo dedicado a ofrecer un servicio excepcional con
              soluciones de calidad y confianza.
            </p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links-shoulder">
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
        <div className="footer-bottom-shoulder">
          <div className="footer-logo-shoulder">
            <img src="/src/assets/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
