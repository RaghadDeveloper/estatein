import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
});

export default propertiesSlice.reducer;
