import { createSlice, current } from "@reduxjs/toolkit";

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
                console.log(current(userFound))
            } else{
                state.usersFavourite.push({hotels: [{...action.payload.hotelInfo}], id: action.payload.userId})
            }
            
        },

        removeFavourite : (state, action) => {
            const userFound = state.usersFavourite.find((userFavourite) => userFavourite.id === action.payload.userId);
            
            if(userFound){
                console.log(action.payload.hotelInfo.id)
                const index = userFound.hotels.map(function(item) {
                    return item.id
                }).indexOf(action.payload.hotelInfo.id);
                console.log(index)
                userFound.hotels.splice(index, 1)
                console.log(current(userFound))
            }
            
        }
    }
})

export const {addFavourite, removeFavourite} = FavouriteSlice.actions

export default FavouriteSlice.reducer