export interface Species {
  name: string;
  url: string;
}

export interface EvolutionDetailDTO {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: Species;
  turn_upside_down: boolean;
}

export interface EvolutionChainDTO {
  evolution_details: EvolutionDetailDTO[];
  evolves_to: EvolutionChainDTO[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionDTO {
  baby_trigger_item: null;
  chain: EvolutionChainDTO;
  id: number;
}
