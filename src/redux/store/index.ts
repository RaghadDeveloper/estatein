import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./../slice/servicesSlice";
import propertiesReducer from "./../slice/propertiesSlice";
import testimonialsReducer from "./../slice/testimonialsSlice";
import questionsReducer from "./../slice/questionsSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    properties: propertiesReducer,
    testimonials: testimonialsReducer,
    questions: questionsReducer,
  },
});

export default store;
