import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { propertiesData } from "../../data/propertiesData";
import type { FiltersState, PropertyData } from "../../interfaces";



interface PropertiesState {
  all: PropertyData[];
  filters: FiltersState;
}

const initialState: PropertiesState = {
  all: propertiesData,
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
      action: PayloadAction<{ key: keyof FiltersState; value: string }>
    ) {
      state.filters[action.payload.key] = action.payload.value;
    },
    clearFilters(state) {
      state.filters = { search: "" };
    },
  },
});

export const { setSearch, setFilter, clearFilters } = propertiesSlice.actions;
export default propertiesSlice.reducer;
