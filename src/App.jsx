import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/pages/About';
import ObraLista from './components/pages/ObraLista';
import ObraDetail from './components/pages/ObraDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/obras/:slug" element={<ObraDetail />} />
          <Route path="/illustration" element={<ObraLista categoria="illustration" />} />
          <Route path="/photography" element={<ObraLista categoria="photography" />} />
          <Route path="/videoart" element={<ObraLista categoria="videoart" />} />
          <Route path="/3d-modeling" element={<ObraLista categoria="3d-modeling" />} />
          <Route path="/grafic-design" element={<ObraLista categoria="grafic-design" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;