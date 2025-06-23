import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800">

        {/* Información con logo */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              alt="Logo Pokédex"
              className="h-8"
            />
          </Link>
         
          <p className="text-gray-400 text-sm leading-relaxed">
            Díaz Kauil - Pech Herrera IDYGS92. <br />
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Navegación</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Inicio</a></li>
            <li><a href="/productos" className="hover:text-yellow-400 transition">Pokédex</a></li>
            <li><a href="/nosotros" className="hover:text-yellow-400 transition">Nosotros</a></li>
            <li><a href="/contacto" className="hover:text-yellow-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a href="https://twitter.com/pokeapi" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48..."></path>
              </svg>
            </a>
            <a href="https://github.com/PokeAPI/pokeapi" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2..."></path>
              </svg>
            </a>
            <a href="https://facebook.com/pokeapi" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.48..."></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
