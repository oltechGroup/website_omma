// src/pages/PagesServices/ElbowPage.jsx
import React, { useState } from "react";
import "./ElbowPage.css";
import { FaArrowLeft, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// imágenes
import upper_ulna from "../../assets/images/serviceselbow/upper_ulna.png";
import distal_humerus from "../../assets/images/serviceselbow/distal_humerus.png";
import half_axis_sleeve from "../../assets/images/serviceselbow/half_axis_sleeve_ulnar.png";
import fixation_screw from "../../assets/images/serviceselbow/fixation_screw.png";
import axes from "../../assets/images/serviceselbow/axes.png";

// traducciones
import es from "../../locales/pageservices/elbow/es";
import en from "../../locales/pageservices/elbow/en";
import pt from "../../locales/pageservices/elbow/pt";

export default function ElbowPage() {
  const { language } = useLanguage();
  const t = { es, en, pt }[language];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { img: upper_ulna, title: t.products.upper_ulna.title, desc: t.products.upper_ulna.desc },
    { img: distal_humerus, title: t.products.distal_humerus.title, desc: t.products.distal_humerus.desc },
    { img: half_axis_sleeve, title: t.products.half_axis_sleeve.title, desc: t.products.half_axis_sleeve.desc },
    { img: fixation_screw, title: t.products.fixation_screw.title, desc: t.products.fixation_screw.desc },
    { img: axes, title: t.products.axes.title, desc: t.products.axes.desc },
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
      {/* NAVBAR GLOBAL */}
      <Navbar />

      {/* HERO */}
      <header className="hero elbow-hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </header>

      {/* PRODUCTOS */}
      <section className="elbow-products-circles">
        <h2>{t.products.title}</h2>
        <p className="intro-elbow">{t.products.intro}</p>

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
        <a href="/catalog/Catálogo_codo.pdf" download className="btn-download-elbow">
          <FaDownload /> {t.catalog.download}
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
              <button className="modal-close-elbow" onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.desc}</p>
              <a href="/contact" className="circle-btn-elbow">{t.modal.quote}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="elbow-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <a href="/contact" className="btn-contact-elbow">{t.cta.button}</a>
      </section>

      {/* BACK */}
      <div className="back-link-elbow">
        <Link to="/services"><FaArrowLeft /> {t.back}</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer-elbow">
        <div className="footer-grid-elbow">
          <div>
            <h3>{t.footer.about.title}</h3>
            <p>{t.footer.about.desc}</p>
          </div>
          <div>
            <h3>{t.footer.links.title}</h3>
            <div className="footer-links-elbow">
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
        <div className="footer-bottom-elbow">
          <div className="footer-logo-elbow">
            <img src="/images/omma_white.png" alt="Logo OMMA" />
          </div>
          <p>{t.footer.bottom}</p>
        </div>
      </footer>
    </div>
  );
}
