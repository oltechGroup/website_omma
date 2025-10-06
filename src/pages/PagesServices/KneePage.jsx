// src/pages/PagesServices/KneePage.jsx
import React, { useState } from "react";
import "./KneePage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// Traducciones
import es from "../../locales/pageservices/knee/es";
import en from "../../locales/pageservices/knee/en";
import pt from "../../locales/pageservices/knee/pt";

// Imágenes
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
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  // Asignar imágenes a productos de traducciones
  const sections = t.sections.map((section) => ({
    ...section,
    products: section.products.map((p) => ({
      ...p,
      img: {
        femoral_primary,
        tibial_insert,
        tibial_baseplate,
        patella,
        femoral_revision,
        tibial_revision,
        stems,
        augments,
        wedges,
        materials,
      }[p.img],
    })),
  }));

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
      {/* NAVBAR GLOBAL */}
      <Navbar />

      {/* HERO */}
      <header className="hero knee-hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* SECCIONES */}
      <section className="knee-products-circles">
        <h2>{t.portfolio.title}</h2>
        <p className="intro-knee">{t.portfolio.subtitle}</p>

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
        <a href="/catalog/Catalogo_rodilla.pdf" download className="btn-download-knee">
          <FaDownload /> {t.catalog.download}
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
              <a href="/contact" className="circle-btn-knee">{t.modal.quote}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="knee-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <a href="/contact" className="btn-contact-knee">{t.cta.button}</a>
      </section>

      {/* BACK */}
      <div className="back-link-knee">
        <Link to="/services"><FaArrowLeft /> {t.back}</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-knee">
        <div className="footer-grid-knee">
          <div>
            <h3>{t.footer.about.title}</h3>
            <p>{t.footer.about.desc}</p>
          </div>
          <div>
            <h3>{t.footer.links.title}</h3>
            <div className="footer-links-knee">
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
        <div className="footer-bottom-knee">
          <div className="footer-logo-knee">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.bottom}</p>
        </div>
      </footer>
    </div>
  );
}
