import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo:{
      name: "sinchan",
      email: "sinchan@gmail.com",
    },
    pending:false,
    error:false
    
  },

  reducers: {
    //NORMAL REDUCERS
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // greetings: (state, action) => {
    //   state.name = "🙏 " +action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => (state = {}),

    //REDUCERS USING API 

    updateStart:(state)=>{
      state.pending = true
    },
    updateSuccess:(state,action)=>{
      state.pending = false,
      state.error = false,
      state.userInfo =action.payload;
    },
    updateError:(state)=>{
      state.error = true
      state.pending = false
    }
  },
});

export const {  updateStart, updateSuccess,updateError } = userSlice.actions;
export default userSlice.reducer;
