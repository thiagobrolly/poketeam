import { Link } from 'react-router-dom';
import { listPokemons } from '../../services/listPokemons';
import { useQuery } from 'react-query';
import { FormEvent, useEffect, useState } from 'react';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { PokemonCard } from '../../components/PokemonCard';
import { useTeamPokemons } from '../../services/pokemonTeams';

import * as S from './styles';
import { Loading } from '../../components/Loading';

export function Dashboard() {
  const { data: teamPokemons, isLoading: teamPokemonsIsLoading } =
    useTeamPokemons();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined,
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  const handleTypeSelect = (type: string | undefined) => {
    setSelectedType(type);
  };

  const { data, isLoading, isError, refetch } = useQuery(
    ['listPokemons', selectedType, searchQuery],
    () => listPokemons(selectedType, searchQuery),
  );

  useEffect(() => {
    if (searchQuery !== '') {
      refetch();
    }
  }, [searchQuery, refetch]);

  if (teamPokemonsIsLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Header />

      <S.ContentHeader>
        <div>
          <Filter onSelectType={handleTypeSelect} />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar Pokémon por nome"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div>
          <span>
            Quantidade de pokemons no time: <b>{teamPokemons?.length}</b>
          </span>
          <Link to="/team">Ver Time</Link>
        </div>
      </S.ContentHeader>

      <div>
        {isError && <p>Failed to fetch Pokémon. Please try again.</p>}

        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
              width: '100%',
              height: '100%',
              gap: '8px',
            }}
          >
            {data?.results.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </S.Container>
  );
}
