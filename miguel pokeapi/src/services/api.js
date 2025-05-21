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
    const pokemonType = [];
    for (let i = 0; i < types.length; i++) {
      const response = await fetch(`${BASE_URL}/type/${types[i]}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Pokemon by type: ${response.statusText}`
        );
      }
      const data = await response.json();
      const pokemons = data.pokemon.map((p) => p.pokemon);
      pokemonType.push(...pokemons);
    }

    const seen = new Set();
    const uniquePokemon = pokemonType.filter((p) => {
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
