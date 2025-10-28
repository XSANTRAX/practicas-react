import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Componentes/inicio/Inicio';
import Empleos from './Componentes/empleos/Empleo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Empleos />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Empleo" element={<Empleos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;