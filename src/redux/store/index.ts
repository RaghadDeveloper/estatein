import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../properties/propertiesSlice";
import teamReducer from "../team/teamSlice";
import userReducer from "../user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertiesReducer,
    team: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
