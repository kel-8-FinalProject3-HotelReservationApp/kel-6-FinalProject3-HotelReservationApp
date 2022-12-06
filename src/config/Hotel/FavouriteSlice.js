import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersFavourite:[]
}
    


const FavouriteSlice = createSlice({
    name:'favourite',
    initialState,
    reducers: {
        addFavourite : (state, action) => {
            const userFound = state.usersFavourite.find((userFavourite) => userFavourite.id === action.payload.userId);
            if(userFound){
                userFound.hotels.push({ ...action.payload.hotelInfo})
            } else{
                state.usersFavourite.push({hotels: [{...action.payload.hotelInfo}], id: action.payload.userId})
            }
        },
        removeFavourite : (state, action) => {
            const userFound = state.usersFavourite.find((userFavourite) => userFavourite.id === action.payload.userId);
            if(userFound){
                const index = userFound.hotels.map(function(item) {
                    return item.id
                }).indexOf(action.payload.hotelInfo.id);
                userFound.hotels.splice(index, 1)
            }
            
        }
    }
})

export const {addFavourite, removeFavourite} = FavouriteSlice.actions

export default FavouriteSlice.reducer