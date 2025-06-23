import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  base_experience: number;
  stats: { name: string; base: number }[];
}

const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-300',
  fighting: 'bg-red-700',
  poison: 'bg-purple-600',
  ground: 'bg-yellow-700',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-600',
  rock: 'bg-gray-600',
  ghost: 'bg-indigo-700',
  dragon: 'bg-purple-800',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        const formatted: PokemonDetail = {
          id: data.id,
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          types: data.types.map((t: any) => t.type.name),
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map((a: any) => a.ability.name),
          base_experience: data.base_experience,
          stats: data.stats.map((s: any) => ({
            name: s.stat.name,
            base: s.base_stat,
          })),
        };

        setPokemon(formatted);
        setLoading(false);
      } catch (error) {
        console.error('Error cargando detalle del Pokémon:', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-xl">Cargando Pokémon...</div>;
  if (!pokemon) return <div className="text-center mt-10 text-xl">No se encontró el Pokémon.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-red-200 to-red-400 p-6 flex flex-col items-center">
      <Link
        to="/"
        className="self-start mb-6 text-blue-800 font-semibold hover:underline"
      >
        ← Volver
      </Link>

      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen y ID */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-48 h-48 object-contain mb-4 drop-shadow-lg"
          />
          <span className="text-gray-600 font-semibold">#{pokemon.id}</span>
        </div>

        {/* Info */}
        <div className="md:w-2/3 text-left">
          <h1 className="text-5xl font-extrabold capitalize text-red-700 mb-4 drop-shadow">
            {pokemon.name}
          </h1>

          
          <div className="flex gap-3 mb-6">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`text-white px-4 py-1 rounded-full font-semibold capitalize shadow-md ${typeColors[type] || 'bg-gray-500'}`}
              >
                {type}
              </span>
            ))}
          </div>

          
          <div className="flex flex-wrap gap-6 mb-6">
            <div>
              <p className="text-gray-700 font-semibold">Altura</p>
              <p className="text-xl">{(pokemon.height / 10).toFixed(1)} m</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Peso</p>
              <p className="text-xl">{(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Experiencia base</p>
              <p className="text-xl">{pokemon.base_experience}</p>
            </div>
            <div className="min-w-[180px]">
              <p className="text-gray-700 font-semibold">Habilidades</p>
              <p className="capitalize">{pokemon.abilities.join(', ')}</p>
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas base</h2>
            <div className="space-y-3 max-w-md">
              {pokemon.stats.map(({ name, base }) => (
                <div key={name}>
                  <p className="capitalize font-semibold mb-1">{name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-5">
                    <div
                      className="bg-red-600 h-5 rounded-full"
                      style={{ width: `${(base / 255) * 100}%` }}
                      title={`${base}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
