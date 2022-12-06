import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookingByUser:[]
}

const BookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            const userFound = state.bookingByUser.find((bookList) => bookList.id === action.payload.userId);
            if(userFound) {
                userFound.hotels.push({ ...action.payload.bookInfo})
            } else {
                state.bookingByUser.push({hotels: [{...action.payload.bookInfo}], id: action.payload.userId})
            }
        }
    }
})

export const { addBooking } = BookingSlice.actions;

export default BookingSlice.reducer;