import { paginateArray } from "../utils/pagination";
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://pokeapi.co/api/v2/";

export async function getAllItems() {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=100000&offset=0`);
    if (!response.ok) {
      throw new Error(`Failed to fetch all items: ${response.statusText}`);
    }
    const data = await response.json();
    const items = data.results;
    const paginated = paginateArray(items);
    return { success: true, data: paginated };
  } catch (error) {
    console.error("Error fetching all items:", error);
    return { success: false, error: error.message };
  }
}

export async function getAllItemsSpecific(generation) {
  try {
    const response = await fetch(`${BASE_URL}/pokedex/${generation}`);
    console.log("fetching specific...");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch all items from specific pokedex: ${response.statusText}`
      );
    }
    const data = await response.json();
    const items = data.pokemon_entries.map((entry) => entry.pokemon_species);
    const paginated = paginateArray(items);
    return { success: true, data: paginated };
  } catch (error) {
    console.error("Error fetching all items from specificpokedex:", error);
    return { success: false, error: error.message };
  }
}

export async function getById(id) {
  try {
    const response = await fetch(`${BASE_URL}pokemon/${id}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Pokemon by name: ${response.statusText}`
      );
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching Pokemon by name:", error);
    return { success: false, error: error.message };
  }
}

export async function getPokemonType(types) {
  try {
    const pokemonTypeLists = [];
    for (let i = 0; i < types.length; i++) {
      const response = await fetch(`${BASE_URL}/type/${types[i]}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Pokemon by type: ${response.statusText}`
        );
      }
      const data = await response.json();
      const pokemons = data.pokemon.map((p) => p.pokemon);
      pokemonTypeLists.push(pokemons);
    }

    let andPokemonlist = pokemonTypeLists[0];
    for (let i = 1; i < pokemonTypeLists.length; i++) {
      const currentSet = new Set(pokemonTypeLists[i].map((p) => p.name));
      andPokemonlist = andPokemonlist.filter((p) => currentSet.has(p.name));
    }

    const seen = new Set();
    const uniquePokemon = andPokemonlist.filter((p) => {
      if (seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    });

    const paginated = paginateArray(uniquePokemon);

    return { success: true, data: paginated };
  } catch (error) {
    console.error("Error fetching all pokemonTypes", error);
    return { success: false, error: error.message };
  }
}

export async function getRegionInfo(id) {
  try {
    const response = await fetch(`${BASE_URL}region/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch Region by id: ${response.statusText}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching Region by Id:", error);
    return { success: false, error: error.message };
  }
}
