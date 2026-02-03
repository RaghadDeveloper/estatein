import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FiltersState, PropertyData } from "../../interfaces";

interface PropertiesState {
  all: PropertyData[];
  filters: FiltersState;
}

const initialState: PropertiesState = {
  all: [],
  filters: {
    search: "",
  },
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },
    setFilter(
      state,
      action: PayloadAction<{ key: keyof FiltersState; value: string }>,
    ) {
      state.filters[action.payload.key] = action.payload.value;
    },
    clearFilters(state) {
      state.filters = { search: "" };
    },
    setProperties(state, action: PayloadAction<PropertyData[]>) {
      state.all = action.payload;
    },
  },
});

export const { setSearch, setFilter, clearFilters, setProperties } =
  propertiesSlice.actions;
export default propertiesSlice.reducer;
