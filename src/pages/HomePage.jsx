

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="homepage-container">
      
      <nav className="navbar">
        <div className="nav-logo">Omma Group</div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contactanos</Link></li>
        </ul>
      </nav>

      
      <header className="hero-section">
        <div className="hero-content">
          <h1>Innovación sin fronteras.</h1>
          <p>
            Te ofrecemos soluciones tecnológicas de vanguardia para impulsar tu negocio.
            Desde el diseño hasta la implementación, estamos contigo.
          </p>
          <button className="cta-button">Empezar ahora</button>
        </div>
        <div className="hero-image">
          
          <div className="placeholder-image"></div>
        </div>
      </header>

      
      <section className="about-us-section">
        <h2>Acerca de nosotros</h2>
        <div className="about-cards">
          <div className="card">
            <h3>Misión</h3>
            <p>
              La Misión
            </p>
          </div>
          <div className="card">
            <h3>Visión</h3>
            <p>
              La visión 
            </p>
          </div>
        </div>
      </section>

      
      <section className="services-section">
        <h2>Experiencia y servicios</h2>
        <div className="service-items">
          <div className="service-card">
            <div className="service-image"></div>
            <h3>Expury Line</h3>
            <p>Detalles sobre este servicio que ofreces.</p>
          </div>
          <div className="service-card">
            <div className="service-image"></div>
            <h3>Contribución</h3>
            <p>Descripción de otro servicio.</p>
          </div>
          <div className="service-card">
            <div className="service-image"></div>
            <h3>Toaja difellj now</h3>
            <p>Descripción de un tercer servicio.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;