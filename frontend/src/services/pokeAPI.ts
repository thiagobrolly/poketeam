import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_POKEMON_URL;

const pokeAPI = axios.create({
  baseURL: apiUrl,
});

export { pokeAPI };
