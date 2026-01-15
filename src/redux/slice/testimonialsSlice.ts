import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
