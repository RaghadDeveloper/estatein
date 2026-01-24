import { createSlice } from "@reduxjs/toolkit";
import { propertiesData } from "../../data/propertiesData";

const initialState = {
  properties: propertiesData,
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
});

export default propertiesSlice.reducer;
