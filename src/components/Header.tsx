import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const formSection = document.getElementById('contact-form-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: false });
      setTimeout(() => {
        const formSection = document.getElementById('contact-form-section');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { replace: false });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <header className="bg-white border-b border-red-500 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <a
          href="/"
          onClick={handleLogoClick}
          className="cursor-pointer"
          aria-label="Inicio"
          title="Inicio"
        >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Logo Pokédex"
            className="h-8"
          />
        </a>

        
        <button
          onClick={handleContactClick}
          className="py-1 px-3 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Contacto
        </button>
      </div>
    </header>
  );
}
