import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItems, getById } from "../../services/api";

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

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearItems(state) {
      state.data = [];
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
        state.data = action.payload;
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
        state.data = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearItems } = itemsSlice.actions;
export default itemsSlice.reducer;
