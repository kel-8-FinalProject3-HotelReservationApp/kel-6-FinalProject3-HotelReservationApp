import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

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


const useBooking = ({route,navigation}) => {
    const dispatch = useDispatch()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const hotelInfo = route.params.hotelInfo
    const id = route.params.hotelInfo.id
    const days = route.params.days
    const guest = route.params.guest
    const totalPrice = route.params.hotelInfo.price.lead.amount
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    console.log(route.params.days)
    console.log(route.params.guest)
    console.log(id)
    
    const [userId,setUserId] = useState(0)
    
    const handleAddButton = () => {
        const bookInfo = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            hotel: hotelInfo
        }
        if(bookInfo.name === ''){
            bookInfo.name = userNow.name.firstname
        }
        if(bookInfo.email === ''){
            bookInfo.email = userNow.email
        }
        if(bookInfo.phoneNumber === ''){
            bookInfo.phoneNumber = userNow.phone
        }
        dispatch(addBooking({bookInfo, userId}))
        navigation.navigate("bookingHistory")
    }

    useEffect(() => {
        if(userNow){
            setUserId(userNow.id)
        }
    },[userNow])
    return {handleAddButton, setEmail, setName, setPhoneNumber,  userId, days, guest, totalPrice, userNow}
    
}

export default useBooking;