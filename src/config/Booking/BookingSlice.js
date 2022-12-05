import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    bookingByUser:[]
}

const BookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            console.log(current(state.bookingByUser))
            const userFound = state.bookingByUser.find((bookList) => bookList.id === action.payload.userId);
            if(userFound) {
                userFound.hotels.push({ ...action.payload.bookInfo})
                console.log(userFound)
            } else {
                state.bookingByUser.push({hotels: [{...action.payload.bookInfo}], id: action.payload.userId})
            }
            // state.bookingByUser = initialState.bookingByUser
        }
    }
})

export const { addBooking } = BookingSlice.actions;

export default BookingSlice.reducer;