import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../properties/propertiesSlice";
import teamReducer from "../team/teamSlice";

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    team: teamReducer,
  },
});

export default store;
