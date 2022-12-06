import React from "react";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../config/Hotel/FavouriteSlice";
import { removeFavourites } from "../config/Login/usersSlice";
import IonIcon from 'react-native-vector-icons/Ionicons';
const FavouriteCard = ({hotel}) => {
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    const dispatch = useDispatch()
    const handleRemoveFavourite = () => {
        if(Object.keys(userNow).length===0){
            navigation.navigate("login")
        } else {
            const userId = userNow.id
            const hotelInfo = hotel.hotel
            dispatch(removeFavourite({hotelInfo, userId}))
            dispatch(removeFavourites())
        }
    }


    return (
        <View style={[styles.card, styles.shadowProp]}>
            
            <Image
            style={styles.imgView}
            source={{uri: hotel.hotel.propertyImage.image.url}}/>
            <View style={styles.cardTextView}>
                <Text style={{fontWeight:'500', fontSize:14,marginBottom: 5}}>{hotel.hotel.name}</Text>
                <View style={{flexDirection:'row',alignItems: "center"}}><Stars
                display={hotel.hotel.reviews.score/2}
                spacing={4}
                count={5}
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                />
                <Text style={{fontWeight:'200'}}> {hotel.hotel.reviews.score/2}/5</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:5}}>
                <Text style={{fontWeight: '500',  color:'#22A39F', fontSize:14}}>{hotel.hotel.price.lead.formatted} </Text>
                <Text style={{fontWeight: '200'}}> /per night </Text>
                </View>

            </View>

            <View style={styles.priceView}>
                <TouchableOpacity onPress={handleRemoveFavourite}>
                    <IonIcon name="trash" size={30}></IonIcon>
                </TouchableOpacity>
            </View>          
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        margin: 10,
        height: 100,
        backgroundColor:'#FFFF',
        borderRadius:10,
        marginBottom: 10,
        flex:1
        
    },

    imgView: {
        flex:0.3,
        borderRadius:10,
        margin: 2,
    },

    cardTextView:{
        flex:0.45,
        margin: 10,
        marginTop:5,

    },

    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },

    myEmptyStarStyle: {
        color: 'white',
    },

    priceView:{
        flex:0.25,
        justifyContent:'center',
        alignItems: "center",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3
    },

})

export default FavouriteCard;