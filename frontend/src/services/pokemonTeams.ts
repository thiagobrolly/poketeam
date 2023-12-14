import { useMutation, useQuery, useQueryClient } from 'react-query';
import { PokemonDTO } from '../dtos/PokemonDTO';
import { IPokemonDetails } from '../dtos/PokemonsDTO';
import { api } from './api';
import { storageAuthTokenGet } from '../storage/storageAuthToken';
import { pokeAPI } from './pokeAPI';
import { AppError } from '../utils/AppError';
import { EvolutionDTO } from '../dtos/EvolutionsDTO';

export interface PokemonSpeciesDTO {
  id: number;
  evolution_chain: {
    url: string;
  };
}

export async function getPokemonDetails(pokemonName: string) {
  const { data } = await pokeAPI.get<IPokemonDetails>(
    `/pokemon/${pokemonName}`,
  );

  return data;
}

export const fetchPokemonSpecies = async (pokemonId: number) => {
  const { data } = await pokeAPI.get<PokemonSpeciesDTO>(
    `/pokemon-species/${pokemonId}`,
  );
  console.log(data);
  const evolutionChainUrl = data.evolution_chain.url;
  const { data: evolutionData } =
    await pokeAPI.get<EvolutionDTO>(evolutionChainUrl);

  console.log('XXXXX =>', evolutionData);

  return evolutionData.chain;
};

export async function getPokemonEvolution(pokemonId: number) {
  const { data } = await pokeAPI.get(`evolution-chain/${pokemonId}/`);
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

export const usePokemonSpecies = (pokemonId: number) => {
  return useQuery(['pokemonEvolutions', pokemonId], () =>
    fetchPokemonSpecies(pokemonId),
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
};
