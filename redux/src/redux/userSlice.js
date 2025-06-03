import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "sinchan",
    email: "sinchan@gmail.com",
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    greetings: (state, action) => {
      state.name = "🙏 " +action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, greetings, remove } = userSlice.actions;
export default userSlice.reducer;
