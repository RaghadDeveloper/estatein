import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

type UserState = {
  user: User | null;
  loading: boolean;
};

const initialState: UserState = {
  user: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
