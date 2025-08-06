import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/pages/About';
import ObraLista from './components/pages/ObraLista';
import ObraDetail from './components/pages/ObraDetail';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {/* Rota da Página Inicial */}
          <Route path="/" element={<About />} />

          {/* Rota para os detalhes de UMA obra */}
          <Route path="/obras/:slug" element={<ObraDetail />} />

          {/* 2. Rotas para CADA categoria, reutilizando o mesmo componente! */}
          <Route path="/illustration" element={<ObraLista categoria="illustration" />} />
          <Route path="/photography" element={<ObraLista categoria="photography" />} />
          <Route path="/videoart" element={<ObraLista categoria="videoart" />} />
          <Route path="/3d-modeling" element={<ObraLista categoria="3d-modeling" />} />
          <Route path="/grafic-design" element={<ObraLista categoria="grafic-design" />} />

          {/* Rota para ABOUT (se precisar de uma página só para isso) */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;