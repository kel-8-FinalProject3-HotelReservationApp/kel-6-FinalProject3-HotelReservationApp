import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


const useBookingHistory = () =>{
    const bookingHistory = useSelector((state) => state.persistedReducer.booking.bookingByUser)
    const [hotels,setHotels] = useState([])
    const userLoggedIn = {
        nama:'Rizky Ganteng',
        email: 'babangganteng@gmail.com',
        bookings: 20,
        reviews: 10,
        favourites: 102,
        id: 1,
        phoneNumber: '081273920123'
    }

    const userDisplayData = [
        {
            title: 'Bookings',
            data: userLoggedIn.bookings
        },
        {
            title: 'Reviews',
            data: userLoggedIn.reviews
        },
        {
            title: 'Favourites',
            data: userLoggedIn.favourites
        }
        

    ]
    useEffect(() => {
        async function getData() {
            if(bookingHistory.length !== 0){
                const historyUser = await bookingHistory.find((booking) => booking.id === userLoggedIn.id)
                setHotels(historyUser.hotels)
            }
        }
        getData()
    },[bookingHistory])
    return (
        {hotels, userLoggedIn, userDisplayData}
    )
}

export default useBookingHistory;