import { Link } from 'react-router-dom';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
}

interface Props {
  pokemons?: Pokemon[];
}

export default function PokemonList({ pokemons = [] }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
          <div className="bg-white rounded-xl shadow-md p-4 w-60 hover:scale-105 transition-transform">
            <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold capitalize text-gray-800 mb-2">
              #{pokemon.id} {pokemon.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tipos:</strong> {pokemon.types.join(', ')}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Altura:</strong> {pokemon.height / 10} m
            </p>
            <p className="text-sm text-gray-600">
              <strong>Peso:</strong> {pokemon.weight / 10} kg
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
