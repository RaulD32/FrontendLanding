import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonList from '../components/Pokemon';
import ContactForm from '../components/ContactForm';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [generation, setGeneration] = useState(1);

  useEffect(() => {
    const fetchGeneration = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
        const data = await res.json();

        const speciesList = data.pokemon_species;

        const detailed = await Promise.all(
          speciesList.map(async (species: any) => {
            try {
              const speciesRes = await fetch(species.url);
              const speciesData = await speciesRes.json();
              const id = speciesData.id;

              const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
              const details = await pokeRes.json();

              return {
                id,
                name: details.name,
                image: details.sprites.other['official-artwork'].front_default,
                types: details.types.map((t: any) => t.type.name),
                height: details.height,
                weight: details.weight,
              };
            } catch {
              return null;
            }
          })
        );

        const filtered = detailed.filter(p => p !== null) as Pokemon[];
        const sorted = filtered.sort((a, b) => a.id - b.id);

        setPokemons(sorted);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener generación:', error);
        setLoading(false);
      }
    };

    fetchGeneration();
  }, [generation]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow px-6 py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          ¡Bienvenido a la Pokédex!
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10 leading-relaxed tracking-wide">
          Filtra por generación para explorar distintos grupos de <strong>Pokémon</strong>.
        </p>

        <div className="mb-10">
          <label className="text-gray-700 font-semibold text-lg mr-4">Selecciona generación:</label>
          <select
            value={generation}
            onChange={(e) => setGeneration(Number(e.target.value))}
            className="p-2 rounded-lg shadow-md border border-gray-300 text-gray-700"
          >
            {[...Array(9)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Generación {i + 1}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-gray-600 text-lg">Cargando Pokémon de la generación {generation}...</p>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </main>

      <section
  id="contact-form-section"
  className="bg-white py-12 px-6"
>
  <ContactForm />
</section>

      <Footer />
    </div>
  );
}
