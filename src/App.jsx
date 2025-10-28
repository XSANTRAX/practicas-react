import { Navigate } from 'react-router-dom' 
import Inicio from './Componentes/inicio/Inicio'

function App() {
  return (
    <navigator>
      <Navigate to="/" element={<Inicio />} />
      <Navigate to="/Inicio" element={<Inicio />} />
    </navigator>
  )
}

export default App
