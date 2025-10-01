// src/pages/PagesServices/SportsMedicinePage.jsx
import React, { useState } from "react";
import "./SportsMedicinePage.css";
import { FaArrowLeft, FaDumbbell, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Imágenes (ajustadas rutas relativas a assets)
import torre_artroscopia from "../../assets/images/servicessport/torre_artroscopia.png";
import tuberia_bomba from "../../assets/images/servicessport/tuberia_bomba.png";
import tornillo_interferencia from "../../assets/images/servicessport/tornillo_interferencia.png";
import placa_puddu from "../../assets/images/servicessport/placa_puddu.png";
import trimano_beach from "../../assets/images/servicessport/trimano_beach.png";
import microfracturadores from "../../assets/images/servicessport/microfracturadores.png";
import silla_playa from "../../assets/images/servicessport/silla_playa.png";
import charola_rodill from "../../assets/images/servicessport/charola_rodill.png";
import charola_pinzas from "../../assets/images/servicessport/charola_pinzas.png";
import arthoscopy_main from "../../assets/images/servicessport/arthoscopy_main.png";

export default function SportsMedicinePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sections = [
    {
      title: "Sistema de Visualización",
      products: [
        { img: torre_artroscopia, title: "Torre de artroscopia 4K", desc: "Visualización quirúrgica de alta definición para precisión en cada procedimiento." },
        { img: tuberia_bomba, title: "Tubería de bomba artroscópica", desc: "Instrumental esencial y confiable para procedimientos de mínima invasión." },
        { img: arthoscopy_main, title: "ARTHOSCOPY MAIN PUMP TUBING", desc: "Tubería principal para bomba de artroscopia, confiable y duradera." },
      ],
    },
    {
      title: "Sistema Quirúrgico",
      products: [
        { img: tornillo_interferencia, title: "Tornillos de interferencia", desc: "Fijación segura y duradera en reconstrucciones de ligamentos y procedimientos deportivos." },
        { img: placa_puddu, title: "Placas Puddu Femorales (Acero inoxidable)", desc: "Placas de alta calidad diseñadas para osteotomías femorales precisas." },
        { img: microfracturadores, title: "Microfracturadores", desc: "Instrumentos diseñados para procedimientos mínimamente invasivos en rodilla." },
        { img: charola_pinzas, title: "Charola de Pinzas", desc: "Charola quirúrgica con instrumental especializado de precisión." },
      ],
    },
    {
      title: "Sistema de Accesorios",
      products: [
        { img: trimano_beach, title: "TRIMANO BEACH CHAIR KIT", desc: "Sistema confiable para posicionamiento quirúrgico en procedimientos de hombro." },
        { img: silla_playa, title: "Silla de playa", desc: "Accesorio quirúrgico ergonómico para intervenciones ortopédicas." },
        { img: charola_rodill, title: "Charola de Rodilla completa (LCA + GrafPro)", desc: "Kit integral para reconstrucciones de ligamento cruzado anterior." },
      ],
    },
  ];

  // Animaciones
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
    <div className="sports-wrapper">
      {/* NAVBAR */}
      <nav className="navbar-sport">
        <div className="logo">
          <img src="/images/omma.svg" alt="Logo OMMA" />
        </div>
        <ul className="nav-links-sport">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services" className="btn-nav-sport">Servicios</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero sports-hero">
        <h1><FaDumbbell /> Medicina Deportiva</h1>
        <p>Soluciones innovadoras en artroscopia para atletas y pacientes con lesiones de alto rendimiento.</p>
      </header>

      {/* PRODUCTOS */}
      <section className="sports-products-circles">
        <h2>Portafolio de Medicina Deportiva</h2>
        <p className="intro-sport">Explora nuestras soluciones en sistemas de visualización, quirúrgicos y accesorios especializados.</p>

        {sections.map((section, idx) => (
          <div key={idx} className="sports-section">
            <h3 className="sports-section-title">{section.title}</h3>
            <motion.div
              className={`circle-row-sport ${section.products.length === 4 ? "row-4" : "row-3"}`}
              variants={containerVariants(idx * 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.products.map((item, i) => (
                <motion.div
                  key={i}
                  className="orbit-circle-sport"
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
      <div className="catalog-download-sport">
        <a href="/catalog/Catálogo_Artroscopia.pdf" download className="btn-download-sport">
          <FaDownload /> Descargar Catálogo Completo
        </a>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div className="modal-overlay-sport" onClick={() => setSelectedProduct(null)}>
            <motion.div className="modal-content-sport" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-sport" onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-sport">Cotizar</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="sports-cta">
        <h2>¿Interesado en nuestros productos?</h2>
        <p>Ponte en contacto con nuestro equipo y descubre cómo podemos ayudarte a mejorar tus resultados clínicos.</p>
        <a href="/contact" className="btn-contact-sport">Contáctanos</a>
      </section>

      {/* BACK */}
      <div className="back-link-sport">
        <Link to="/services"><FaArrowLeft /> Volver a Servicios</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-sport">
        <div className="footer-grid-sport">
          <div>
            <h3>Acerca de nosotros</h3>
            <p>Somos un grupo dedicado a ofrecer un servicio excepcional con soluciones de calidad y confianza.</p>
          </div>
          <div>
            <h3>Acerca de</h3>
            <div className="footer-links-sport">
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
        <div className="footer-bottom-sport">
          <div className="footer-logo-sport">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>© 2025 OMMA Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
