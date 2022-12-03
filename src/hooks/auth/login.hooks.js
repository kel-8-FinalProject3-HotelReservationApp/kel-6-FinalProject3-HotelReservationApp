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


const useLogin = ({navigation}) => {
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    const handleLogin = () => {
        navigation.navigate("login")
    }
    const handleLogout = () => { 
        dispatch(logout())
        navigation.navigate('login')
    }
    return {handleLogin, handleLogout, userNow}
}

export default useLogin
