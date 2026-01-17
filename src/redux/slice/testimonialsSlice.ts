import { createSlice } from "@reduxjs/toolkit";
import { testimonialsData, type Testimonial } from "../../data/homeData";

interface TestimonialState {
  testimonials: Testimonial[];
}

const initialState: TestimonialState = {
  testimonials: testimonialsData,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;