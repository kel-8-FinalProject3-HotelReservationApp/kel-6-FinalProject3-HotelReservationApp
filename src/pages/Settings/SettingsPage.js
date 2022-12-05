import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { fetchSearchHotels } from "../../config/Hotel/HotelSlice";
import DatePicker from 'react-native-modern-datepicker';
import SearchCard from "../../components/searchCard";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native";
import { fetchUsers } from "../../config/Login/usersSlice";
import useLogin from "../../hooks/auth/login.hooks";
import LoginInformation from "../Infomation/LoginInformation";


const SettingsPage = ({navigation}) => {
    const {handleLogout, handleLogin, userNow} = useLogin({navigation})
    return (
        <View>
            {Object.keys(userNow).length!==0?
            <TouchableOpacity onPress={() => handleLogout()}> 
                <Text style={{fontWeight:'700', fontSize:20, color:"#22A39F"}}>Logout</Text> 
            </TouchableOpacity>
            :
           <LoginInformation handlePress={handleLogin} />
            }
            
        </View>
    )
}

export default SettingsPage