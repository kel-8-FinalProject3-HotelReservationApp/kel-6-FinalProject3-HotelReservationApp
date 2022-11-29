import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { addBooking } from "../../config/Booking/BookingSlice";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import useBookingHistory from "../../hooks/booking/history.hooks";


const useBooking = ({navigation}) => {
    const dispatch = useDispatch()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const {userLoggedIn} = useBookingHistory()
    const hotel = {
        namaHotel: 'Hotel Mawar Melati',
        alamatHotel: 'Jl. Semuanya Indah',
        price:'300',
        rating:4.2
    }
    
    
    const userId = 1;
    const handleAddButton = () => {
        const bookInfo = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            hotel: hotel
        }
        if(bookInfo.name === ''){
            bookInfo.name = userLoggedIn.nama
        }
        if(bookInfo.email === ''){
            bookInfo.email = userLoggedIn.email
        }
        if(bookInfo.phoneNumber === ''){
            bookInfo.phoneNumber = userLoggedIn.phoneNumber
        }
        dispatch(addBooking({bookInfo, userId}))
        navigation.navigate("bookingHistory")
    }

    return {handleAddButton, setEmail, setName, setPhoneNumber, hotel, userId}
    
}

export default useBooking;