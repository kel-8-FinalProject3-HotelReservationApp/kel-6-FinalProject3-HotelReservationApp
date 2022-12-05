import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useState } from "react";
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
import HistoryCard from "../../components/historyCard";
import LoginInformation from "../Infomation/LoginInformation";


const FavouritePage = ({navigation}) => {
  const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
  const allFavourite = useSelector((state) => state.persistedReducer.favourite.usersFavourite)

  const [userFav, setUserFav] = useState([]);

  const handleLogin = () => {
    navigation.navigate("login")
  }
  
  useMemo(() => {
    if(Object.keys(userNow).length!==0&&allFavourite){
      const hotelsFav = allFavourite.find((favorite) => favorite.id === userNow.id)
      if(hotelsFav){
        setUserFav(hotelsFav)
      }
    }
  },[allFavourite,userNow])
  

    return(
      <ScrollView>
      {Object.keys(userNow).length!==0?
      <>
      
        {userFav.length!==0 && userFav.hotels.length!==0?
          <>
          {userFav.hotels.map((hotel,idx) => {
            console.log(hotel)
            return(
              <HistoryCard hotel={{hotel:hotel}} key={idx}/>
            )
          })}
          </>
          
        : 
          <Text>
            Belum ada favourite
          </Text>
        }
      </>
      :
      
      <LoginInformation handlePress={handleLogin} />
        // <View style={{marginTop:'50%'}}>
        //     <TouchableOpacity onPress={() => handleLogin()}> 
        //     <Text style={{fontWeight:'700', fontSize:20, color:"#22A39F"}}>Anda belum login, silahkan login terlebih dahulu</Text> 
        //     </TouchableOpacity>
        // </View>
      }
        
        

      </ScrollView>
        
    )
}

export default FavouritePage