const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
"https://pokeapi.co/api/v2/";

export async function getAllItems() {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=100000&offset=0`);
    if (!response.ok) {
      throw new Error(`Failed to fetch all items: ${response.statusText}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching all items:", error);
    return { success: false, error: error.message };
  }

}

export async function getById(id) {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch item by ID: ${response.statusText}`);
        }
        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        return { success: false, error: error.message };
    }
}
