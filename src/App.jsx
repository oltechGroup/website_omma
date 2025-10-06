// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { LanguageProvider } from "./context/LanguageContext";

// Componentes globales
import Navbar from "./components/Navbar";
import ChatbotWidget from "./components/ChatBotWidget"; // ⬅️ importamos el chatbot

// Pages
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/PagesServices/ServicesPage.jsx";
import SportsMedicinePage from "./pages/PagesServices/SportsMedicinePage.jsx";
import KneePage from "./pages/PagesServices/KneePage.jsx";
import ShoulderPage from "./pages/PagesServices/ShoulderPage.jsx";
import ElbowPage from "./pages/PagesServices/ElbowPage.jsx";
import HipPage from "./pages/PagesServices/HipPage.jsx";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/sports-medicine" element={<SportsMedicinePage />} />
            <Route path="/knee" element={<KneePage />} />
            <Route path="/shoulder" element={<ShoulderPage />} />
            <Route path="/elbow" element={<ElbowPage />} />
            <Route path="/hip" element={<HipPage/>}/>
          </Routes>
        </div>

        {/* ⬅️ Chatbot flotante siempre disponible */}
        <ChatbotWidget />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
