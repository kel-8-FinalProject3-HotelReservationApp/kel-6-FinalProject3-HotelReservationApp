import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { fetchSearchHotels } from "../../config/Hotel/HotelSlice";
import DatePicker from 'react-native-modern-datepicker';
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

const HomePage = () => {

    return(
        <View>
            <Text>HomePage ....</Text>
        </View>
    )
}

export default HomePage