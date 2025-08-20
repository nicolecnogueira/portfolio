import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/pages/About';
import ObraLista from './components/ObraLista';
import ObraListaPorFerramenta from './components/ObraListaPorFerramenta';
import ObraDetail from './components/pages/ObraDetail';
import Footer from './components/Footer';
import Home from './components/pages/Home'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/obras/:slug" element={<ObraDetail />} />
          <Route path="/:categoria" element={<ObraLista />} />
          <Route path="/tool/:toolSlug" element={<ObraListaPorFerramenta />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;