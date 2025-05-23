import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItems, getById, getPokemonType } from "../../services/api";

export const fetchItems = createAsyncThunk(
  "items/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getAllItems();
      if (response.success) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.error);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchItemById = createAsyncThunk(
  "items/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await getById(id);
      if (response.success) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.error);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const fetchItemsByType = createAsyncThunk(
  "items/fetchByType",
  async (types, thunkAPI) => {
    try {
      const response = await getPokemonType(types);
      if (response.success) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.error);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    pokemons: [],
    pokemon: {},
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearItems(state) {
      state.pokemons = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch by ID
      .addCase(fetchItemById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemon = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch by Type
      .addCase(fetchItemsByType.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchItemsByType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
      })
      .addCase(fetchItemsByType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearItems } = itemsSlice.actions;
export default itemsSlice.reducer;
