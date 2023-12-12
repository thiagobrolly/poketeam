export class PokemonAlreadyExistsError extends Error {
  constructor() {
    super('Pokemon already exists.');
  }
}
