// src/pages/PagesServices/SportsMedicinePage.jsx
import React, { useState } from "react";
import "./SportsMedicinePage.css";
import { FaArrowLeft, FaDumbbell, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// Traducciones
import es from "../../locales/pageservices/sports/es";
import en from "../../locales/pageservices/sports/en";
import pt from "../../locales/pageservices/sports/pt";

// Imágenes
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
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const sections = [
    {
      title: t.sections.visualization.title,
      products: [
        { img: torre_artroscopia, title: t.sections.visualization.products[0].title, desc: t.sections.visualization.products[0].desc },
        { img: tuberia_bomba, title: t.sections.visualization.products[1].title, desc: t.sections.visualization.products[1].desc },
        { img: arthoscopy_main, title: t.sections.visualization.products[2].title, desc: t.sections.visualization.products[2].desc },
      ],
    },
    {
      title: t.sections.surgical.title,
      products: [
        { img: tornillo_interferencia, title: t.sections.surgical.products[0].title, desc: t.sections.surgical.products[0].desc },
        { img: placa_puddu, title: t.sections.surgical.products[1].title, desc: t.sections.surgical.products[1].desc },
        { img: microfracturadores, title: t.sections.surgical.products[2].title, desc: t.sections.surgical.products[2].desc },
        { img: charola_pinzas, title: t.sections.surgical.products[3].title, desc: t.sections.surgical.products[3].desc },
      ],
    },
    {
      title: t.sections.accessories.title,
      products: [
        { img: trimano_beach, title: t.sections.accessories.products[0].title, desc: t.sections.accessories.products[0].desc },
        { img: silla_playa, title: t.sections.accessories.products[1].title, desc: t.sections.accessories.products[1].desc },
        { img: charola_rodill, title: t.sections.accessories.products[2].title, desc: t.sections.accessories.products[2].desc },
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
    <div className="sports-wrapper">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <header className="hero sports-hero">
        <h1><FaDumbbell /> {t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* PRODUCTOS */}
      <section className="sports-products-circles">
        <h2>{t.products.title}</h2>
        <p className="intro-sport">{t.products.subtitle}</p>

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
          <FaDownload /> {t.catalog.download}
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
              <a href="/contact" className="circle-btn-sport">{t.modal.quote}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="sports-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <a href="/contact" className="btn-contact-sport">{t.cta.button}</a>
      </section>

      {/* BACK */}
      <div className="back-link-sport">
        <Link to="/services"><FaArrowLeft /> {t.back}</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-sport">
        <div className="footer-grid-sport">
          <div>
            <h3>{t.footer.about.title}</h3>
            <p>{t.footer.about.desc}</p>
          </div>
          <div>
            <h3>{t.footer.links.title}</h3>
            <div className="footer-links-sport">
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
        <div className="footer-bottom-sport">
          <div className="footer-logo-sport">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.bottom}</p>
        </div>
      </footer>
    </div>
  );
}
