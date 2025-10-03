// src/pages/PagesServices/ShoulderPage.jsx
import React, { useState } from "react";
import "./ShoulderPage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// Importamos traducciones
import es from "../../locales/pageservices/shoulder/es";
import en from "../../locales/pageservices/shoulder/en";
import pt from "../../locales/pageservices/shoulder/pt";

// Imágenes
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
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  const sections = [
    {
      title: t.sections.anatomical.title,
      products: [
        { img: cabeza_humeral, title: t.sections.anatomical.products[0].title, desc: t.sections.anatomical.products[0].desc },
        { img: vastago_humeral, title: t.sections.anatomical.products[1].title, desc: t.sections.anatomical.products[1].desc },
        { img: glenoideo, title: t.sections.anatomical.products[2].title, desc: t.sections.anatomical.products[2].desc },
      ],
    },
    {
      title: t.sections.reverse.title,
      products: [
        { img: vastago_humeral_reversa, title: t.sections.reverse.products[0].title, desc: t.sections.reverse.products[0].desc },
        { img: bandeja_humeral, title: t.sections.reverse.products[1].title, desc: t.sections.reverse.products[1].desc },
        { img: inserto_humeral, title: t.sections.reverse.products[2].title, desc: t.sections.reverse.products[2].desc },
        { img: glenosfera, title: t.sections.reverse.products[3].title, desc: t.sections.reverse.products[3].desc },
        { img: tornillo_reversa, title: t.sections.reverse.products[4].title, desc: t.sections.reverse.products[4].desc },
        { img: conector_metaglena, title: t.sections.reverse.products[5].title, desc: t.sections.reverse.products[5].desc },
      ],
    },
    {
      title: t.sections.set.title,
      products: [
        { img: set_colocacion, title: t.sections.set.products[0].title, desc: t.sections.set.products[0].desc },
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
      <Navbar />

      {/* HERO */}
      <header className="hero shoulder-hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* SECCIONES */}
      <section className="shoulder-products-circles">
        <h2>{t.portfolio.title}</h2>
        <p className="intro-shoulder">{t.portfolio.subtitle}</p>

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
        <a href="/catalog/.pdf" download className="btn-download-shoulder">
          <FaDownload /> {t.catalog}
        </a>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div className="modal-overlay-shoulder" onClick={() => setSelectedProduct(null)}>
            <motion.div className="modal-content-shoulder" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-shoulder" onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-shoulder">{t.quote}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="shoulder-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <a href="/contact" className="btn-contact-shoulder">{t.cta.button}</a>
      </section>

      {/* BACK */}
      <div className="back-link-shoulder">
        <Link to="/services"><FaArrowLeft /> {t.back}</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-shoulder">
        <div className="footer-grid-shoulder">
          <div>
            <h3>{t.footer.about.title}</h3>
            <p>{t.footer.about.desc}</p>
          </div>
          <div>
            <h3>{t.footer.links.title}</h3>
            <div className="footer-links-shoulder">
              <a href="/">{t.footer.links.home}</a>
              <a href="/about">{t.footer.links.about}</a>
              <a href="/services">{t.footer.links.services}</a>
            </div>
          </div>
          <div>
            <h3>{t.footer.contact.title}</h3>
            <p>{t.footer.contact.phone}</p>
            <p>{t.footer.contact.email}</p>
          </div>
        </div>
        <div className="footer-bottom-shoulder">
          <div className="footer-logo-shoulder">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.bottom}</p>
        </div>
      </footer>
    </div>
  );
}
