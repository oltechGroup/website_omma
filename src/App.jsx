// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa el componente de tu página
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Aquí se define la ruta para la página de inicio. */}
          {/* El 'path="/"' coincide con la URL raíz de tu sitio. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;