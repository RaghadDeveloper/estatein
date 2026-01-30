import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../properties/propertiesSlice";

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});

export default store;
