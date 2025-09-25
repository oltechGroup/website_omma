// src/pages/PagesServices/ElbowPage.jsx
import React, { useState } from "react";
import "./ElbowPage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import upper_ulna from "../../assets/images/serviceselbow/upper_ulna.png";
import distal_humerus from "../../assets/images/serviceselbow/distal_humerus.png";
import half_axis_sleeve from "../../assets/images/serviceselbow/half_axis_sleeve_ulnar.png";
import fixation_screw from "../../assets/images/serviceselbow/fixation_screw.png";
import axes from "../../assets/images/serviceselbow/axes.png";

export default function ElbowPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { img: upper_ulna, title: "Upper Ulna", desc: "Diseñado para restaurar la anatomía y funcionalidad del cúbito proximal." },
    { img: distal_humerus, title: "Distal Humerus", desc: "Componente anatómico que asegura estabilidad y movilidad en la articulación del codo." },
    { img: half_axis_sleeve, title: "Half Axis Sleeve (Ulnar Cushion Block)", desc: "Elemento especializado para amortiguar y optimizar el movimiento del codo." },
    { img: fixation_screw, title: "Fixation Screw", desc: "Tornillos de fijación confiables que proporcionan seguridad y durabilidad." },
    { img: axes, title: "Axes", desc: "Ejes diseñados para una correcta alineación y soporte en el sistema protésico." },
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
    <div className="elbow-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-elbow">
        <div className="logo">
          <img src="/src/assets/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links-elbow">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services" className="btn-nav-elbow">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero elbow-hero">
        <h1>Implantes de Codo</h1>
        <p>
          Soluciones avanzadas en prótesis de codo diseñadas para restaurar
          movilidad, estabilidad y mejorar la calidad de vida de los pacientes.
        </p>
      </header>

      {/* PRODUCTOS */}
      <section className="elbow-products-circles">
        <h2>Portafolio de Codo</h2>
        <p className="intro-elbow">
          Descubre nuestros componentes especializados para artroplastia total y parcial de codo.
        </p>

        <motion.div
          className={`circle-row-elbow ${products.length === 4 ? "row-4" : "row-3"}`}
          variants={containerVariants(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((item, i) => (
            <motion.div
              key={i}
              className="orbit-circle-elbow"
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
      </section>

      {/* BOTÓN DESCARGAR CATÁLOGO */}
      <div className="catalog-download-elbow">
        <a href="/src/assets/catalog/Catálogo_codo.pdf" download className="btn-download-elbow">
          <FaDownload /> Descargar Catálogo Completo
        </a>
      </div>

      {/* MODAL DE PRODUCTO */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-overlay-elbow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal-content-elbow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-elbow"
                onClick={() => setSelectedProduct(null)}
              >
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-elbow">Cotizar</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="elbow-cta">
        <h2>¿Interesado en nuestros implantes de codo?</h2>
        <p>
          Ponte en contacto con nuestro equipo y descubre cómo nuestras soluciones
          pueden ayudarte a lograr resultados clínicos excepcionales.
        </p>
        <a href="/contact" className="btn-contact-elbow">Contáctanos</a>
      </section>

      {/* BACK */}
      <div className="back-link-elbow">
        <Link to="/services"><FaArrowLeft /> Volver a Servicios</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-elbow">
        <div className="footer-grid-elbow">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>
              Somos un grupo dedicado a ofrecer un servicio excepcional con
              soluciones de calidad y confianza.
            </p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links-elbow">
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
        <div className="footer-bottom-elbow">
          <div className="footer-logo-elbow">
            <img src="/src/assets/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
