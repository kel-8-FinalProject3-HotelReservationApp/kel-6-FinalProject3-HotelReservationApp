import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  userLoggedIn:{}
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    let url = `https://fakestoreapi.com/users`;
    const response = await axios.get(url);
    return response.data;
  }
);



const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userLoggedIn = action.payload.user
    },
    logout : (state) => {
      state.userLoggedIn = initialState.userLoggedIn
    },
    addBookings: (state) => {
      const userFound = state.userLoggedIn
      console.log(state.userLoggedIn)
      if(userFound){
        userFound.bookings++
        console.log(userFound.bookings)
      }
    },
    addFavourites: (state) => {
      const userFound = state.userLoggedIn
      const updateInUsers = state.users.find((user) => user.id === state.userLoggedIn.id )
      console.log(state.userLoggedIn)
      if(userFound){
        userFound.favourites++
        updateInUsers.favourites++
        console.log(userFound.bookings)
      }
    },
    removeFavourites: (state) => {
      const userFound = state.userLoggedIn
      const updateInUsers = state.users.find((user) => user.id === state.userLoggedIn.id )
      console.log(state.userLoggedIn)
      if(userFound){
        userFound.favourites--
        updateInUsers.favourites--
        console.log(userFound.bookings)
      }
    },
    changeProfile: (state, action) => {
      const userFound = state.userLoggedIn
      const updateInUsers = state.users.find((user) => user.id === state.userLoggedIn.id )
      if(action.payload.title === 'firstname'){
        userFound.name.firstname = action.payload.input
        updateInUsers.name.firstname = action.payload.input
      } else if(action.payload.title === 'lastname'){
        userFound.name.lastname = action.payload.input
        updateInUsers.name.lastname = action.payload.input
      } else if(action.payload.title === 'phone'){
        userFound.phone = action.payload.input
        updateInUsers.phone = action.payload.input
      } else{
        userFound.email = action.payload.input
        updateInUsers.email = action.payload.input
      }
    },
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const users = action.payload.map((user) => {
            return { ...user, reviews:0 , bookings:0, favourites:0 };
        })
        state.users = users
      })
  },
});

export const { login, logout, addBookings, addFavourites, removeFavourites, changeProfile} = usersSlice.actions
export default usersSlice.reducer;