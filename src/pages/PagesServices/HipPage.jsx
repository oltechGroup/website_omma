// src/pages/PagesServices/HipPage.jsx
import React, { useState } from "react";
import "./HipPage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// Traducciones
import es from "../../locales/pageservices/hip/es";
import en from "../../locales/pageservices/hip/en";
import pt from "../../locales/pageservices/hip/pt";

// Imágenes
import vastagoFemoral from "../../assets/images/serviceship/vastago-femoral-115-180.jpg";
import vastago130 from "../../assets/images/serviceship/vastago-130-100-130.jpg";
import vastago150 from "../../assets/images/serviceship/vastago-150-112-128.jpg";
import copa58 from "../../assets/images/serviceship/copa-acetabular-58-ceramica-28-36.png";
import copa46 from "../../assets/images/serviceship/copa-acetabular-46-40-72.jpg";
import vastago160 from "../../assets/images/serviceship/vastago-160-curvo-recto.jpg";
import vastagoBC2 from "../../assets/images/serviceship/vastago-largo-bc2.jpg";
import vastagoBC4 from "../../assets/images/serviceship/vastago-largo-bc4.jpg";
import copaJ from "../../assets/images/serviceship/copa-acetabular-j-42-62.jpg";
import cabezaBipolar from "../../assets/images/serviceship/cabeza-bipolar-38-54.jpg";
import cabezaT from "../../assets/images/serviceship/cabeza-femoral-t-22-36.jpg";
import cabezaBiolox from "../../assets/images/serviceship/cabeza-ceramica-biolox-32-36.png";

export default function HipPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  // Asignación de imágenes según key del JSON
  const imageMap = {
    vastagoFemoral,
    vastago130,
    vastago150,
    copa58,
    copa46,
    vastago160,
    vastagoBC2,
    vastagoBC4,
    copaJ,
    cabezaBipolar,
    cabezaT,
    cabezaBiolox,
  };

  const sections = t.sections.map((section) => ({
    ...section,
    products: section.products.map((p) => ({
      ...p,
      img: imageMap[p.img],
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
    <div className="hip-wrapper">
      <Navbar />

      {/* HERO */}
      <header className="hero hip-hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* SECCIONES */}
      <section className="hip-products-circles">
        <h2>{t.portfolio.title}</h2>
        <p className="intro-hip">{t.portfolio.subtitle}</p>

        {sections.map((section, idx) => (
          <div key={idx} className="hip-section">
            <h3 className="hip-section-title">{section.title}</h3>
            <motion.div
              className={`circle-row-hip ${section.products.length === 4 ? "row-4" : "row-3"}`}
              variants={containerVariants(idx * 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.products.map((item, i) => (
                <motion.div
                  key={i}
                  className="orbit-circle-hip"
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

      {/* DESCARGAR CATÁLOGO */}
      <div className="catalog-download-hip">
        <a href="/catalog/Catalogo_cadera.pdf" download className="btn-download-hip">
          <FaDownload /> {t.catalog.download}
        </a>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div className="modal-overlay-hip" onClick={() => setSelectedProduct(null)}>
            <motion.div className="modal-content-hip" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-hip" onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-hip">{t.modal.quote}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="hip-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <a href="/contact" className="btn-contact-hip">{t.cta.button}</a>
      </section>

      {/* BACK */}
      <div className="back-link-hip">
        <Link to="/services"><FaArrowLeft /> {t.back}</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-hip">
        <div className="footer-grid-hip">
          <div>
            <h3>{t.footer.about.title}</h3>
            <p>{t.footer.about.desc}</p>
          </div>
          <div>
            <h3>{t.footer.links.title}</h3>
            <div className="footer-links-hip">
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
        <div className="footer-bottom-hip">
          <div className="footer-logo-hip">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.bottom}</p>
        </div>
      </footer>
    </div>
  );
}
