import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { fetchLocation } from "../../config/Hotel/HotelSlice";
import { fetchSearchHotels } from "../../config/Hotel/HotelSlice";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";


const DetailPage = ({route, navigation}) => {
    const hotelInfo = route.params.hotelInfo;
    const days = route.params.days
    const guest = route.params.guest
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    console.log(days)

    const handleAddButton = () => {
      if(Object.keys(userNow).length!==0){
        navigation.navigate("booking", {
          hotelInfo,
          days,
          guest
        })
      } else {
        navigation.navigate('login')
      }
      
  }
    return(
      <ScrollView>
        <ImageBackground
        style={styles.imgView}
        source={{uri:hotelInfo.propertyImage.image.url}}>
          <View style={styles.txtView}>
            <Text style={{fontSize:20, color:"#FFFF", fontWeight:"500"}}> {hotelInfo.name}</Text>
          </View>
        
        </ImageBackground>
        <TouchableOpacity onPress={() => handleAddButton()}>
                <Text >add Booking</Text>
            </TouchableOpacity>
      </ScrollView>
        
    )
}
const styles = StyleSheet.create({
  imgView: {
    width:'100%',
    height:250
  },

  txtView: {
    position:"absolute",
    bottom:0
  }
})
export default DetailPage