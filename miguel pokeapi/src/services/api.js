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
    const dataWithType = [];
    const paginated = [];
    for (let i = 0; i < items.length; ++i) {
      console.log(i);
      const name = items[i].name;
      const res = await fetch(`${BASE_URL}/pokemon/${name}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch a specific item ${res.statusText}`);
      }
      const details = await res.json();
      dataWithType.push({
        name,
        types: details.types.map((t) => t.type.name),
        id: details.id,
      });
    }
    for (let i = 0; i < dataWithType.length; i += 20) {
      paginated.push(dataWithType.slice(i, i + 20));
    }
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
