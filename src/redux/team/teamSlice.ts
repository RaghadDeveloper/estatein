import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MemberType } from "../../interfaces";

interface teamState {
  items: MemberType[];
}

const initialState: teamState = {
  items: [
    {
      name: "Max Mitchell",
      position: "Founder",
      imageUrl: "/assets/images/team/member1.webp",
    },
    {
      name: "Sarah Johnson",
      position: "Chief Real Estate Officer",
      imageUrl: "/assets/images/team/member2.webp",
    },
    {
      name: "David Brown",
      position: "Head of Property Management",
      imageUrl: "/assets/images/team/member3.webp",
    },
    {
      name: "Michael Turner",
      position: "Legal Counsel",
      imageUrl: "/assets/images/team/member4.webp",
    },
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam(state, action: PayloadAction<MemberType[]>) {
      state.items = action.payload;
    },
  },
});

export const { setTeam } = teamSlice.actions;
export default teamSlice.reducer;
