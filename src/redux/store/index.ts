import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./../slice/propertiesSlice";

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});

export default store;
