import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const initialState = {
    searchResults:[],
    errorMessage:'',
    isLoading:false,
    currentHotel:{},
    loadingDetail:false
}

export const fetchLocation = 
    async (query) => {
        let location = []
        const options = {
            method: 'GET',
            url: 'https://hotels-com-provider.p.rapidapi.com/v2/regions',
            params: {query: query, domain: 'ID', locale: 'en_GB'},
            headers: {
              'X-RapidAPI-Key': '28c6ee32abmshe5fdf05d0ae30bep138bc2jsn295766aef3ed',
              'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };

        await axios.request(options).then((response) => {
            location = response.data
        }).catch((error) => {
            console.log(error)
        })

        return location
    }

export const fetchSearchHotels = createAsyncThunk(
    "hotels/fetchHotels",
    async ({query, checkinDate, checkoutDate, guestCount}) => {
        let searchResult = {}
        let location = await fetchLocation(query)
        const city = location.data.find((data) => data.type === "CITY")
        const cityUsed = city.gaiaId
        const options = {
            method: 'GET',
            url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search',
            params: {
              checkin_date: checkinDate,
              checkout_date: checkoutDate,
              sort_order: 'DISTANCE',
              region_id: cityUsed,
              adults_number: guestCount,
              locale: 'en_GB',
              currency: 'USD',
              page_number: '1',
              domain:'ID'
            },
            headers: {
              'X-RapidAPI-Key': '28c6ee32abmshe5fdf05d0ae30bep138bc2jsn295766aef3ed',
              'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };

        await axios.request(options).then((response) => {
            searchResult = response.data.properties
            }).catch((error) => {
                console.error(error);
                throw new Error(error)
        });

        if(searchResult.length >10){
            searchResult = searchResult.slice(0, 10)
        }
        return searchResult
    }
)

export const getDetailHotel = createAsyncThunk(
    "hotels/detailHotel",
    async(hotelId) => {
        let hotelDetail = {}
        console.log(typeof hotelId)
        const options = {
            method: 'GET',
            url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/info',
            params: {domain: 'ID', locale: 'en_GB', hotel_id: hotelId},
            headers: {
              'X-RapidAPI-Key': '28c6ee32abmshe5fdf05d0ae30bep138bc2jsn295766aef3ed',
              'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
          };
          
          await axios.request(options).then((response) => {
            hotelDetail = response.data
          }).catch(function (error) {
              console.error(error);
              throw new Error(error)
          });
        
          return hotelDetail

    }
)
const HotelSlice = createSlice({
    name:'hotels',
    initialState,
    reducers:{
        getCurrentHotel:(state, action) =>{
            const hotelId = action.payload
            state.currentHotel = getDetailHotel(hotelId)
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchSearchHotels.fulfilled, (state,action) => {
            state.searchResults = action.payload
            state.isLoading = initialState.isLoading
            state.errorMessage = initialState.errorMessage
        }).addCase(fetchSearchHotels.pending, (state) => {
            state.isLoading = true
            state.errorMessage = initialState.errorMessage
        }).addCase(fetchSearchHotels.rejected, (state) => {
            state.isLoading = false
            state.errorMessage = "Hotel tidak ditemukan"
            state.searchResults= initialState.searchResults
        }).addCase(getDetailHotel.fulfilled, (state, action)=> {
            state.currentHotel = action.payload
            state.loadingDetail = false
        }).addCase(getDetailHotel.pending, (state)=> {
            state.loadingDetail = true
        }).addCase(getDetailHotel.rejected, (state)=> {
            state.loadingDetail = false
        })
        
    }
})

export const {getCurrentHotel} = HotelSlice.actions
export default HotelSlice.reducer;