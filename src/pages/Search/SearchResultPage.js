import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const SearchResultPage = ({navigation}) => {
    const handleAddButton = () => {
        navigation.navigate("booking")
        console.log('asd')
    }

    const handleHistoryButton = () => {
        navigation.navigate("bookingHistory")
    }
    return(
        <View>
            <TouchableOpacity onPress={() => handleAddButton()}>
                <Text >add Booking</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleHistoryButton()}>
                <Text >my Booking History</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchResultPage