import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Vistas cliente
import Home from './views/Home';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
