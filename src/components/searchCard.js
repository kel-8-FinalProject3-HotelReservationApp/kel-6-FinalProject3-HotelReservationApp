import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
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
    ImageBackground
} from "react-native";
import { addFavourite, removeFavourite } from "../config/Hotel/FavouriteSlice";

const SearchCard = ({data, navigation}) => {
    const dispatch = useDispatch()
    const {hotel, guestCount , days} = data
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    const [isFalse, setIsFalse] = useState(false)
    const favourite = useSelector((state) => state.persistedReducer.favourite.usersFavourite)
    const handleDetailButton = (hotelInfo) => {
        let guest = '1'
        if(guestCount!== ''){
            guest = guestCount
        }
        navigation.navigate("detail", {
            hotelInfo,
            days,
            guest
        })
    }
    const IsFalse = () => {
        const userFav = favourite.find(((userFavourite) => userFavourite.id === userNow.id))
        console.log(favourite)
        if(userFav){
            const isfalse = userFav.hotels.find((hotelz) => hotelz.id === hotel.id)? true: false
            setIsFalse(isfalse)
        }
        
    }

    const handleAddFavourite = () => {
        console.log(userNow)
        if(Object.keys(userNow).length===0){
            navigation.navigate("login")
        } else {
            const userId = userNow.id
            const hotelInfo = hotel
            dispatch(addFavourite({hotelInfo, userId}))
            IsFalse(true)
        }
        
    }

    const handleRemoveFavourite = () => {
        if(Object.keys(userNow).length===0){
            navigation.navigate("login")
        } else {
            const userId = userNow.id
            const hotelInfo = hotel
            dispatch(removeFavourite({hotelInfo, userId}))
            IsFalse(false)
        }
        
    }

    const checkFavourite = () => {
        const favourite = useSelector((state) => state.persistedReducer.favourite.usersFavourite)
    }

    useEffect(()=>{
        IsFalse()
    },[favourite, userNow])

    return(
        <TouchableOpacity style={[styles.card, styles.shadowProp]} onPress={() => handleDetailButton(hotel)}>
            <ImageBackground
            style={styles.imgView}
            imageStyle={{borderTopLeftRadius:10, borderTopRightRadius:10}}
            source={{uri:hotel.propertyImage.image.url}}>
                <TouchableOpacity onPress={() => isFalse? handleRemoveFavourite(): handleAddFavourite()}>
                    <Text style={{position:'absolute',right:5,top:5, fontSize:20}}>{isFalse? `🧡`: `🤍`}</Text>  
                </TouchableOpacity>
            </ImageBackground>
            <View style={{flexDirection:'row',margin:5}}>
                <View style={{flex:0.75}}>
                    <Text>{hotel.name}</Text>
                </View>
                <View style={styles.priceView}>
                    <Text style={{fontWeight: '500', fontSize:16, color:'#22A39F'}}>Rp {Math.ceil(hotel.price.lead.amount)}</Text>
                    <Text style={{fontWeight: '200', fontSize:10}}>/per night</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        height: 200,
        backgroundColor:'#FFFF',
        borderRadius:10,
        marginBottom: 10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    imgView: {
        width:'100%',
        height:150
    },
    priceView:{
        flex:0.3,
        width:'25%',
        justifyContent:'center',
        alignItems: "center",
    },
})

export default SearchCard;