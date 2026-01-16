import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      H3:"How do I search for properties on Estatein?",
      P:"Learn how to use our user-friendly search tools to find properties that match your criteria.",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein?",
      P:"Find out about the necessary documentation for listing your property with us.",
      TextButton:"Read More"
    },{
      H3:"How can I contact an Estatein agent?",
      P:"Discover the different ways you can get in touch with our experienced agents.",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein 2?",
      P:"Discover the different ways you can get in touch with our experienced agents. 2",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein 3?",
      P:"Discover the different ways you can get in touch with our experienced agents. 3",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein 4?",
      P:"Discover the different ways you can get in touch with our experienced agents. 4",
      TextButton:"Read More"
    }
  ],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;
