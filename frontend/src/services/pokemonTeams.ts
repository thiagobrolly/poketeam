import { useMutation, useQuery, useQueryClient } from 'react-query';
import { PokemonDTO } from '../dtos/PokemonDTO';
import { IPokemonDetails } from '../dtos/PokemonsDTO';
import { api } from './api';
import { storageAuthTokenGet } from '../storage/storageAuthToken';
import { pokeAPI } from './pokeAPI';
import { AppError } from '../utils/AppError';

export async function getPokemonDetails(pokemonName: string) {
  const { data } = await pokeAPI.get<IPokemonDetails>(
    `/pokemon/${pokemonName}`,
  );

  return data;
}

export const addPokemonToTeam = async (pokemon: PokemonDTO) => {
  await api.post('pokemons/add', pokemon);
};

export const removePokemonFromTeam = async (pokemonName: string) => {
  await api.delete(`pokemons/${pokemonName}`);
};

export const usePokemonDetails = (pokemonName: string) => {
  return useQuery(['pokemon', pokemonName], () =>
    getPokemonDetails(pokemonName),
  );
};

export const useAddPokemonToTeam = () => {
  const queryClient = useQueryClient();

  return useMutation((pokemon: PokemonDTO) => addPokemonToTeam(pokemon), {
    onSuccess: () => {
      queryClient.invalidateQueries('teamPokemons');
    },
  });
};

export const useRemovePokemonFromTeam = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (pokemonName: string) => removePokemonFromTeam(pokemonName),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('teamPokemons');
      },
    },
  );
};

export const useTeamPokemons = () => {
  return useQuery('teamPokemons', async () => {
    try {
      const { token } = await storageAuthTokenGet();
      const response = await api.get<PokemonDTO[]>('/pokemons/list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (
        (error as { response?: { status: number } }).response?.status === 404
      ) {
        throw new AppError('Pokemons não encontrados');
      } else {
        throw new AppError('Erro ao carregar os pokemons');
      }
    }
  });

  // const {
  //   data: pokemons = [],
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery('pokemons', fetchTeamPokemons);

  // return { pokemons, isLoading, isError, error };
};
