import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";

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
    }
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

export const { login, logout} = usersSlice.actions
export default usersSlice.reducer;