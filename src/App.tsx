import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Vistas cliente
import Home from './views/Home';
import PokemonDetail from './components/PokemonDetail';
import Privacidad from './views/Privacidad';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/aviso-de-privacidad" element={<Privacidad />} />

      </Routes>
    </Router>
  );
}

export default App;
