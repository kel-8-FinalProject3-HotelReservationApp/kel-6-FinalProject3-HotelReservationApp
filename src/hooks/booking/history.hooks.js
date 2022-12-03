import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


const useBookingHistory = ({navigation}) =>{
    const bookingHistory = useSelector((state) => state.persistedReducer.booking.bookingByUser)
    console.log(bookingHistory)
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    console.log(userNow)
    const [hotels,setHotels] = useState([])

    const userDisplayData = [
        {
            title: 'Bookings',
            data: userNow.bookings
        },
        {
            title: 'Reviews',
            data: userNow.reviews
        },
        {
            title: 'Favourites',
            data: userNow.favourites
        }
        

    ]

    const handleLogin = () => {
        navigation.navigate("login")
    }

    useEffect(() => {
        function getData() {
            if(bookingHistory.length !== 0){
                const historyUser = bookingHistory.find((booking) => booking.id === userNow.id)
                console.log(historyUser)
                if(historyUser){
                    setHotels(historyUser.hotels)
                }else{
                    setHotels([])
                }
            }
        }
        getData()
    },[userNow,bookingHistory])


    return (
        {hotels, userDisplayData, userNow, handleLogin}
    )
}

export default useBookingHistory;