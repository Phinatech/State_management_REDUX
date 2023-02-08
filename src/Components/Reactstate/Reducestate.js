import { createSlice } from '@reduxjs/toolkit'

//It hold all our state
const initialState = {
    current:null,
}

//name is just like a key to get your redux state or the name of the slice.it is alsways a string
//state.current holds the current state action.payload changes or updatees the state
const Reducestate = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser : (state,action)=>{
        state.current = action.payload
    },
    logoutUser : (state)=>{
        state.current = null
    }
  }
});

export const { loginUser, logoutUser } = Reducestate.actions;

export default Reducestate.reducer